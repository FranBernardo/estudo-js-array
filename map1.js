const nums = [1, 2, 3, 4, 5]

//for com proposito
let resultado = nums.map(function(e){
    return e * 2
})

const soma10 = e => e + 10
const tripo = e => e * 3
const paraDinheiro = e => `r$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado =nums.map(soma10).map(tripo).map(paraDinheiro )