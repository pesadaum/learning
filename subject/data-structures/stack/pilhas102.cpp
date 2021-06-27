#include <iostream>
using namespace std;

struct No
{
  char info;
  No *lig = NULL;
};

typedef No *Pilha;

void empilha(Pilha &topo, char dado)
{
  Pilha aux = new No;
  aux->info = dado;
  aux->lig = topo;
  topo = aux;
}

bool desempilha(Pilha &topo)
{
  Pilha aux;

  if (topo == NULL)
    return false;

  aux = topo;
  topo = aux->lig;
  delete aux;
  return true;
}

// void esvazia(Pilha &topo)
// {
//   Pilha aux;
//   while (topo != NULL)
//   {
//     aux = topo;
//     aux->lig = NULL;
//     topo = topo->lig;
//     delete aux;
//   }
//   return;
// }

void exibe(Pilha topo)
{
  Pilha aux;
  while (topo->lig != NULL)
  {
    cout << topo->info << "->";
    aux = topo;
    topo = aux->lig;
  }
  cout << "NULL";
  return;
}

int main()
{
  Pilha minha_pilha = new No;

  empilha(minha_pilha, 'a');
  empilha(minha_pilha, 'b');
  empilha(minha_pilha, 'c');
  empilha(minha_pilha, 'd');

  exibe(minha_pilha);

  cout << "\n\ndesempilhando ... \n\n";
  desempilha(minha_pilha);
  desempilha(minha_pilha);
  desempilha(minha_pilha);

  // esvazia(minha_pilha);

  exibe(minha_pilha);

  empilha(minha_pilha, 'x');
  empilha(minha_pilha, 'y');

  cout << endl;
  exibe(minha_pilha);

  exibe(minha_pilha);

  cout << endl;
  return 0;
}
