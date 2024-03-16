//isArray

//ex. 01

//let  numero (number)
let number = 23;

//let color (array)
let color = ['black', 'green', 'gray'];

//let str (string)
let str = 'Cada um com a sua sorte';

//ele checa se a let é ou não uma array, retorna true ou false.
console.log(Array.isArray(color));

//ex. 02

//nesse ex fiz um pouco mais complexo.

//let jogos (array)
let jogos = ['valorant', 'gta', 'minecraft', 'rocket league'];

//let marcas (string)
let marcas = 'nike, adidas, lacoste';

//let numero (number)
let numero = 20;

//coloquei essa let para checar se tal let era ou não uma array
let check = Array.isArray(marcas);

//esse if vai exibir afirmando se é uma array caso o let check seja true, se for false ele fica com o else, que exibe que não é uma array
if (check){
    console.log('É um array!');
}else{
    console.log('Não é um array!');
}

//O método Array.isArray() retorna true se um objeto é uma array, e false se não é.