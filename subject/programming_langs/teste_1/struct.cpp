#include <iostream>

using namespace std;

typedef union
{
  char A[2];
  struct
  {
    char B, C;
  } X;

} tUniao;

int main()
{
  tUniao dado;
  dado.A[0] = 'a';
  dado.A[1] = 'b';
  dado.X.B = 'c';
  dado.X.C = 'd';

  cout << dado.A[0] << dado.A[1] << dado.X.B << dado.X.C << endl;
}