const perguntas = [
  {
    pergunta: "O que é genótipo?",
    opcoes: ["Característica observável de um organismo.", "Conjunto de genes de um organismo.", "Mudança nas características herdadas.", "Tipo de célula reprodutiva."],
    resposta: 1
  },
  {
    pergunta: "O que é fenótipo?",
    opcoes: ["Comportamento genético de uma população.", "Aparência externa resultante do genótipo e ambiente.", "Mutação em cromossomos.", "Número de cromossomos."],
    resposta: 1
  },
  {
    pergunta: "A anemia falciforme é causada por:",
    opcoes: ["Um alelo dominante.", "Falta de ferro na dieta.", "Uma mutação genética que altera a hemoglobina.", "Uma infecção viral."],
    resposta: 2
  },
  {
    pergunta: "Qual das alternativas representa herança ligada ao sexo?",
    opcoes: ["Cor dos olhos.", "Hemofilia.", "Tipo sanguíneo.", "Albinismo."],
    resposta: 1
  },
  {
    pergunta: "O que significa um indivíduo ser heterozigoto?",
    opcoes: ["Dois alelos iguais.", "Um dominante e um recessivo.", "Dois genes dominantes.", "Apenas recessivos."],
    resposta: 1
  },
  {
    pergunta: "O que significa um indivíduo ser homozigoto recessivo?",
    opcoes: ["Possui dois genes dominantes.", "Possui dois alelos diferentes.", "Possui dois alelos recessivos.", "Possui apenas um alelo."],
    resposta: 2
  },
  {
    pergunta: "Qual a função do RNA mensageiro (mRNA)?",
    opcoes: ["Transportar aminoácidos.", "Formar ribossomos.", "Levar informação do DNA ao ribossomo.", "Replicar o DNA."],
    resposta: 2
  },
  {
    pergunta: "O que é um alelo?",
    opcoes: ["Um tipo de RNA.", "Uma enzima reguladora do núcleo.", "Uma variação de um gene.", "Uma mutação."],
    resposta: 2
  },
  {
    pergunta: "Em humanos, qual par de cromossomos determina o sexo?",
    opcoes: ["Par 1", "Par 21", "Par 23", "Par 46"],
    resposta: 2
  },
  {
    pergunta: "A Síndrome de Down está relacionada a:",
    opcoes: ["Ausência de um cromossomo.", "Trissomia do cromossomo 21.", "Duplicação do cromossomo 13.", "Herança ligada ao sexo."],
    resposta: 1
  },
  {
    pergunta: "Qual a base nitrogenada presente no RNA e ausente no DNA?",
    opcoes: ["Adenina", "Citosina", "Uracila", "Timina"],
    resposta: 2
  },
  {
    pergunta: "O que são cromossomos homólogos?",
    opcoes: ["Cromossomos diferentes que não se alinham.", "Cromossomos iguais herdados do mesmo progenitor.", "Cromossomos pareados com genes correspondentes.", "Cromossomos sexuais X e Y."],
    resposta: 2
  },
  {
    pergunta: "O que é mutação genética?",
    opcoes: ["Modificação na célula plasmática.", "Alteração no número de células.", "Mudança no DNA.", "Duplicação de organelas."],
    resposta: 2
  },
  {
    pergunta: "A cor dos olhos é um exemplo de:",
    opcoes: ["Herança ligada ao sexo.", "Fenótipo.", "Genótipo.", "Epigenética."],
    resposta: 1
  },
  {
    pergunta: "Genes alelos estão localizados:",
    opcoes: ["No núcleo.", "Em cromossomos diferentes.", "Na mesma posição em cromossomos homólogos.", "No citoplasma."],
    resposta: 2
  },
  {
    pergunta: "Cruzamento entre heterozigotos (Aa x Aa) resulta em que proporção fenotípica?",
    opcoes: ["3:1", "1:1", "1:2:1", "2:1"],
    resposta: 0
  },
  {
    pergunta: "Qual é a estrutura que contém o material genético na célula?",
    opcoes: ["Lisossomo", "Núcleo", "Mitocôndria", "Ribossomo"],
    resposta: 1
  },
  {
    pergunta: "DNA é composto por:",
    opcoes: ["Ácidos graxos e enzimas.", "Nucleotídeos.", "Polissacarídeos.", "Aminoácidos."],
    resposta: 1
  },
  {
    pergunta: "Uma característica recessiva só se manifesta quando:",
    opcoes: ["O alelo dominante está presente.", "Os dois alelos são recessivos.", "Há um cromossomo extra.", "O RNA a ativa."],
    resposta: 1
  },
  {
    pergunta: "A hemofilia é uma doença ligada ao:",
    opcoes: ["Cromossomo Y.", "Autossomo 21.", "Cromossomo X.", "DNA mitocondrial."],
    resposta: 2
  },
  {
    pergunta: "Genes localizados no mesmo cromossomo são chamados de:",
    opcoes: ["Alélicos.", "Recessivos.", "Ligados.", "Epigenéticos."],
    resposta: 2
  },
  {
    pergunta: "O que Mendel usou em seus experimentos?",
    opcoes: ["Milho.", "Ervilhas.", "Feijão.", "Batatas."],
    resposta: 1
  },
  {
    pergunta: "A genética estuda:",
    opcoes: ["O ambiente celular.", "A hereditariedade e variações genéticas.", "O metabolismo orgânico.", "A evolução humana."],
    resposta: 1
  },
  {
    pergunta: "A mitose resulta em:",
    opcoes: ["Quatro células filhas diferentes.", "Duas células idênticas.", "Redução do número de cromossomos.", "Células germinativas."],
    resposta: 1
  },
  {
    pergunta: "A meiose é importante para:",
    opcoes: ["Crescimento celular.", "Reparação de tecidos.", "Formação de gametas.", "Aumentar a massa corporal."],
    resposta: 2
  },
  {
    pergunta: "A genética moderna começou com:",
    opcoes: ["Watson e Crick.", "Darwin.", "Mendel.", "Pasteur."],
    resposta: 2
  },
  {
    pergunta: "A duplicação do DNA ocorre durante:",
    opcoes: ["Meiose II.", "Metáfase.", "Interfase.", "Citocinese."],
    resposta: 2
  },
  {
    pergunta: "A epigenética estuda:",
    opcoes: ["A mutação nos genes.", "A estrutura da célula.", "Modificações na expressão gênica sem alterar o DNA.", "A replicação do RNA."],
    resposta: 2
  },
  {
    pergunta: "Uma célula diplóide tem:",
    opcoes: ["Um cromossomo de cada par.", "Dois cromossomos sexuais apenas.", "Dois cromossomos de cada par.", "Nenhum cromossomo."],
    resposta: 2
  },
  {
    pergunta: "Os gametas humanos possuem:",
    opcoes: ["23 cromossomos.", "46 cromossomos.", "92 cromossomos.", "22 pares de cromossomos."],
    resposta: 0
  }
];

let perguntaAtual = 0;
let pontuacao = 0;

const quizContainer = document.getElementById("quiz");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function mostrarPergunta() {
  const q = perguntas[perguntaAtual];
  quizContainer.innerHTML = `<h2>${q.pergunta}</h2>`;
  q.opcoes.forEach((opcao, index) => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = opcao;
    div.onclick = () => verificarResposta(index, div);
    quizContainer.appendChild(div);
  });
}

function verificarResposta(index, div) {
  const correta = perguntas[perguntaAtual].resposta;
  const opcoes = document.querySelectorAll(".option");

  opcoes.forEach((el, i) => {
    el.classList.remove("correct", "incorrect");
    el.style.pointerEvents = "none";
    if (i === correta) el.classList.add("correct");
    else if (i === index) el.classList.add("incorrect");
  });

  if (index === correta) pontuacao++;
}

nextBtn.onclick = () => {
  perguntaAtual++;
  if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    quizContainer.innerHTML = "<h2>Fim do quiz!</h2>";
    scoreEl.innerText = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
    nextBtn.style.display = "none";
  }
};

mostrarPergunta();
