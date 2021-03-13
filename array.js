
//jeito nao legal de fazer array
let aprovados = new Array('bia', 'carlos', 'ana')
console.log(aprovados)


// melhor jeito de declarar array

aprovados = ['bia', 'carlos', 'ana']
console.log(aprovados[0])

// add novo elemento

aprovados.push('fran')

//sort ele coloca em ordem
aprovados.sort()
console.log(aprovados)

//splice vc add e exclui 

aprovados.splice(1, 1,  'add1', 'add2')
console.log(aprovados)

