#include <iostream>

using namespace std;

class User
{
public:
  int age;
  string name;
  User(int, string);
  void setName(string);
};

User::User(int age, string name)
{
  this->age = age;
  this->name = name;
}

void User::setName(string name)
{
  this->name = name;
}

int main()
{
  User user(18, "山月");
  user.name = "shanyue";

  cout << user.age << "-" << user.name << endl;

  return 0;
}