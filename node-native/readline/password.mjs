import password from '@inquirer/password'
import { createInterface } from 'node:readline/promises'
import MuteStream from 'mute-stream'
const ENTER = '\u000d'
const BACKSPACE = '\u0008'

const ESC = '\x1b['
const eraseLine = ESC + '2K';
const cursorLeft = ESC + 'G';
const cursorUp = (count = 1) => ESC + count + 'A';
const cursorDown = (count = 1) => ESC + count + 'B';

// 清除 N 行数据
const eraseLines = count => {
	let clear = '';

  // 清除 N 行数据并移至光标至第一行
	for (let i = 0; i < count; i++) {
		clear += eraseLine + (i < count - 1 ? cursorUp() : '');
	}

  // 移至光标至第一列
	if (count) {
		clear += cursorLeft;
	}

	return clear;
};

async function f1() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.input.on('data', (data) => {
    if (data !== ENTER) {
      rl.write(BACKSPACE + '*');
    }
  });
  const answer = await rl.question('password: ')
  console.log(answer)
  rl.close()
}

async function f2() {
  const ms = new MuteStream({ replace: '*' })
  ms.pipe(process.stdout)
  const rl = createInterface({
    input: process.stdin,
    output: ms
  });

  rl.output.write('password: ')
  
  let answer = ''
  rl.output.mute()
  rl.input.on('keypress', (c) => {
    answer += c
    if (c.toString() === ENTER) {
      rl.close()
      console.log(answer)
    }
  })
}

async function f3() {
  const answer = await password({ message: 'Enter your name', mask: '*' });
  console.log(answer)
}

async function f4() {
  console.log(`hello, world\npassword\npassword. ${eraseLines(2)}`)
}

f4()