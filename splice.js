//splice

//ex. 01

//lista de nomes.
let nomes = ["kevin", "julia", "camila", "rebeca"];

//let substituindo, eu vou substituir alguém da lista de nomes e colocar um outro nome no lugar.
//                 nome da let (posição onde eu quero adicionar, quantidade de elemento que quero remover depois da posição onde vou adicionar, elemento que quero adicionar).
let substituindo = nomes.splice(2, 1, "maze");

console.log(nomes);

//ex. 02

//lista de nomes
let outrosNomes = ['maggie', 'amber', 'lucca', 'emily', 'gabriela'];

//let p adicionar alguém na lista (algum elemento no array).
//                nome da let       (posição 5 do array, não remover ninguém, adicionar "gustavo" na lista).
let adicionando = outrosNomes.splice(5, 0, 'gustavo');

console.log(outrosNomes);

//O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.