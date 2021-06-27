#include <iostream>

#define TAM 3

using namespace std;

struct No
{
  char chave;
  int valor;
};

struct Pilha
{
  No dados[TAM];
  int topo;
};

void inicializa(Pilha &p)
{
  p.topo = -1;
}

bool empilha(Pilha &p, No novo)
{
  if (p.topo == TAM - 1)
    return false;
  p.dados[++p.topo] = novo;
  return true;
}

No desempilha(Pilha &p)
{
  No desempilhado;
  if (p.topo == -1)
    cout << "pilha vazia";
  else
  {
    desempilhado = p.dados[p.topo];
    p.dados[p.topo].chave = ' ';
    p.dados[p.topo].valor = 0;
    p.topo--;
    return desempilhado;
  }
}

void imprime(Pilha p)
{
  int aux = TAM - 1;
  while (aux >= 0)
  {
    cout << " | Dado[" << aux << "]:" << p.dados[aux].valor;
    cout << " - ";
    cout << "Chave[" << aux << "]:" << p.dados[aux].chave << " |" << endl;
    aux--;
  }
}

int main()
{

  Pilha minhaPilha;
  No meuNo, meuNo2, meuNo3;
  meuNo.chave = 'a';
  meuNo.valor = 7;
  meuNo2.chave = 'b';
  meuNo2.valor = 6;
  meuNo3.chave = 'c';
  meuNo3.valor = 5;

  inicializa(minhaPilha);

  empilha(minhaPilha, meuNo);
  empilha(minhaPilha, meuNo2);
  empilha(minhaPilha, meuNo3);

  imprime(minhaPilha);

  cout << "\nDesempilhando...\n\n";

  desempilha(minhaPilha);
  desempilha(minhaPilha);
  imprime(minhaPilha);
}