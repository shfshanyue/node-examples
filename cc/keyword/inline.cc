#include <iostream>

using namespace std;

// 1. 在 C++ 中，为了避免某个函数的频繁调用浪费空间 (栈内存)，引入了 inline
// 2. inline 只是对编译期一厢情愿的建议，编译期有可能不采取任何行动
// 3. inline 最好放在最顶部

inline int f1 ()
{
  return 3;
}

int main()
{
  for (int i = 0; i < 100; i++)
  {
    int a = f1();
    cout << i << ": " << a << endl;
  }
}