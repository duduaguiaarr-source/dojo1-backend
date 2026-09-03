//Desafio - Mini Processador de Dados
//Eduardo de Oliveira Aguiar

//array com os dados dos usuários, cada um é um objeto
const usuarios = [
  { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
  { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
  { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
  { nome: "Diana", idade: 25, ativo: true, compras: [] },
  { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
];

//calculo o total de compras de cada um pra não ter
//que ficar repetindo essa conta em cada parte
const usuariosComTotal = usuarios.map((usuario) => {
  //soma tudo que tem dentro do array de compras
  const total = usuario.compras.reduce((soma, valor) => soma + valor, 0);

  //devolve um usuário novo, igual o de antes só que com o total junto
  return { nome: usuario.nome, idade: usuario.idade, ativo: usuario.ativo, total: total };
});

//PARTE 1: TOTAL DE COMPRAS PARA CADA UM
console.log("===== PARTE 1 =====");
for (const usuario of usuariosComTotal) {
  // for...of passa usuario por usuario do array
  console.log(`${usuario.nome}: total = ${usuario.total}`);
}


//PARTE 2: SÓ OS QUE ESTÃO ATIVOS

console.log("\n===== PARTE 2 =====");
//filter separa só quem passa no teste (ativo === true)
const usuariosAtivos = usuariosComTotal.filter((usuario) => usuario.ativo === true);
for (const usuario of usuariosAtivos) {
  console.log(usuario.nome);
}


//PARTE 3: SÓ MAIORES DE IDADE

console.log("\n===== PARTE 3 =====");
//mesmo filter de cima, só troca a condição
const usuariosMaioresDeIdade = usuariosComTotal.filter((usuario) => usuario.idade >= 18);
for (const usuario of usuariosMaioresDeIdade) {
  console.log(usuario.nome);
}


//PARTE 4: QUEM COMPROU MAIS

console.log("\n===== PARTE 4 =====");
// reduce aqui vai comparando um por um pra achar o maior total
// como não passei valor inicial, começa comparando a partir do segundo usuário
const maiorComprador = usuariosComTotal.reduce((maior, atual) => {
  return atual.total > maior.total ? atual : maior; //se o atual for maior, ele vira o novo maior
});
console.log(`Usuário com maior volume: ${maiorComprador.nome}`);
console.log(`Total: ${maiorComprador.total}`);


//PARTE 5: COERÇÃO DE TIPOS
//coerção de tipos é quando o JS converte um valor de um tipo pra outro
//sozinho, sem eu pedir, pra conseguir fazer a operação

console.log("\n===== PARTE 5 =====");

console.log("5" + 2);
//resultado: "52"
//o + quando tem uma string do lado vira concatenação (junta como texto)
//o número 2 é convertido pra "2" e colado no final de "5"

console.log("5" - 2);
//resultado: 3
//o - só existe pra fazer conta com número, não tem "subtração de texto"
//então o JS converte "5" string pra 5 número antes de subtrair

console.log(true + 1);
//resultado: 2
//em conta matemática, true vira 1 e false vira 0
//então true + 1 vira 1 + 1

console.log(false == 0);
//resultado: true
//== é a igualdade "fraca": ela converte os tipos antes de comparar
//false é convertido pra 0, e 0 == 0 é verdadeiro

console.log(false === 0);
//resultado: false
//=== é a igualdade "estrita": não converte nada, compara tipo e valor
//false é boolean e 0 é number, tipos diferentes, então é falso
//mesmo os valores "parecendo" iguais


//PARTE 6: THIS EM FUNCTION NORMAL VS ARROW FUNCTION

console.log("\n===== PARTE 6 =====");

const pessoa1 = {
  nome: "Maria",
  falar: function () {
    console.log(this.nome);
    //funciona e imprime "Maria"
    //numa function normal, o this é definido por quem chama ela
    //como eu chamei com pessoa1.falar(), o this vira pessoa1
  }
};
pessoa1.falar();

const pessoa2 = {
  nome: "Maria",
  falar: () => {
    console.log(this.nome);
    //não funciona, imprime undefined
    //arrow function não tem this próprio
    //ela usa o this do lugar onde foi escrita (o arquivo/módulo)
    //e não do objeto que chamou ela, por isso não acha o "nome"
  }
};
pessoa2.falar();

//RESPOSTAS:
//1)o código 1 (function normal) funciona corretamente
//2)o código 2 não funciona porque arrow function não cria seu próprio this,
//ela pega o this de fora (do escopo onde foi definida), que não é o objeto pessoa2
//3)em arrow function, o this é herdado do escopo onde a função foi ESCRITA,
//e não de quem CHAMA ela (diferente da function normal)


//PARTE 7: RELATÓRIO FINAL 

console.log("\n===== PARTE 7 =====");

const gerarRelatorio = () => {
  const totalUsuarios = usuarios.length; //quantidade de usuários no array

  const ativos = usuariosComTotal.filter((usuario) => usuario.ativo === true);
  const inativos = usuariosComTotal.filter((usuario) => usuario.ativo === false);

  //soma todas as idades e divide pela quantidade pra tirar a média
  const somaIdades = usuarios.reduce((soma, usuario) => soma + usuario.idade, 0);
  const mediaIdade = somaIdades / totalUsuarios;

  //acha o maior comprador de novo (mesma lógica da parte 4)
  const maiorComprador = usuariosComTotal.reduce((maior, atual) => {
    return atual.total > maior.total ? atual : maior;
  });

  //devolve tudo junto num objeto só, como pedido no desafio
  return {
    totalUsuarios: totalUsuarios,
    usuariosAtivos: ativos.length,
    usuariosInativos: inativos.length,
    mediaIdade: mediaIdade,
    maiorComprador: maiorComprador.nome
  };
};

const relatorio = gerarRelatorio();
console.log(relatorio);


// ==== DESAFIO EXTRA ====

console.log("\n===== DESAFIO EXTRA =====");

// mesma ideia do campeao da parte 4, mas comparando idade
const usuarioMaisJovem = usuarios.reduce((mais, atual) => (atual.idade < mais.idade ? atual : mais));
const usuarioMaisVelho = usuarios.reduce((mais, atual) => (atual.idade > mais.idade ? atual : mais));

//soma todos os totais e divide pela quantidade de usuários
const mediaComprasPorUsuario =
  usuariosComTotal.reduce((soma, u) => soma + u.total, 0) / usuariosComTotal.length;

console.log(`Mais jovem: ${usuarioMaisJovem.nome} (${usuarioMaisJovem.idade} anos)`);
console.log(`Mais velho: ${usuarioMaisVelho.nome} (${usuarioMaisVelho.idade} anos)`);
console.log(`Média de compras por usuário: ${mediaComprasPorUsuario}`);