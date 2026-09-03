console.log("Hello World!.js")

let nome = "Eduardo"
var idade = 21;
let ativo = false

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof ativo)

// ----- OPERADORES MATEMÁTICOS -----

let a = 10
let b = 3

console.log(a+b)
console.log(a%b)
console.log(a**2)

// ----- OPERADORES RELACIONAIS -----

let x = 10
let y = "10"

console.log(x == y)
console.log(x === y)

// ----- OPERADORES LÓGICOS -----

let idade2 = 20
let possuiCnh = true

if(idade2 >= 18){
    console.log("Pode dirigir!")   
} else if (!possuiCnh){
    console.log("Não pode dirigir")
}

let dia = 1
switch(2){
    case 1:
        console.log("Sgunda")
        break
        case 2:
            console.log("Terça")
            break
            default:
                console.log("Outro dia")
}

// ----- ESTRUTURA DE REPETIÇÃO -----
for(let i=0; i < 5; i++){
    console.log(i)
}

let i = 0
while(i < 5){
    console.log(i)
    i++
}
console.log("Start do while")
do{
    console.log(i)
    }while (i < 5)
        console.log("end do while")

