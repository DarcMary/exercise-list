//**Exercício 2.1**: Considere um algoritmo que percorre um array de números e imprime cada elemento. Determine a complexidade temporal e espacial.
function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
const array = [1, 2, 3];
printArray(array);

//*Exercício 2.2**: Pense em um algoritmo que recebe um número `n` e calcula a soma de todos os números até `n`. Analise sua complexidade.
function calculadoraSoma(n) {
    let acumulador = 0;
    for (let i = 0; i <= n; i++) {
        acumulador += i;
    }
    return acumulador;
}
console.log(calculadoraSoma(6));

//3.1 Escreva um algoritmo que implemente a busca linear em um array de inteiros. O algoritmo deve buscar um determinado valor `x` e retornar o índice onde `x` foi encontrado ou -1 se `x` não estiver presente no array. Analise a complexidade temporal e espacial.

function buscaX(array, x) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == x) {
            return i;
        }
    }
    return -1;
}
console.log(buscaX([1, 2, 3, 4], 5));

//3.4 Escreva um algoritmo que soma todos os elementos únicos de um array de inteiros (elementos que aparecem exatamente uma vez no array). Analise a complexidade temporal e espacial.
//[5, 5, 3, 2, 1, 8, 9, 9, 0]
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4

function somaTodosElementos(array) {
    let numerosUnicos = new Set(array);
    let numerosUnicosArray = Array.from(numerosUnicos);
    let acumulador = 0
    let soma = numerosUnicosArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        acumulador,
    )
    return soma
}
somaTodosElementos([5, 5, 3, 2, 1, 8, 9, 9, 0]);


//3.3: Verificação de Palíndromo. Desenvolva um algoritmo que verifica se uma string é um palíndromo (a string é igual se lida da esquerda para a direita ou da direita para a esquerda). Considere a complexidade temporal e espacial da sua solução.
function reverseString(string) {
    return string.split('').reverse().join('');
}

function checkPalindrome(string) {
    let stringReversed = reverseString(string);
    if (stringReversed == string) {
        return true
    }
    else {
        return false
    }
}
console.log(checkPalindrome("arara"));

function reverseString(string) {
    let reversed = ""
    for (let i = string.length - 1; i >= 0; i--)
        reversed += string[i];
    return reversed
}

function isPalindrome(string) {
    return reverseString(string) == string
}
console.log(isPalindrome("dad"))

//Exercício 4.1: Contagem de Dígitos
//Crie um algoritmo que conte quantos dígitos um número inteiro positivo `n` possui. Pense sobre a complexidade temporal e espacial da sua abordagem.
function countDigits(n) {
    return n.toString().length
}
console.log(countDigits(5055))

//Exercício 4.2: Inversão de String
//Implemente um algoritmo que inverte uma string.'. Discuta a complexidade temporal e espacial do algoritmo.
function stringReverse(string) {
    let stringReversed = ""
    for (let i = string.length - 1; i >= 0; i--) {
        stringReversed += string[i]
    }
    return stringReversed
}
console.log(stringReverse("Darc"))

//Exercício 4.3: Checagem de Anagramas
//Escreva um algoritmo para verificar se duas strings são anagramas uma da outra (ou seja, se elas têm os mesmos caracteres, mas em ordens diferentes). Considere a complexidade temporal e espacial do seu algoritmo
function checkString(string1, string2) {
    let string1Ordered = string1.split("").sort().join()
    let string2Ordered = string2.split("").sort().join()
    return string1Ordered == string2Ordered
}

console.log(checkString("ola", "Darc"));
