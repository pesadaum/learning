#include <iostream>

using namespace std;

int F1(int X, int Y)
{
  if (X < Y)
    return X;
  else
    return F1(X - Y, Y);
}

int main()
{
  cout << F1(10, 2) << endl;
  cout << F1(10, 3) << endl;
  return 0;
}