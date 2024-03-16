//concat

//ex. 01

//let cores se refere a uma lista de cores.
let cores = ['azul', 'bordo', 'ciano'];

//let tons vai se referir a ordem alfabética das cores.
let tons = [1, 2 ,3 ];

//essa let é para mesclarmos os dois arrays que estão nas lets .
let coresAlfabética = cores.concat(tons);

//exibimos tudo em um só array.
console.log(coresAlfabética);

//ex. 02

//let par1 se refere a um par de dança.
let par1 = ['kevin', 'anna'];

//let par2 se refere a um outro par de dança.
let par2 = ['lucas', 'carine'];

//essa let é para juntarmos todas as duplas em um array só.
let paresDança = par1.concat(par2);

//exibimos os pares.
console.log(paresDança);

//É utilizado para mesclar dois ou mais arrays. Esse método não altera os arrays existentes, ele só mescla todos os arrays em um só.