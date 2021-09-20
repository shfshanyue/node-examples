#include <iostream>
#include <fcntl.h>
#include <fstream> 

using namespace std;

int main() {
  
  int fd = open("./Readme.md", O_TRUNC | O_RDWR | O_APPEND | O_CREAT);

  fstream fs;
  fs.open ("./Readme.md", std::fstream::in | std::fstream::out | std::fstream::app);
  
  return 0;
}
