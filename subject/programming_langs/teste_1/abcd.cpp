#include <iostream>

using namespace std;

int i = 0;

int main()
{
  int a = 1, b = 2, c = 3, d = 4;
  int i = a;

  if (1)
  {
    int i = b;
    if (1)
    {
      int i = c;
      for (int i = d; i < 10; i++)
        cout << i << " ";
      cout << i << " ";
    }
    cout << i << " ";
  }
  cout << i << " ";
}