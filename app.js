/* Variáveis */
var nome = 'Gustavo'
let sobrenome = 'Fazam' // vamos utilizar essa forma
nomedomeio = 'Henrique'

let n1 = 2
let n2 = 9.5
let comida = 'pizza'
let fumante = false

console.log(n1, n2, comida, fumante)

/* Tipos de Dados */
console.log( typeof n1) // typeof mostra o tipo da variável, 2 é number
console.log( typeof n2) // 9.5 é number
console.log( typeof comida) // 'pizza' é string
console.log( typeof fumante) // false é boolean

let veiculos = ['carro', 'moto', 'avião'] // array
console.log( typeof veiculos) // todo array é do tipo object em js

let salvar = function(){

}
console.log( typeof salvar) // salvar é do tipo function

/* Estruturas de Decisão */
/*
if(condição){
    valor se a condição for verdadeira
}else{
valor se a condição for falsa
}
*/
let nota = 10
if(nota >= 5){//if com else
    console.log("Passou")
}else{
    console.log("Reprovou")
}

if(nota >= 5){//if sem else
    console.log("Parabéns, está aprovado")
}

if(nota >= 7){ // if com + condições
    console.log("aprovado")
}else if(nota >=5){
    console.log("Recuperação")
}else{
    console.log("Reprovado")
}

let dia = 7
switch (dia) { //escolha
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda")
        break
    default:
        console.log("Dia inválido")
}

/* Estrutura de repetição */
let contador = 1
while(contador <=10){ // while:enquanto
    console.log(contador)
    contador = contador + 1 //contador ++
}

for(let contador2 = 10; contador2<=20; contador2++){ // for:para
    console.log(contador2)
}

/*
while(condição){
    código do laço de repetição
}

for(inicialização; condição; incremento){
    código do laço de repetição
}
*/