//LISTA DE VINHOS CADASTRADOS
 
let vinhos = [];
 
//CADASTRO DE VINHOS
 
function cadastrarVinho() {
    let nomeVinho = prompt("Qual o nome do vinho?");
    while (!nomeVinho) {
        nomeVinho = prompt("Nome do vinho inválido. Por favor, insira um nome válido:");
    }
 
    let tipoVinho = (prompt("Qual o tipo do vinho? (tinto, branco, rosé)") || "").toLowerCase();
    while (tipoVinho !== "tinto" && tipoVinho !== "branco" && tipoVinho !== "rosé") {
        tipoVinho = (prompt("Tipo de vinho inválido. Por favor, escolha entre tinto, branco ou rosé:") || "").toLowerCase();
    }
 
    let safra = parseInt(prompt("Qual o ano da safra?"));
    while (isNaN(safra) || safra < 1900 || safra > new Date().getFullYear()) {
        safra = parseInt(prompt("Ano de safra inválido. Por favor, insira um ano entre 1900 e " + new Date().getFullYear() + ":"));
    }
 
    let estoque = parseInt(prompt("Qual a quantidade em estoque?"));
    while (isNaN(estoque) || estoque < 0) {
        estoque = parseInt(prompt("Quantidade inválida. Por favor, insira um número maior ou igual a 0:"));
    }
 
    let corpodoVinho = (prompt("Qual o corpo do vinho? (leve, médio, marcante)") || "").toLowerCase();
    while (corpodoVinho !== "leve" && corpodoVinho !== "médio" && corpodoVinho !== "marcante") {
        corpodoVinho = (prompt("Corpo do vinho inválido. Por favor, escolha entre leve, médio ou marcante:") || "").toLowerCase();
    }
 
    let docuraVinho = (prompt("Qual a doçura do vinho? (seco, médio, doce)") || "").toLowerCase();
    while (docuraVinho !== "seco" && docuraVinho !== "médio" && docuraVinho !== "doce") {
        docuraVinho = (prompt("Doçura do vinho inválida. Por favor, escolha entre seco, médio ou doce:") || "").toLowerCase();
    }
 
    let ocasiaoVinho = (prompt("Qual a ocasião para o vinho? (almoço, jantar, festa, presente)") || "").toLowerCase();
    while (ocasiaoVinho !== "almoço" && ocasiaoVinho !== "jantar" && ocasiaoVinho !== "festa" && ocasiaoVinho !== "presente") {
        ocasiaoVinho = (prompt("Ocasião inválida. Por favor, escolha entre almoço, jantar, festa ou presente:") || "").toLowerCase();
    }
 
    vinhos.push({
        nome: nomeVinho,
        tipo: tipoVinho,
        safra: safra,
        estoque: estoque,
        corpo: corpodoVinho,
        docura: docuraVinho,
        ocasiao: ocasiaoVinho
    });
 
    alert("Cadastro realizado! Veja os detalhes no console.");
    console.log("Vinho cadastrado:", vinhos[vinhos.length - 1]);
}
 
//QUIZ DE VINHOS
 
function iniciarQuiz() {
    let preferenciaVinho = (prompt("Qual o seu tipo de vinho preferido? (tinto, branco, rosé)") || "").toLowerCase();
    while (preferenciaVinho !== "tinto" && preferenciaVinho !== "branco" && preferenciaVinho !== "rosé") {
        preferenciaVinho = (prompt("Tipo de vinho inválido. Por favor, escolha entre tinto, branco ou rosé:") || "").toLowerCase();
    }
 
    let preferenciaCorpo = (prompt("Qual o corpo do vinho você prefere? (leve, médio, marcante)") || "").toLowerCase();
    while (preferenciaCorpo !== "leve" && preferenciaCorpo !== "médio" && preferenciaCorpo !== "marcante") {
        preferenciaCorpo = (prompt("Corpo do vinho inválido. Por favor, escolha entre leve, médio ou marcante:") || "").toLowerCase();
    }
 
    let preferenciaDocura = (prompt("Qual a doçura do vinho você prefere? (seco, médio, doce)") || "").toLowerCase();
    while (preferenciaDocura !== "seco" && preferenciaDocura !== "médio" && preferenciaDocura !== "doce") {
        preferenciaDocura = (prompt("Doçura do vinho inválida. Por favor, escolha entre seco, médio ou doce:") || "").toLowerCase();
    }
 
    let preferenciaOcasiao = (prompt("Qual a ocasião para o vinho você prefere? (almoço, jantar, festa, presente)") || "").toLowerCase();
    while (preferenciaOcasiao !== "almoço" && preferenciaOcasiao !== "jantar" && preferenciaOcasiao !== "festa" && preferenciaOcasiao !== "presente") {
        preferenciaOcasiao = (prompt("Ocasião inválida. Por favor, escolha entre almoço, jantar, festa ou presente:") || "").toLowerCase();
    }
 
    return {
        tipo: preferenciaVinho,
        corpo: preferenciaCorpo,
        docura: preferenciaDocura,
        ocasiao: preferenciaOcasiao
    };
}
 
//EXIBIÇÃO DOS VINHOS
 
function exibirVinhos() {
    if (vinhos.length === 0) {
        alert("Nenhum vinho cadastrado ainda.");
        return;
    }
 
    alert("A seguir, veja os detalhes dos vinhos no console.");
 
    for (let i = 0; i < vinhos.length; i++) {
        console.log(`
Nome: ${vinhos[i].nome}
Tipo: ${vinhos[i].tipo}
Safra: ${vinhos[i].safra}
Quantidade em estoque: ${vinhos[i].estoque}
Corpo: ${vinhos[i].corpo}
Doçura: ${vinhos[i].docura}
Ocasião: ${vinhos[i].ocasiao}
------------------------------
        `);
    }
}
 
//PONTUAÇÃO E RESULTADO DO QUIZ
 
function calcularPontuacao(respostas) {
    const pontuados = vinhos.map(function (vinho) {
        let pontos = 0;
 
        if (vinho.tipo.toLowerCase() === respostas.tipo.toLowerCase()) {
            pontos += 1;
        }
        if (vinho.corpo.toLowerCase() === respostas.corpo.toLowerCase()) {
            pontos += 1;
        }
        if (vinho.docura.toLowerCase() === respostas.docura.toLowerCase()) {
            pontos += 1;
        }
        if (vinho.ocasiao.toLowerCase() === respostas.ocasiao.toLowerCase()) {
            pontos += 1;
        }
 
        return { ...vinho, pontos: pontos };
    });
 
    pontuados.sort(function (a, b) {
        return b.pontos - a.pontos;
    });
 
    return pontuados;
}
 
function mostrarResultado(respostas) {
    if (vinhos.length === 0) {
        alert("Nenhum vinho cadastrado ainda.");
        return;
    }
 
    const ranking = calcularPontuacao(respostas);
    alert("Confira o ranking dos vinhos no console.");
 
    for (let i = 0; i < ranking.length; i++) {
        console.log(`${i + 1}º - ${ranking[i].nome} (${ranking[i].pontos} de 4 pontos)`);
    }
}
 
//MENU PRINCIPAL
 
let respostasQuiz = null;
 
function menuPrincipal() {
    let opcao = "";
 
    while (opcao !== "0") {
        opcao = prompt(
            "1 - Cadastrar vinho\n2 - Fazer quiz\n3 - Ver vinhos\n4 - Ver resultado do quiz\n0 - Sair"
        );
 
        if (opcao === null) {
            opcao = "0";
        }
 
        if (opcao === "1") {
            cadastrarVinho();
        } else if (opcao === "2") {
            respostasQuiz = iniciarQuiz();
        } else if (opcao === "3") {
            exibirVinhos();
        } else if (opcao === "4") {
            if (respostasQuiz === null) {
                alert("Faça o quiz primeiro.");
            } else {
                mostrarResultado(respostasQuiz);
            }
        } else if (opcao !== "0") {
            alert("Opção inválida.");
        }
    }
 
    alert("Até logo!");
}
 
menuPrincipal();
