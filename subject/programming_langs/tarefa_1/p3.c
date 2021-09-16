{
  float[10] pontos;
  float menor;
  float maior;
  float media;
  float menor_fahrenheit;
  int aux;
  int npontos;

  aux = 0;
  npontos = 10;

  while (aux < npontos)
  {
    read(pontos[aux]);
    aux = aux + 1;
  }

  menor = pontos[0];
  maior = menor;
  media = 0;

  aux = 0;

  while (aux < npontos)
  {
    if (pontos[aux] < menor)
    {
      menor = pontos[aux];
    }
    if (pontos[aux] > maior)
    {
      menor = pontos[aux];
    }
    media = media + (pontos[aux] / npontos);
    aux = aux + 1;
  }

  menor_fahrenheit = (menor * 9 / 5) + 32;

  print(menor);
  print(menor_fahrenheit);
  print(maior);
  print(media);
}