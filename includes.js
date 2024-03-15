//includes

//ex.01

//checar convidados

//listaConvidados se refere aos convidados de uma festa.
let listaConvidados = ['kevin', 'anna', 'lucca', 'sophia'];

//essa mensagem será exibida apenas para o true || false não ficarem sozinhos na hora de serem exibidos.
let mensagem01 = "O convidado está na lista? ="

console.log('-----LISTA DE CONVIDADOS!-----');
//mensagem01 (apenas decorativo), listaConvidados.includes(nome do convidado que quero checar na lista), se o nome dentro do parentes estiver dentro da let listaConvidados, true, senão, false.
console.log(mensagem01 ,listaConvidados.includes("anna"));

//ex.02

//checar itens

//listaCompra se refere à lista de compras.
let listaCompra = ['danone', 'pipoca', 'suco', 'shampoo', 'sabonete', 'escova'];

//essa mensagem será exibida apenas para o true || false não ficarem sozinhos na hora de serem exibidos.
let mensagem02 = "O item está na lista? ="

console.log('-----LISTA DE COMPRAS-----');
//mensagem02 (apenas decorativo), listaCompra.includes(item que eu quero checar na lista), 2 (posição que o elemento está) se a palavra que estiver dentro do parenteses da let listaCompra && na posição correta, true, senão, false.
console.log(mensagem02, listaCompra.includes("suco", 2));

//O método includes() determina se um array contém um determinado elemento, retornando true ou false, lembrando que se você colocar ou ele estiver na posição errada, ele vai retornar false, já se estiver na certa e o elemento aparecer na lista, true.