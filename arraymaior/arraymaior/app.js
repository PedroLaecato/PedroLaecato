// Determine um array de n�meros e encontre o maior n�mero inteiro.

var numeros = [10, 20, 30, 40, 50];

var maior = 0;

for (var i = 0; i < numeros.lenght; i++)
{
    var numero = numeros[i];
    if (numero > maior)
    {
        maior = numero;
    }
}

console.log(maior);