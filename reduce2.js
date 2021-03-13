const alunos = [
    {nome: 'ana', nota: 10, bolsista: false},
    {nome: 'fran', nota: 8.5, bolsista: true},
    {nome: 'belle', nota: 7.0, bolsista: false},
    {nome: 'alice', nota: 5, bolsista: true},
]

// desafio 1 : todos os alunos sao bolsistas?
const todosBolsista= (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsista))



//desafio 2 : algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))