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
  correta: "Julian Assange",
  bio: "Julian Assange is an Australian computer programmer, publisher and journalist. He is the founder and editor of WikiLeaks, a website that publishes classified documents and information from anonymous sources. He was arrested in 2019 by British police and faced extradition to the United States, where he is charged with espionage and hacking. His trial is still ongoing",
};

const q2 = {
  quoteNumb: 2,
  pergunta:
    "A piece of knowledge, unlike a piece of physical property, can be shared by large groups of people without making anybody poorer",
  alternativaA: "Tim Bernes-Lee",
  alternativaB: "Aron Swartz",
  alternativaC: "Bill Gates",
  alternativaD: "Alan Turin",
  correta: "Aron Swartz",
  bio: "Aron Swartz was a co-founder of the social news website Reddit and a prominent figure in the development of the World Wide Web, the creative commons movement, and the fight for internet freedom. Swartz co-wrote the first specification of the RSS web feed format and helped to develop the framework for the Creative Commons licenses. He was arrested in 2011 and faced the risk of 50 years in prison, plus a $1 million fine. Committed suicide in 2013 but left no note",
};

const q3 = {
  quoteNumb: 3,
  pergunta: "Talk is cheap. Show me the code",
  alternativaA: "Linus Torvalds",
  alternativaB: "Ada Lovelace",
  alternativaC: "Grace Hooper",
  alternativaD: "Mark Zuckerberg",
  correta: "Linus Torvalds",
  bio: "Linus Torvalds is a software engineer and programmer who is best known as the creator of the Linux operating system. Linux is a free and open-source operating system that is widely used in servers, supercomputers, and mobile devices. It is based on the Unix operating system and is known for its stability, security, and flexibility",
};

const q4 = {
  quoteNumb: 4,
  pergunta:
    "I went to prison for my hacking. Now people hire me to do the same things I went to prison for, but in a legal and beneficial way",
  alternativaA: "Robert Tapan Morris",
  alternativaB: "Gary Mckinnon",
  alternativaC: "Albert Gonzalez",
  alternativaD: "Kevin D. Mitnick",
  correta: "Kevin D. Mitnick",
  bio: "Kevin D. Mitnick is an American computer security consultant, author, and convicted hacker. He gained notoriety in the late 20th century as a highly-skilled hacker who used his abilities to gain unauthorized access to computer systems and networks, including those belonging to the government and major corporations",
};

const q5 = {
  quoteNumb: 5,
  pergunta:
    "Arguing that you don't care about the right to privacy because you have nothing to hide is no different than saying you don't care about free speech because you have nothing to say",
  alternativaA: "Edward Snowden",
  alternativaB: "Steve Jobs",
  alternativaC: "Arthur C Clark",
  alternativaD: "Kevin Poulsen",
  correta: "Edward Snowden",
  bio: "Edward Snowden is an computer professional, former CIA employee who copied and leaked classified information from the NSA in 2013 without authorization. His disclosures revealed a global surveillance program by the U.S. government, which included the bulk collection of telephone and internet metadata, as well as the PRISM and Upstream surveillance programs",
};

const q6 = {
  quoteNumb: 6,
  pergunta:
    "The force of nearly all modern authority is derived from violence or the threat of violence. One must acknowledge with cryptography no amount of violence will ever solve a math problem",
  alternativaA: "Charles Babbage",
  alternativaB: "John McCarthy",
  alternativaC: "Jacob Appelbaum",
  alternativaD: "Ted Cood",
  correta: "Jacob Appelbaum",
  bio: "Jacob Appelbaum is a computer security researcher and hacker. He was a core member of the Tor Project, a non-profit organization that develops and maintains the Tor anonymity network, which helps people protect their privacy and security on the internet. In 2016 several allegations of sexual misconduct were made against him, he denied all allegations, but he resigned from his position at the Tor Project and stepped away from the public sphere. He has since not been involved in any significant public activities",
};

const q7 = {
  quoteNumb: 7,
  pergunta: "BÔNUS: A vida não é um morango",
  alternativaA: "Richard Stallman",
  alternativaB: "James Gosling",
  alternativaC: "Martha Lane Fox",
  alternativaD: "Alexandre Lima",
  correta: "Alexandre Lima",
};

const questoes = [{}, q1, q2, q3, q4, q5, q6, q7];

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
  console.log(nQuestao);
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
  console.log(questoes[numeroDaQuestao]);
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
  }, 90000);

  // atualizar placar
  placar = pontos;
  instrucoes.textContent = "Pontos " + placar;

  // bloquear a escolha de opcoes
  bloquearAlternativas();

  setTimeout(function () {
    proxima = numeroDaQuestao + 1;
    bio.innerText = "";

    if (proxima > totalDeQuestoes) {
      console.log("Fim do Jogo!");
      fimDoJogo();
    } else {
      proximaQuestao(proxima);
    }
  }, 30000);
  desbloquearAlternativas();
}

function fimDoJogo() {
  let s = "s";
  pontos == 0 ? (s = "") : (s = s);
  instrucoes.textContent = "Game Over! Score " + pontos + " out of 60";
  let bio = document.querySelector("#bio");
  bio.classList.remove("hidden");
  instrucoes.classList.add("placar");

  // OCULTAR O ARTICLE DA QUESTAO
  articleQuestoes.style.display = "none";

  // setTimeout(function () {
  //   pontos = 0; // zerar placar
  //   //location.reload();
  //   instrucoes.classList.remove("placar");
  //   // REINICIAR O JOGO
  //   articleQuestoes.style.display = "block";
  //   proximaQuestao(0);
  //   instrucoes.textContent = "Read the quote and try to guess the author";
  // }, 8000);
}
