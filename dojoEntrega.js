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

console.log("\n===== PARTE 5 =====");
console.log("5" + 2);      //+ com string junta como texto -> "52"
console.log("5" - 2);      //- só existe pra número, então "5" vira 5 -> 3
console.log(true + 1);     //true conta como 1 -> 2
console.log(false == 0);   //== converte os tipos, false vira 0 -> true
console.log(false === 0);  //=== não converte nada, tipos diferentes -> false


//PARTE 6: THIS EM FUNCTION NORMAL VS ARROW FUNCTION

console.log("\n===== PARTE 6 =====");

const pessoa1 = {
  nome: "Maria",
  falar: function () {
    console.log(this.nome); //aqui this é quem chamou (pessoa1), então funciona
  }
};
pessoa1.falar();

const pessoa2 = {
  nome: "Maria",
  falar: () => {
    console.log(this.nome); //arrow function não pega o this do objeto, por isso dá undefined
  }
};
pessoa2.falar();


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