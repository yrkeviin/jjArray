//map

//ex. 01

//let numeros é a let que o map vai percorrer e multiplicar cada número (nesse caso).
let numeros = [1, 7, 23, 77];

//let multNumeros é onde o map é utilizado, ele vai percorrer a let numeros e multiplicar por 3, foi a função que eu pedi para ele executar.
let multNumeros = numeros.map((numeros) => numeros * 3);

//depois dele percorrer o array e multiplicar todos os números, ele exibe em um só array os números multiplicados, e em outros casos, exibiria de acordo com a função que foi pedida que ele fizesse.
console.log(multNumeros);

//ex. 02

//números que vão ser divididos por 2
let outrosNumeros = [20, 200, 2000];

//nessa let atribuí a função de divisão, todos os números da let outrosNumeros por 2.
//mesmo esquema do filter, a função é indicada por "=>", e ele executará a função conforme eu escrevi o código.
let divNumeros = outrosNumeros.map((outrosNumeros) => outrosNumeros / 2);

//no console nada de mais, só adicionei o .join para ficar mais bonito na hora de exibir.
//o $ indica uma função, no caso ele vai exibir a let divNumeros, e adicionei o .join logo após.
console.log(`Os números inseridos foram divididos por 2, confira: ${divNumeros.join(' & ')}.`);

//O método map chama a função callback, o map percorre por todos os elementos do array e executa a função pedida, e retorna tudo em ordem em um só array.