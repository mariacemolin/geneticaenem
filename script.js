const perguntas = [
  {
    pergunta: "O que é genótipo?",
    opcoes: ["Característica observável de um organismo.",
             "Conjunto de genes de um organismo.",
             "Mudança nas características herdadas.",
             "Tipo de célula reprodutiva."],
    resposta: 1
  },
  {
    pergunta: "A anemia falciforme é causada por:",
    opcoes: ["Um alelo dominante.",
             "Falta de ferro na dieta.",
             "Uma mutação genética que altera a hemoglobina.",
             "Uma infecção viral."],
    resposta: 2
  },
  {
    pergunta: "Qual das alternativas representa herança ligada ao sexo?",
    opcoes: ["Cor dos olhos.", "Hemofilia.", "Tipo sanguíneo.", "Albinismo."],
    resposta: 1
  },
  {
    pergunta: "O que significa um indivíduo ser heterozigoto?",
    opcoes: ["Possui dois alelos iguais.",
             "Um dominante e um recessivo.",
             "Dois dominantes.",
             "Apenas recessivos."],
    resposta: 1
  },
  {
    pergunta: "Qual a função do RNA mensageiro (mRNA)?",
    opcoes: ["Transportar aminoácidos.",
             "Formar ribossomos.",
             "Levar informação do DNA ao ribossomo.",
             "Replicar o DNA."],
    resposta: 2
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
