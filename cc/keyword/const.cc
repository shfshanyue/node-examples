#include <iostream>
using namespace std;

// 1. const 具有类型，可在编译期进行安全检查，而 #define 不可以
// 2. const 必须进行初始化，且不可更改

void f1()
{
  // const 必须进行初始化，否则会报错
  const int b = 10;
  cout << b << endl;

  // 以下为错误示例:
  // const int b;
}

void f2()
{
  const string hello = "hello, world";
  cout << hello << endl;
}

void f3()
{
  // 指向常量的指针
  const int *ptr;
  int a = 3;
  ptr = &a;

  // 虽然 *ptr 不可以变，但是指针可以...
  int b = 4;
  ptr = &b;

  cout << *ptr << endl;
}

void f4()
{
  int a = 4;

  // 长指针必须进行初始化！
  int * const ptr = &a;

  cout << *ptr << endl;
}

int main()
{
  f1();
  f2();
  f3();
  f4();
}
