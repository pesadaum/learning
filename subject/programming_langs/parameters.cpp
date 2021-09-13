#include <iostream>

template <class Type>
Type soma(Type a, Type b) { return (a + b); }

template <class Type>
Type calcula(Type a, Type b, Type (*f)(Type, Type)) { return (*f)(a, b); }

int main()
{
  std::cout << calcula(1, 2, soma) << std::endl;
  std::cout << calcula(3.3, 4.56, soma) << std::endl;
}