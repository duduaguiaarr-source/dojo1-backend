// ==========================================================
// Desafio: Mini Processador de Dados — VERSÃO COMENTADA LINHA A LINHA
// Disciplina: Programação Web Back-End (UTFPR)
// Rode com: node desafio-mini-processador-comentado.js
// ==========================================================

// Declaramos "usuarios" com const porque essa variável nunca vai ser
// reatribuída (vamos criar NOVOS arrays a partir dela, não mudar ela).
const usuarios = [
  // Cada linha é um objeto (par chave: valor) representando um usuário.
  // "compras" é um array de números dentro do objeto.
  { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
  { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
  { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
  { nome: "Diana", idade: 25, ativo: true, compras: [] }, // array vazio = sem compras
  { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
]; // fim do array usuarios

// ------------------------------------------------------------
// PRÉ-PROCESSAMENTO
// Calculamos o total de compras de cada usuário UMA VEZ SÓ,
// e guardamos junto com os dados originais, pra reaproveitar
// nas Partes 1, 2, 3, 4 e 7 sem recalcular toda hora.
// ------------------------------------------------------------

// .map() cria um NOVO array (usuariosComTotal), do mesmo tamanho de "usuarios",
// transformando cada "usuario" original em um novo objeto.
const usuariosComTotal = usuarios.map((usuario) => {
  // Para o "usuario" da vez, somamos o array "compras" dele com .reduce().
  // "soma" é o acumulador, começa em 0 (o 0 é o 2º argumento do reduce).
  // "valor" é cada número dentro de "compras", um de cada vez.
  const total = usuario.compras.reduce((soma, valor) => soma + valor, 0);

  // A arrow function do .map() precisa DEVOLVER (return) o novo objeto
  // que vai substituir o usuário original nesse novo array.
  return {
    nome: usuario.nome,   // copia o nome original
    idade: usuario.idade, // copia a idade original
    ativo: usuario.ativo, // copia o status ativo original
    total: total          // adiciona o campo novo: total de compras
  };
}); // fim do .map() — usuariosComTotal agora tem nome, idade, ativo e total

// ============ PARTE 1: Total de Compras por Usuário ============

console.log("===== PARTE 1: Total de Compras por Usuário ====="); // título no console

// for...of percorre o array usuariosComTotal item por item.
// Em cada volta do loop, "usuario" recebe UM objeto do array.
for (const usuario of usuariosComTotal) {
  // Template string (crase `` `` ``) permite inserir variáveis com ${...}
  // dentro do texto sem precisar concatenar com +.
  console.log(`${usuario.nome}: total = ${usuario.total}`);
} // fim do for...of da Parte 1

// ============ PARTE 2: Usuários Ativos ============

console.log("\n===== PARTE 2: Usuários Ativos ====="); // \n pula uma linha antes do título

// .filter() cria um NOVO array só com os itens em que a arrow function
// retorna true. Aqui: só os usuários com ativo === true.
const usuariosAtivos = usuariosComTotal.filter((usuario) => usuario.ativo === true);

// Percorremos o array filtrado e imprimimos só o nome de cada um.
for (const usuario of usuariosAtivos) {
  console.log(usuario.nome);
} // fim do for...of da Parte 2

// ============ PARTE 3: Usuários Maiores de Idade ============

console.log("\n===== PARTE 3: Usuários Maiores de Idade =====");

// Mesmo padrão do .filter() da Parte 2, mudando só a condição testada:
// aqui queremos idade maior ou igual a 18.
const usuariosMaioresDeIdade = usuariosComTotal.filter((usuario) => usuario.idade >= 18);

for (const usuario of usuariosMaioresDeIdade) {
  console.log(usuario.nome);
} // fim do for...of da Parte 3

// ============ PARTE 4: Usuário com Maior Volume de Compras ============

console.log("\n===== PARTE 4: Usuário com Maior Volume de Compras =====");

// .reduce() aqui NÃO recebe valor inicial (não tem segundo argumento),
// então o primeiro elemento do array (Ana) vira o acumulador inicial,
// e a comparação começa a partir do segundo elemento (Bruno).
const maiorComprador = usuariosComTotal.reduce((maior, atual) => {
  // "maior" é o "campeão" até agora; "atual" é o usuário sendo avaliado nesta rodada.
  // Operador ternário: condição ? valorSeVerdadeiro : valorSeFalso
  return atual.total > maior.total ? atual : maior;
  // Se o total do atual é maior que o do campeão, o atual vira o novo campeão.
  // Senão, o campeão continua o mesmo.
}); // fim do .reduce() — maiorComprador é o objeto inteiro do "vencedor"

// Imprime o nome do usuário com maior total de compras.
console.log(`Usuário com maior volume: ${maiorComprador.nome}`);
// Imprime o total de compras desse usuário.
console.log(`Total: ${maiorComprador.total}`);

// ============ PARTE 5: Coerção de Tipos ============

console.log("\n===== PARTE 5: Coerção de Tipos =====");

console.log("5" + 2);
// "5" é string, 2 é number. O operador + com uma string do lado
// vira CONCATENAÇÃO: o 2 é convertido pra texto "2" e colado no "5".
// Resultado: "52" (string)

console.log("5" - 2);
// O operador - só existe para números (não tem "subtração de texto").
// O JS converte "5" (string) para 5 (number) automaticamente.
// Resultado: 3 (number)

console.log(true + 1);
// Em operações matemáticas, true é convertido para 1 e false para 0.
// Resultado: 2 (number)

console.log(false == 0);
// == é igualdade FRACA: converte os tipos antes de comparar.
// false é convertido para 0, e 0 == 0 é verdadeiro.
// Resultado: true

console.log(false === 0);
// === é igualdade ESTRITA: NÃO converte tipos, compara tipo e valor.
// boolean (false) é um tipo diferente de number (0), então é falso
// mesmo os valores "parecendo" equivalentes.
// Resultado: false

// ============ PARTE 6: Arrow Function vs Function (this) ============

console.log("\n===== PARTE 6: Arrow Function vs Function (this) =====");

// pessoa1 usa uma FUNCTION TRADICIONAL como método "falar".
const pessoa1 = {
  nome: "Maria", // propriedade nome do objeto
  falar: function () {
    // Em uma function tradicional, "this" é definido por QUEM CHAMA a função.
    console.log(this.nome); // this === pessoa1 (porque chamamos pessoa1.falar())
  }
}; // fim do objeto pessoa1
pessoa1.falar(); // chamamos com pessoa1.falar() -> this vira pessoa1 -> imprime "Maria"

// pessoa2 usa uma ARROW FUNCTION como método "falar".
const pessoa2 = {
  nome: "Maria", // propriedade nome do objeto
  falar: () => {
    // Arrow function NÃO tem "this" próprio: ela usa o "this" do escopo
    // onde foi ESCRITA (o módulo), não o objeto que a chamou.
    console.log(this.nome); // this NÃO é pessoa2 aqui
  }
}; // fim do objeto pessoa2
pessoa2.falar(); // mesmo chamando pessoa2.falar(), this não é pessoa2 -> imprime undefined

// ============ PARTE 7: Relatório Final ============

console.log("\n===== PARTE 7: Relatório Final =====");

// Declaramos uma arrow function que não recebe parâmetros ( () )
// e vai devolver um objeto com o resumo de tudo.
const gerarRelatorio = () => {
  // .length é uma propriedade de array que dá a quantidade de itens.
  const totalUsuarios = usuarios.length;

  // Filtramos de novo os ativos (mesma lógica da Parte 2).
  const ativos = usuariosComTotal.filter((usuario) => usuario.ativo === true);
  // Dessa vez também filtramos os INATIVOS (ativo === false).
  const inativos = usuariosComTotal.filter((usuario) => usuario.ativo === false);

  // Somamos todas as idades com reduce (mesmo padrão do total de compras).
  const somaIdades = usuarios.reduce((soma, usuario) => soma + usuario.idade, 0);
  // Média = soma dividida pela quantidade de usuários.
  const mediaIdade = somaIdades / totalUsuarios;

  // Achamos o maior comprador de novo (mesma lógica da Parte 4).
  const maiorComprador = usuariosComTotal.reduce((maior, atual) => {
    return atual.total > maior.total ? atual : maior;
  });

  // Devolvemos um objeto com todos os dados pedidos pelo desafio.
  return {
    totalUsuarios: totalUsuarios,       // quantidade total de usuários
    usuariosAtivos: ativos.length,      // quantidade de usuários ativos
    usuariosInativos: inativos.length,  // quantidade de usuários inativos
    mediaIdade: mediaIdade,             // média de idade calculada acima
    maiorComprador: maiorComprador.nome // só o nome do maior comprador
  };
}; // fim da função gerarRelatorio

// Chamamos a função e guardamos o resultado (o objeto) em "relatorio".
const relatorio = gerarRelatorio();
// Imprimimos o objeto inteiro no console.
console.log(relatorio);

// ============ DESAFIO EXTRA ============

console.log("\n===== DESAFIO EXTRA =====");

// Mesmo padrão de "campeão" da Parte 4, mas comparando idade (menor vence).
const usuarioMaisJovem = usuarios.reduce((mais, atual) => (atual.idade < mais.idade ? atual : mais));
// Mesmo padrão, mas comparando idade (maior vence).
const usuarioMaisVelho = usuarios.reduce((mais, atual) => (atual.idade > mais.idade ? atual : mais));

// Soma todos os totais de compras com reduce, e divide pela
// quantidade de usuários para achar a média de compras por usuário.
const mediaComprasPorUsuario =
  usuariosComTotal.reduce((soma, u) => soma + u.total, 0) / usuariosComTotal.length;

// Imprime o resultado de cada cálculo, usando template strings.
console.log(`Mais jovem: ${usuarioMaisJovem.nome} (${usuarioMaisJovem.idade} anos)`);
console.log(`Mais velho: ${usuarioMaisVelho.nome} (${usuarioMaisVelho.idade} anos)`);
console.log(`Média de compras por usuário: ${mediaComprasPorUsuario}`);