fn main() {
    // 默认不可变变量
    let x = 4;

    // 打印只能通过字符串打印，与 python 一致
    println!("{}", x);

    // 函数加 ! 表示宏
    println!("Hello, world!");

    let mut y = 3;
    println!("{}", y);
    y = 10;
    println!("{}", y);

    owner();
}

fn owner () {
    let a = 3;
    let b = a;
    println!("{}, {}", a, b);

    let s1 = String::from("hello");
    let s2 = s1.clone();
    println!("{}, {}", s2, s2);
}