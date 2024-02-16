const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

async function main() {
  const username = await rl.question('username: ')
  const password = await rl.question('password: ')

  rl.close()
}

main()