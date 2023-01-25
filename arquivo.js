/* Aula 20 MaiaQuiz  */
let titulo = document.querySelector("h1");
let instrucoes = document.querySelector("#instrucoes");
let aviso = document.querySelector("#aviso");
let progresso = document.querySelector("#progresso");
let pontos = 0; // pontos para o placar
let placar = 0; // placar

// PERGUNTA
let numQuestao = document.querySelector("#numQuestao");
let pergunta = document.querySelector("#pergunta");

// ALTERNATIVAS
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");

// article com a class questoes
let articleQuestoes = document.querySelector(".questoes");
// ol li com as alternativas
let alternativas = document.querySelector("#alternativas");

const q1 = {
  quoteNumb: 1,
  pergunta:
    "What are the differences between Mark Zuckerberg and me? I give private information on corporations to you for free, and I'm a villain. Zuckerberg gives your private information to corporations for money and he’s Man of the Year",
  alternativaA: "Adriam Lamo",
  alternativaB: "Tsutomu Shimomura",
  alternativaC: "Julian Assange",
  alternativaD: "Lary Page",
  correta: "Julian Assange", // falta adicionar mini bio
  bio: "lorem lorem",
};

const q2 = {
  quoteNumb: 2,
  pergunta:
    "A piece of knowledge, unlike a piece of physical property, can be shared by large groups of people without making anybody poorer",
  alternativaA: "Tim Bernes-Lee",
  alternativaB: "Aron Swartz",
  alternativaC: "Bill Gates",
  alternativaD: "Alan Turin",
  correta: "Aron Swartz", // falta adicionar mini bio
  bio: "lorem lorem2",
};

const q3 = {
  quoteNumb: 3,
  pergunta: "Talk is cheap. Show me the code",
  alternativaA: "Linus Torvalds",
  alternativaB: "Ada Lovelace",
  alternativaC: "Grace Hooper",
  alternativaD: "Mark Zuckerberg",
  correta: "Linus Torvalds", // falta adicionar mini bio
};

const q4 = {
  quoteNumb: 4,
  pergunta:
    "I went to prison for my hacking. Now people hire me to do the same things I went to prison for, but in a legal and beneficial way",
  alternativaA: "Robert Tapan Morris",
  alternativaB: "Gary Mckinnon",
  alternativaC: "Albert Gonzalez",
  alternativaD: "Kevin D. Mitnick",
  correta: "Kevin D. Mitnick", // falta adicionar mini bio
};

const q5 = {
  quoteNumb: 5,
  pergunta:
    "Arguing that you don't care about the right to privacy because you have nothing to hide is no different than saying you don't care about free speech because you have nothing to say",
  alternativaA: "Edward Snowden",
  alternativaB: "Steve Jobs",
  alternativaC: "Arthur C Clark",
  alternativaD: "Kevin Poulsen",
  correta: "Edward Snowden", // falta adicionar mini bio
};

const q6 = {
  quoteNumb: 6,
  pergunta:
    "The force of nearly all modern authority is derived from violence or the threat of violence. One must acknowledge with cryptography no amount of violence will ever solve a math problem",
  alternativaA: "Charles Babbage",
  alternativaB: "John McCarthy",
  alternativaC: "Jacob Appelbaum",
  alternativaD: "Ted Cood",
  correta: "Jacob Appelbaum", // falta adicionar mini bio
};

const q7 = {
  quoteNumb: 7,
  pergunta: "Computers are useless. They can only give you answers",
  alternativaA: "Richard Stallman",
  alternativaB: "James Gosling",
  alternativaC: "Martha Lane Fox",
  alternativaD: "Pablo Picasso",
  correta: "Pablo Picasso", // falta adicionar mini bio
};

const questoes = [q1, q2, q3, q4, q5, q6, q7];

let numero = document.querySelector("#numero");
let total = document.querySelector("#total");

numero.textContent = q1.numQuestao;

let totalDeQuestoes = questoes.length - 1;
console.log("Total de questões " + totalDeQuestoes);
total.textContent = totalDeQuestoes;

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao;
pergunta.textContent = q1.pergunta;
a.textContent = q1.alternativaA;
b.textContent = q1.alternativaB;
c.textContent = q1.alternativaC;
d.textContent = q1.alternativaD;

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute("value", "1A");
b.setAttribute("value", "1B");
c.setAttribute("value", "1C");
d.setAttribute("value", "1D");

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
  numero.textContent = nQuestao;
  numQuestao.textContent = questoes[nQuestao].numQuestao;
  pergunta.textContent = questoes[nQuestao].pergunta;
  a.textContent = questoes[nQuestao].alternativaA;
  b.textContent = questoes[nQuestao].alternativaB;
  c.textContent = questoes[nQuestao].alternativaC;
  d.textContent = questoes[nQuestao].alternativaD;
  a.setAttribute("value", nQuestao + "A");
  b.setAttribute("value", nQuestao + "B");
  c.setAttribute("value", nQuestao + "C");
  d.setAttribute("value", nQuestao + "D");
  progresso.value = parseInt(progresso.value) + 1;
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener("dblclick", () => {
  pontos -= 10; // tirar 10 pontos em caso de duplo click
  if (numQuestao.value == 10 && pontos == 110) {
    pontos = 100;
  }
});

function bloquearAlternativas() {
  alternativas.classList.add("bloqueado");
}

function desbloquearAlternativas() {
  alternativas.classList.remove("bloqueado");
}

function piscarNoAcerto() {
  articleQuestoes.classList.remove("errou");
  articleQuestoes.classList.add("acertou");
}

function piscarNoErro() {
  articleQuestoes.classList.remove("acertou");
  articleQuestoes.classList.add("errou");
}

function tirarPiscar() {
  articleQuestoes.classList.remove("acertou");
  articleQuestoes.classList.remove("errou");
}

function verificarSeAcertou(nQuestao, resposta) {
  let numeroDaQuestao = nQuestao.value;
  console.log("Questão " + numeroDaQuestao);

  let respostaEscolhida = resposta.textContent;

  let certa = questoes[numeroDaQuestao].correta;
  console.log(certa);

  if (respostaEscolhida == certa) {
    piscarNoAcerto();
    pontos += 10;
    if (nQuestao.value == 1 && pontos == 20) {
      pontos = 10;
    }
  } else {
    piscarNoErro();
  }
  setTimeout(() => {
    tirarPiscar();
  }, 200);

  // atualizar placar
  placar = pontos;
  instrucoes.textContent = "Pontos " + placar;

  // bloquear a escolha de opcoes
  bloquearAlternativas();

  let bio = document.querySelector("#bio");
  bio.innerText = questoes[numeroDaQuestao].bio;
  console.log(questoes[numeroDaQuestao]);

  setTimeout(function () {
    proxima = numeroDaQuestao + 1;
    bio.innerText = "";

    if (proxima > totalDeQuestoes) {
      console.log("Fim do Jogo!");
      fimDoJogo();
    } else {
      proximaQuestao(proxima);
    }
  }, 3000);
  desbloquearAlternativas();
}

function fimDoJogo() {
  let s = "s";
  pontos == 0 ? (s = "") : (s = s);
  instrucoes.textContent =
    "Fim de Jogo! Você conseguiu " + pontos + " pontos de 60";

  instrucoes.classList.add("placar");

  // OCULTAR O ARTICLE DA QUESTAO
  articleQuestoes.style.display = "none";

  setTimeout(function () {
    pontos = 0; // zerar placar
    //location.reload();
    instrucoes.classList.remove("placar");
    // REINICIAR O JOGO
    articleQuestoes.style.display = "block";
    proximaQuestao(0);
    instrucoes.textContent = "Read the quote and try to guess the author";
  }, 8000);
}
