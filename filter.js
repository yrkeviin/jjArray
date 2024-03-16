//filter

//ex. 01

//sequência do 1 ao 10.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//o que está dentro do parenteses é uma função da qual quero que o filter execute.
//a let numeros está sendo filtrada somente com os números ímpares, numeros.filter((aqui está a let números) aqui está a função que o filter vai fazer) <======tudo isso para entender melhor ao ler o código.
//declarei uma let para filtrar a let números, somente com os ímpares.
// (=>) indica que é uma função.
//resto da div de numeros por 2, se for diferente de 0, ele faz parte da let impares, senão, ele não passa no filtro e não será exibido.
let impares = numeros.filter((numeros) => numeros % 2 != 0);

//utilizei o ${} para function, para ela funcionar é necessário mudar as aspas para como se fosse um acento de crase, ex. (à).
console.log(`Os números ímpares da sequência são: ${impares}`);

//ex. 02

//idades de um grupo de pessoas para entrar em uma festa.
let idades = [23, 11, 20, 16, 18, 19, 17,15];

//determinei o que eu queria que o filter fizesse, nesse caso, determinei que, da let idades, só as que fossem maior ou igual a 18, poderiam fazer parte da let maioresIdade.
//mesma sintaxe que a outra, puxei a let idades dentro dos parenteses e determinei a função para o filter, ele filtrou e me exibiu apenas as idades maiores que 18.
let maioresIdade = idades.filter((idades) => idades >= 18)

console.log(`De todas essas idades inseridas, as únicas permetidas são as seguintes: ${maioresIdade}`);

//O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida. Nesse caso, utilizei a função de filtrar os números ímpares e depois determinar quais idades eram liberadas na festa.