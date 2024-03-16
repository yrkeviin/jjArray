//includes

//ex. 01

//checar convidados.

//listaConvidados se refere aos convidados de uma festa.
let listaConvidados = ['kevin', 'anna', 'lucca', 'sophia'];

//criei uma variável usando o includes para facilitar a exibição no if, se alguém quiser saber se o convidado está ou não na lista e também na posição, basta a pessoa trocar o convidado que esta entre parenteses para algum outro, depois disso vai exibir se o convidado está ou não na lista e na posição inserida.
let pessoa = listaConvidados.includes('anna', 1);

console.log("-----LISTA DE CONVIDADOS!-----");

//o if diz que se a let pessoa for true, vai exibir a mensagem afirmando a pessoa e a posição dela na lista, já o else, ele nega a posição ou o convidado (false).
if (pessoa){
    console.log('Sim! Esse convidado está na lista e na posição inserida!');
}else{
    console.log('Não! Esse convidado não está na lista ou não está na posição inserida!');
}

//ex.02

//checar itens.

//listaCompra se refere à lista de compras.
let listaCompra = ["danone", "pipoca", "suco", "shampoo", "sabonete", "escova"];

//criei uma variável usando o includes para facilitar a exibição no if, se alguém quiser saber se o item está ou não na lista, basta a pessoa trocar o item que esta entre parenteses para algum outro, depois disso vai exibir se o item está ou não na lista.
let item = listaCompra.includes('carro');

console.log("-----LISTA DE COMPRAS-----");

//esse if vai exibir se o let item está presente na lista de compras, se ele estiver, vai exibir a mensagem dizendo que o item exista na lista, senão, ele vai exibir a mensagem dizendo que não tem, mesma coisa que o true e false, mas com palavras diferentes!
if (item){
    console.log('Sim! Esse item está na sua lista de compras!');
}else{
    console.log('Não! Esse item não está na sua lista!');
}

//O método includes() determina se um array contém um determinado elemento, retornando true ou false, lembrando que se você colocar ou ele estiver na posição errada (caso você determine posição), ele vai retornar false, já se estiver na posição certa e o elemento estiver presente no array, true.