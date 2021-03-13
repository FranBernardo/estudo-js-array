Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "borracha", "preço": 3,45}',
    '{"nome": "lapis", "preço": 3,45}',
    '{"nome": "caderno", "preço": 3,45}',
    '{"nome": "caneta", "preço": 3,45}',
]

// retorna apenas o preço

const paraObjeto = JSON => JSON.parse(json)
const apenasPreço = produto => produto.apenasPreço
const resultado = carrinho.map2(paraObjeto).map2(apenasPreço)

console.log(resultado)