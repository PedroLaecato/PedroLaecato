// Determine um array de números e encontre o maior número inteiro.

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