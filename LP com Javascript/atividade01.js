console.log("Lógica de Programação")
console.log("com Javascript")

// variável
/*
3 formas de declarar uma variável
    1ª sem declarar
    2ª utilizando var
*/
// 1ª sem declarar
nome = "Wagner"

// 2ª utilizando var
var idade = 28

// 3ª utilizando let
let email = "wagner.pimentel@sp.senac.br"

console.log(nome, idade, email)


// constante
const escola = "Senac Americana"

console.log(escola)

// Tipos de dados
/*
String - texto
Number - int, float
Boolean - True / False
function, undefined, null, object, symbol
*/

console.log("NOME => " + typeof nome)
console.log("IDADE => " + typeof idade)
console.log("EMAIL => " + typeof email)
console.log("ESCOLA => " + typeof escola)

nome = "Wagner"
let sobrenome = "Pimentel"

console.log("Nome completo: " + nome + " " + sobrenome)