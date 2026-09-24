# Desafio JavaScript (Node.js) — Mini Processador de Dados

Projeto desenvolvido para a disciplina de Programação Web Back-End (UTFPR), como parte do desafio avaliativo "Construindo um Mini Processador de Dados".

## 📋 Enunciado

Você recebeu um conjunto de dados simulando registros de usuários de um sistema.

```js
const usuarios = [
  { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
  { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
  { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
  { nome: "Diana", idade: 25, ativo: true, compras: [] },
  { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
];
```

Seu objetivo é desenvolver um script Node.js que processe esses dados e gere relatórios.

### Parte 1 — Total de Compras por Usuário
Utilizando arrow functions, calcule o valor total de compras de cada usuário.

**Resultado esperado:**
Ana: total = 175
Bruno: total = 50
Carlos: total = 500
Diana: total = 0
Eduardo: total = 10


### Parte 2 — Usuários Ativos
Utilizando arrow functions, filtre apenas os usuários que estão ativos.

**Resultado esperado:**
Ana
Carlos
Diana


### Parte 3 — Usuários Maiores de Idade
Liste apenas usuários com idade >= 18. Utilize arrow functions.

### Parte 4 — Usuário com Maior Volume de Compras
Determine qual usuário possui o maior total de compras.

**Resultado esperado (aproximado):**
Usuário com maior volume: Carlos
Total: 500


### Parte 5 — Desafio de Coerção de Tipos
Analise o seguinte código e explique por que cada resultado ocorre:
```js
console.log("5" + 2);
console.log("5" - 2);
console.log(true + 1);
console.log(false == 0);
console.log(false === 0);
```

### Parte 6 — Desafio Arrow Function vs Function
Observe os dois códigos e responda: (1) qual funciona corretamente? (2) por que o outro não funciona? (3) qual é o comportamento de `this` em arrow functions?

```js
// Código 1
const pessoa = {
  nome: "Maria",
  falar: function(){ console.log(this.nome); }
};
pessoa.falar();

// Código 2
const pessoa = {
  nome: "Maria",
  falar: () => { console.log(this.nome); }
};
pessoa.falar();
```

### Parte 7 — Desafio Final
Crie uma função `gerarRelatorio` que retorne um objeto:
```js
{
 totalUsuarios: X,
 usuariosAtivos: X,
 usuariosInativos: X,
 mediaIdade: X,
 maiorComprador: "nome"
}
```

**Regras:** usar arrow functions sempre que possível, usar arrays e objetos, usar `console.log`, não utilizar bibliotecas externas.

### Desafio Extra
Implementar função que retorne o usuário mais jovem, o mais velho e o valor médio das compras por usuário.

## ✅ Respostas — Parte 5 (Coerção de Tipos)

| Código | Resultado | Explicação |
|---|---|---|
| `"5" + 2` | `"52"` | O `+` com uma string do lado vira concatenação: o número é convertido para texto e colado. |
| `"5" - 2` | `3` | O `-` só existe para números, então `"5"` é convertido para `5` antes da subtração. |
| `true + 1` | `2` | Em contas matemáticas, `true` é convertido para `1`. |
| `false == 0` | `true` | `==` converte os tipos antes de comparar: `false` vira `0`, e `0 == 0` é verdadeiro. |
| `false === 0` | `false` | `===` não converte nada: compara tipo e valor, e `boolean` ≠ `number`. |

## ✅ Respostas — Parte 6 (Arrow Function vs Function)

1. O **Código 1** (function tradicional) funciona corretamente, imprimindo `"Maria"`.
2. O **Código 2** não funciona porque a arrow function não cria seu próprio `this` — ela usa o `this` do escopo onde foi definida (o módulo), não o objeto `pessoa`.
3. Em arrow functions, `this` é **herdado do escopo onde a função foi escrita** (léxico), e não de quem a chama — diferente das functions tradicionais.

## 🚀 Como executar

```bash
node script.js
```

## 🛠️ Tecnologias utilizadas

- Node.js (JavaScript puro, sem bibliotecas externas)

## 👤 Autor

Eduardo de Oliveira Aguiar
