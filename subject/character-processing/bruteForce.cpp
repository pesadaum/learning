#include <iostream>
#include <string>

using namespace std;

void forcaBruta(string T, int n, string P, int m)
{
  int i, j, k;
  for (i = 1; i <= (n - m + 1); i++)
  {
    k = i;
    j = 1;
    while (T[k - 1] == P[j - 1] && j <= m)
    {
      j++;
      k++;
    }
    if (j > m)
      cout << "Casamento na posição " << i << endl;
  }
}

void forcaBruta_2(string T, string P)
{
}

int main()
{
  string Texto = "maco macaco camaco ccamoa amaco caamomacaco";
  string Padrao = "macaco";
  int tamanho_texto = Texto.length();
  int tamanho_padrao = Padrao.length();

  forcaBruta(Texto, tamanho_texto, Padrao, tamanho_padrao);
  return 0;
}