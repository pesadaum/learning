#include <iostream>
#include <string>

using namespace std;

void forcaBruta(string T, string P)
{

  int tamanho_texto = T.length();
  int tamanho_padrao = P.length();
  int i, j, k;
  for (i = 1; i <= (tamanho_texto - tamanho_padrao + 1); i++)
  {
    k = i;
    j = 1;
    while (T[k - 1] == P[j - 1] && j <= tamanho_padrao)
    {
      j++;
      k++;
    }
    if (j > tamanho_padrao)
      cout << "Casamento na posição " << i << endl;
  }
}

int main()
{
  string Texto = "maco macaco camaco ccamoa amaco caamomacaco";
  string Padrao = "macaco";

  forcaBruta(Texto, Padrao);
  return 0;
}