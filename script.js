const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"você gosta de ler livros?",
        alternativas:[{
            texto:"sim",
            afirmação:"porque é meu momento de lazer"
        },
        {
            texto:"não",
            afirmação: "porque não tenho paciência"
        }
        ]   
    },
    {
        enunciado:"você gosta de ir ao cinema?",
        alternativas:[{
            texto:"sim",
            afirmação: "porque é meu momento de lazer"
        },
        {
            texto: "não",
            afirmação: "porque não gosto de sair de casa"
        }
        ]
    },
    {
        enunciado:"você ouve música regularmente?",
        alternativas:[{
            texto:"sim",
             afirmação: "porque me espairece"
    },
    { 
           texto:"não",
           afirmação: "porque so me irrita"
    }
]
    }
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta(){
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " "; 
    mostraAlternativa();
}
function mostraAlternativa(){
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement;("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", ()=> respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas); 
    }
}
function respostasSelecionadas(opcaoselecionada){
    const afirmacoes = opcaoselecionada.afirmação;
    respostas = afirmacoes; 
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "continearei lendo meus livros em momentos de lazer"
}
mostraPergunta();