#include <iostream>

using namespace std;

std::string getOsName() {
#ifdef _WIN32
  return "Windows 32-bit";
#elif _WIN64
  return "Windows 64-bit";
#elif __POSIX__
  return "Posix";
#elif __linux__
  return "Linux";
#elif __FreeBSD__
  return "FreeBSD";
#elif __unix || __unix__
  return "Unix";
#elif __APPLE__ || __MACH__
  return "Mac OSX";
#else
  return "Other";
#endif
}

int main () {
  string os = getOsName();

  cout << os << endl;

  return 0;
}