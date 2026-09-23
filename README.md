# Vinharia Agnello

Sistema de cadastro e recomendação de vinhos da Vinharia Agnello, feito em
HTML, CSS e JavaScript puro. Além do cadastro, o sistema tem um quiz que
recomenda um vinho da lista com base no gosto de quem responde.

## Integrantes do grupo

- Jackson andre da costa silva — RM574695
- Matheus Amorim de Paiva Mendes — RM574409

## Link do GitHub Pages

https://amorimxr.github.io/vinharia-agnello/

## Como usar

1. Abra a página e acompanhe pelo **console do navegador** (F12 → aba Console).
2. No menu principal, escolha uma opção:
   - **Cadastrar vinho** — informa nome, tipo, safra e quantidade em estoque.
   - **Ver vinhos cadastrados** — lista no console todos os vinhos já cadastrados.
   - **Fazer o quiz** — responde 3 perguntas (corpo, doçura e ocasião) e recebe
     uma recomendação com base nos vinhos cadastrados.
3. Sempre que algo for mostrado no console, um aviso aparece antes avisando
   o que vai aparecer.

## Funcionalidades

| Função | O que faz |
|---|---|
| `cadastrarVinho()` | Pede nome, tipo, safra e quantidade via `prompt()`, valida as respostas e guarda o vinho como objeto |
| `iniciarQuiz()` | Pergunta corpo (leve/médio/encorpado), doçura (seco/meio seco/doce) e ocasião do usuário |
| `exibirVinhos()` | Mostra todos os vinhos cadastrados no console |
| `calcularPontuacao()` | Compara as respostas do quiz com cada vinho e calcula uma pontuação |
| `mostrarResultado()` | Reordena os vinhos pela pontuação e mostra o mais indicado |
| `menuPrincipal()` | Controla a navegação entre as opções acima |

## Estrutura do vinho cadastrado

Cada vinho é guardado como um objeto com os seguintes campos:

```js
{
  nome: "",
  tipo: "",       // Tinto, Branco, Rosé, espumante ou licoroso
  safra: 0,
  quantidade: 0,
  corpo: "",      // leve, médio ou encorpado
  docura: "",     // seco, meio seco ou doce
  ocasiao: ""     // almoço, jantar, festa, presente ou outros
}
```

## Estrutura do projeto

```
vinharia-agnello/
│
├── index.html
├── README.md
│
└── src/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── assets/
        └── imgs/
```