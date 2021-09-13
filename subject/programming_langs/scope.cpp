#include <iostream>

using namespace std;

void print_var()
{
  int i = 0;
  static int i2 = 0;

  i++;
  i2++;

  cout << "i = " << i << endl;
  cout << "i2 = " << i2 << endl;
}

int main()
{
  print_var();
  print_var();
  print_var();
  print_var();
  print_var();
  print_var();

  return 0;
}