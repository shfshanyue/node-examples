// Fix the error without removing code line
fn main() {
  let s = String::from("hello, world");

  // print_str(s.clone());
  print_str(s);

  println!("{}", s);
}

// or use &String
fn print_str(s: String)  {
  println!("{}",s)
}
