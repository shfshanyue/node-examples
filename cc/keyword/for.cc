#include <iostream>
using namespace std;

void f1() {
  string str = "hello, world";
  for (auto ch : str) {
    cout << ch << endl;
  }
}

void f2() {
  int arr[] = {1, 2, 3, 4};
  for (auto x : arr) {
    cout << x << endl;
  }
}

int main() {
  f1();
  f2();
}
