const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"você gosta de ler livros?",
        alternativas:["sim","não"]
    },
    {
        enunciado:"você gosta de ir ao cinema",
        alternativas:["sim","não"]
    },
    {
        enunciado:"você pratica algum exercício físico",
        alternativas:["sim","não"]
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
        botaoAlternativas.textContent = alternativa;
        caixaAlternativa. appendChild(botaoAlternativa); 
    }
}
mostraPergunta();