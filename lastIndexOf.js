//lastIndexOf

//ex. 01

//nessa let convidados coloquei todos os convidados de uma suposta lista de uma festa, coloquei bastante pois o lastIndexOf fala a posição de algum elemento no array, e mostrar que pode ser feito com bastantes elementos.
let convidados = ['julia', 'carla', 'kevin', 'lucas', 'gabriela', 'jessica', 'otavio', 'gabriel', 'flavia', 'rebeca', 'caio', 'julio'];

//utilizei o includes para deixar esse exemplo mais completo e simular uma utilização do lastIndexOf no mundo real, no exemplo 02 utilizei só o lastIndexOf.

//let presence vai fazer o if exibir se o convidado está na  lista ou não.
let presence = convidados.includes('flavia');

//let position vai exibir a posição (do convidado que está entre parenteses) na lista, se o convidado não existir na lista, ele exibe -1 (é isso que ele faz quando não encontra o elemento dentro do array).
let position = convidados.lastIndexOf('flavia');

//na linha 13 ele fala que vai exibir -1, e isso é verdade, mas como eu alterei um pouco, ele só vai exibir -1 caso a pessoa escreva o nome da pessoa certo no includes e no lastIndexOf coloque o nome de uma pessoa que nao esta diferente
if(presence && position){
    console.log('O convidado(a) está na posição', position, 'da lista!');
}else{
    console.log('O convidado não está na lista!');
}

//ex. 02

//casas da floresta 
let houses = ['casa do leao', 'casa do macaco', 'casa do mico', 'casa do cachorro', 'casa do carneiro'];

//utilizei o lastIndexOf para me mostrar o "endereço" da casa de cada animal.
let address = houses.lastIndexOf('casa do mico');

//exibiu o "endereço da casa"
console.log('O endereço dessa casa é o número', address);