const alunos = [
    {nome: 'ana', nota: 10, bolsista: false},
    {nome: 'fran', nota: 8.5, bolsista: true},
    {nome: 'belle', nota: 7.0, bolsista: false},
    {nome: 'alice', nota: 5, bolsista: true},
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

