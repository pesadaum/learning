#include <iostream>

using namespace std;

#define x ++y

int y = 2;

void m()
{
  int y = 1;
  cout << x << "\t";
}
void n()
{
  cout << x << "\t";
}

int main()
{
  m();
  n();
}