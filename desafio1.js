// ==========================================================
// Desafio: Mini Processador de Dados
// Disciplina: Programação Web Back-End (UTFPR)
// Rode com: node desafio-mini-processador.js
// ==========================================================

const usuarios = [
  { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
  { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
  { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
  { nome: "Diana", idade: 25, ativo: true, compras: [] },
  { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
];

// ------------------------------------------------------------
// Pré-processamento: calcula o total de compras de cada usuário
// e guarda esse valor junto com os dados originais.
// Isso evita recalcular o total repetidamente nas partes seguintes.
// ------------------------------------------------------------
const usuariosComTotal = usuarios.map((usuario) => {
  // reduce percorre o array "compras" somando cada valor.
  // "soma" é o acumulador (começa em 0 - segundo argumento do reduce).
  // "valor" é o item atual do array compras em cada passagem.
  const total = usuario.compras.reduce((soma, valor) => soma + valor, 0);

  return {
    nome: usuario.nome,
    idade: usuario.idade,
    ativo: usuario.ativo,
    total: total
  };
});

console.log("===== PARTE 1: Total de Compras por Usuário =====");
for (const usuario of usuariosComTotal) {
  console.log(`${usuario.nome}: total = ${usuario.total}`);
}

console.log("\n===== PARTE 2: Usuários Ativos =====");
const usuariosAtivos = usuariosComTotal.filter((usuario) => usuario.ativo === true);
for (const usuario of usuariosAtivos) {
  console.log(usuario.nome);
}

console.log("\n===== PARTE 3: Usuários Maiores de Idade =====");
const usuariosMaioresDeIdade = usuariosComTotal.filter((usuario) => usuario.idade >= 18);
for (const usuario of usuariosMaioresDeIdade) {
  console.log(usuario.nome);
}

console.log("\n===== PARTE 4: Usuário com Maior Volume de Compras =====");
const maiorComprador = usuariosComTotal.reduce((maior, atual) => {
  return atual.total > maior.total ? atual : maior;
});
console.log(`Usuário com maior volume: ${maiorComprador.nome}`);
console.log(`Total: ${maiorComprador.total}`);

console.log("\n===== PARTE 5: Coerção de Tipos =====");
console.log("5" + 2);      // "52"  -> concatenação: number vira string
console.log("5" - 2);      // 3     -> subtração: string vira number
console.log(true + 1);     // 2     -> true vira 1
console.log(false == 0);   // true  -> == compara com coerção: false vira 0
console.log(false === 0);  // false -> === compara sem coerção: boolean != number

console.log("\n===== PARTE 6: Arrow Function vs Function (this) =====");
const pessoa1 = {
  nome: "Maria",
  falar: function () {
    console.log(this.nome); // "Maria" - this = quem chamou (pessoa1)
  }
};
pessoa1.falar();

const pessoa2 = {
  nome: "Maria",
  falar: () => {
    console.log(this.nome); // undefined - this vem do escopo do módulo
  }
};
pessoa2.falar();

console.log("\n===== PARTE 7: Relatório Final =====");
const gerarRelatorio = () => {
  const totalUsuarios = usuarios.length;

  const ativos = usuariosComTotal.filter((usuario) => usuario.ativo === true);
  const inativos = usuariosComTotal.filter((usuario) => usuario.ativo === false);

  const somaIdades = usuarios.reduce((soma, usuario) => soma + usuario.idade, 0);
  const mediaIdade = somaIdades / totalUsuarios;

  const maiorComprador = usuariosComTotal.reduce((maior, atual) => {
    return atual.total > maior.total ? atual : maior;
  });

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

console.log("\n===== DESAFIO EXTRA =====");
const usuarioMaisJovem = usuarios.reduce((mais, atual) => (atual.idade < mais.idade ? atual : mais));
const usuarioMaisVelho = usuarios.reduce((mais, atual) => (atual.idade > mais.idade ? atual : mais));
const mediaComprasPorUsuario =
  usuariosComTotal.reduce((soma, u) => soma + u.total, 0) / usuariosComTotal.length;

console.log(`Mais jovem: ${usuarioMaisJovem.nome} (${usuarioMaisJovem.idade} anos)`);
console.log(`Mais velho: ${usuarioMaisVelho.nome} (${usuarioMaisVelho.idade} anos)`);
console.log(`Média de compras por usuário: ${mediaComprasPorUsuario}`);