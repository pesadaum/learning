#include <iostream>

using namespace std;

int prova(int n)
{
  if (n == 0)
    return 0;
  return n * 2 - 1 + prova(n - 1);
}

int main()
{
  cout << prova(3) << endl;
  cout << prova(-5) << endl;
}