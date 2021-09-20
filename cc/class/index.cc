#include <iostream>

using namespace std;

class User {
 public:
  int age;
  string name;
  User(int, string);
  void setName(string);
};

User::User(int age, string name) {
  this->age = age;
  this->name = name;
}

void User::setName(string name) { this->name = name; }

int main() {
  User user1(18, "山月");
  user1.name = "shanyue";

  cout << user1.age << "-" << user1.name << endl;

  shared_ptr<User> user2 = make_shared<User>(18, "shanyue");

  cout << user2->age << "-" << user2->name << endl;

  // 手动申请空间，最后需要 delete 掉
  User *user3 = new User(18, "shanyue");
  cout << user3->age << "-" << user3->name << endl;
  delete user3;

  unique_ptr<User> user4(new User(18, "shanyue"));
  cout << user4->age << "-" << user4->name << endl;

  return 0;
}