#include <iostream>

using namespace std;

int main()
{
  int a = __INT_MAX__ + 1;  // overflow
  int b = __WINT_MIN__ - 1; // ?????

  cout << "a,b: " << a << ", " << b << endl;
  return 0;
}