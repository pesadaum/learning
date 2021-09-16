{
  float[3] pontos;
  float menor;
  float menor_fahrenheit;
  int aux;
  int npontos;

  aux = 0;
  npontos = 3;

  while (aux < npontos)
  {
    read(pontos[aux]);
    aux = aux + 1;
  }
  menor = pontos[0];
  aux = 0;

  while (aux < npontos)
  {
    if (pontos[aux] < menor)
    {
      menor = pontos[aux];
    }
    aux = aux + 1;
  }

  menor_fahrenheit = (menor * 9 / 5) + 32;

  print(menor);
  print(menor_fahrenheit);
}