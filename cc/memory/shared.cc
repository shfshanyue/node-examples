// make_shared example
#include <iostream>
#include <memory>

using namespace std;

class User {
 public:
  int age;
  User(int);
};

User::User(int age) {
  this->age = age;
}

int main() {
  std::shared_ptr<int> x = std::make_shared<int>(10);

  std::cout << *x << std::endl;

  std::shared_ptr<User> user = std::make_shared<User>(10);

  std::cout << user -> age << std::endl;
  return 0;
}