const produtos =[
    {nome: 'notebook', preço: 3890, fragil: true},
    {nome: 'ipad pro', preço: 5690, fragil: true},
    {nome: 'copo de vidro', preço: 90, fragil: true},
    {nome: 'copo de platico', preço: 30, fragil: false}

]

console.log(produtos.filter(function(p){
    return 

}))

const caro = produto => produto.preço >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))