const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"você gosta de ler livros?",
        alternativas:[{
            texto:"sim",
            afirmação:"por que é meu momento de lazer"
        },
        {
            texto:"não",
            afirmação: "por que não tenho paciência"
        }
        ]   
    },
    {
        enunciado:"você gosta de ir ao cinema?",
        alternativas:[{
            texto:"sim",
            afirmação: "por que é meu momento de lazer"
        },
        {
            texto: "não",
            afirmação: "por que não gosto de sair de casa"
        }
        ]
    },
    {
        enunciado:"você ouve música regularmente?",
        alternativas:[{
            texto:"sim",
             afirmação: "por que me espairece"
    },
    { 
           texto:"não",
           afirmação: "por que so me irrita"
    }
]
    }
]
let posicao = 0;
let perguntaAtual;


function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativa();{}
}
function mostraAlternativa(){
    for(const alternativa of paerguntaAtual.alternativa){
        const botaoAlternativas = document.createElement;("button")
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", funcion(){
           posicao++; 
        });
        caixaAlternativa. appendChild(botaoAlternativa); 
    }
}
mostraPergunta();