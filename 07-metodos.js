const array = [
  {name: 'iphone', price: 5000, quantity: 2},
  {name: 'MacBook pro',price: 20000,quantity: 1},
  {name: 'Magic Mouse',price: 1000, quantity: 5},
];

const find = array.find((product) => product.price > 1000);

const findIndex = array.findIndex((product) => product.price > 1000);

const some =  array.some((product) => product.price < 1000);
//console.log({ some }); // algum elemento compre essa regra


const every =  array.every((product) => product.price < 1000);
//console.log({ every }); // se todos  elemento compre essa regra


// map invoca a função passada por argumento para cada elemento do array
// e devolve um novo array como resultado
const map = array.map((product) => {
  return {
    ...product,
    subtotal: product.quantity * product.price
  };
});
//console.log( { map });

// .filter serve para filtrar o array
const filter = array.filter((product) => product.quantity > 1);
//console.log({filter});

//.reduce // retorna unico valor
const reduce = array.reduce((accumulator, product) => {
  return accumulator + (product.price + product.quantity);
}, 0);
//console.log({ reduce });

//.split ele transforma sua string em um array de string
var valores = `Estudantes em primeiro lugar, Confiança, Transparência,
Comprometimento, Colaboração, Nosso negócio é gente`;

var resultado = valores.split(","); // separador

//console.log(resultado)

//find quando for preciso procurar o verificar um valor dentro
//de um obj  sendo qe esse retorno vai ser do primeiro elemento

const pizzas = [
  'mussarela',
  'calabresa',
  'portuguesa',
  'margarida'
]

const foundPizza = pizzas.find( p => p.startsWith('m'))

//console.log(foundPizza)

//toString retorna uma string representando o obj
var a = ['Lucas','Pedro','Lutriz']
a.toString();
document.write(a);
//console.log(a)

var res = a.find (p => p.startsWith('L'))
//console.log(res)

//join ele vai retorna uma nova string  com todos os itens do 
//array separado por virgula
const elements = ['Fire','Air','water'];
//console.log(elements.join());
//console.log(elements.join('*'))
//console.log(elements.join('-'))

//concat e utilizado para mesclar dois ou mais arrays.esse metodo não altera os 
//arrays existentes, retorna um novo array
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
//console.log(array3);

//pop remove o ultimo elemento do array
var meuPeixe = ['acara-bandeira', 'palhaco', 'mandarim', 'esturjao'];
//console.log(meuPeixe);
var meuPeixePop = meuPeixe.pop();

//shift remove o primeiro elemento do array 
const array4 = [1,2,3];
const firstElement = array4.shift();
//console.log(array4);
//console.log(firstElement);

//splice altera o conteudo de uma lista,add novos 
// elementos equanto remove elementos antigos
const mes = ['jan', 'march', 'abril', 'june'];
mes.splice(1, 0, 'feb');
//console.log(mes)

//slice retorna uma copia de parte de um array a partir 
//de um subarray criado entre as posições
const animal = ['ant', 'bison', 'camel', 'duck', 'elephant'];
//console.log(animal.slice(2));

//indexOf retorna o primeiro indice em que os elementos 
//pode ser encontrado no array
const beasts = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(beasts.indexOf('camel'))