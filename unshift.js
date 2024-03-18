//unshift

//ex. 01

//1 ao 3.
let numeros = [1, 2, 3];

//utilizei o unshift para adicionar o número 0 na posição zero do array.
let adicionarNumero = numeros.unshift(0);

//exibi.
console.log(numeros);

//ex. 02

//nomes.
let nomes = ['andressa', 'bia'];

//utilizei o unshift para adicionar os elemento 'agnes', 'amanda', 'ana'. Eles vão ser adicionados na ordem que os escrevi ex. escrevi primero o nome agnes, então, agnes passa a ser a primeira posição do array (que no caso é 0).
let adicionarNome = nomes.unshift('agnes', 'amanda', 'ana');

//exibi.
console.log(nomes);
//usei o lenght para mostrar que realmente adicionou e já atualizou a quantidade de elementos que eu coloquei dentro dos parenteses do unshift.
console.log(nomes.length);

//O método unshift() adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado.
//A propriedade length especifíca o número de elementos em um array.