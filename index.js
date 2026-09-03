function soma(a,b){
    let soma = a+b
    return soma
}

console.log(soma(2,5))

//arrow function com apenas um comando e 1 parâmetro
//const quadrado = (x) => x*x
//const quadrado = (x) => {x*x}

const quadrado = x => x*x

console.log(quadrado(2))

//trabalhando com arrays 
let numeros = [1, 2, 3, 4]
//percorrer todos as posições e multiplicar cada uma delas por 2 
let dobrados = numeros.map(n => n * 2)
console.log(numeros)
console.log(dobrados)

for(let n of numeros){
    console.log(n)

}

//objetos js
let usuario = {
    nome: "Ana",
    idade: 25,
    ativo: true 
}
console.log(usuario.nome) //Ana

for(let chave in usuario){
    console.log(chave, ": ",usuario[chave])

}