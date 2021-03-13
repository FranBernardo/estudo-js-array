const carrinho = [
    '{"nome": "borracha", "preço": 3,45}',
    '{"nome": "lapis", "preço": 3,45}',
    '{"nome": "caderno", "preço": 3,45}',
    '{"nome": "caneta", "preço": 3,45}',
]

// retorna apenas o preço

const paraObjeto = JSON => JSON.parse(json)
const apenasPreço = produto => produto.apenasPreço
const resultado = carrinho.map(paraObjeto).map(apenasPreço)

console.log(resultado)