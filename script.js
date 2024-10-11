const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "você gosta de ler livros?",
        alternativas: [{
            texto: "sim",
            afirmação: "você gosta de ler livros? sim, porque é meu momento de lazer."
        },
        {
            texto: "não",
            afirmação: "você gosta de ler livros? não, porque não tenho paciência."
        }
        ]
    },
    {
        enunciado: "você gosta de ir ao cinema?",
        alternativas: [{
            texto: "sim",
            afirmação: "você gosta de ir ao cinema? sim, porque gosto do ambiente e da pipoca."

        },
        {
            texto: "não",
            afirmação: "você gosta de ir ao cinema? não, porque não gosto de sair de casa."
        }
        ]
    },
    {
        enunciado: "você ouve música regularmente?",
        alternativas: [{
            texto: "sim",
            afirmação: "você ouve música regularmente? sim, porque me espairece."
        },
        {
            texto: "não",
            afirmação: "você ouve música regularmente? não, porque só me irrita."
        }
        ]
    }
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoselecionada) {
    const afirmacoes = opcaoselecionada.afirmação;
    
    respostas += afirmacoes + ' ';
    posicao++;
    mostraPergunta();
}
function mostraResultado() {
    caixaPergunta.textContent = "confira aqui suas respostas";
    textoResultado.textContent = respostas;
    caixaAlternativa.textContent = "";
}
mostraPergunta();