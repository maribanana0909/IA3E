const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"Perguntas 1",
        alternativas: ["Alternativa 1", "Alternativa 2"],
 },
{
    enunciado: "Perguntas 2",
        alternativas: ["Alternativa 1", "Alternativa 2"]
},
{
    enunciado: "Perguntas 3",
        alternativas: ["Alternativa 1", "Alternativa 2"]
}
]
let posicao = 0;
let perguntaAtual;

function mostraPergunta(){

}