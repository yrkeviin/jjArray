//shift

//ex. 01

//lista de convidados.
let convidados = ['ana gabriele', 'ana gabriela', 'clara', 'julia'];

//utilizei o shift para remover o primeiro elemento do array.
let removerConvidado = convidados.shift();

//exibi que o convidado (no caso o elemento) foi retirado da lista, usei o esquema do ${} por ser mais fácil, expliquei quando usei no filter.
console.log(`O convidado(a): ${removerConvidado} foi retirado(a) da sua lista!`);

//exibi os convidados que ainda restaram na lista, após o primeiro elemento ter sido retirado por conta do shift(), utilizei o join para dar uma estética melhor ao ser exibido.
console.log(`Os convidados(as) da sua lista são: ${convidados.join(", ")}.`);

console.log("======================================================================")

//ex. 02

//lista de compras.
let listaCompra = ['bala fini', 'legumes', 'carnes', 'fruta'];

//utilizei o shift para remover o primeiro elemento dessa lista. A mãe não deixou o filho comprar bala fini.
let removerItem = listaCompra.shift();

//exibi qual elemento foi removido.
console.log(`O item: ${removerItem} foi retirado da lista de compras!`);

//exibi quais elementos ainda ficaram no array.
console.log(`Sua lista agora estão com os seguintes itens: ${listaCompra.join(", ")}`);

//O método shift() remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array.