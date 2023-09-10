const sqlite3 = require('sqlite3').verbose();
export default function handler(req,res) {
    res.status(200).json([
        {
        "tituloLivro": "Cem Anos de Solidão",
        "sumario": "Uma saga familiar mágica e surreal em uma cidade fictícia na América Latina.",
        "estadoFisico": "Livro usado, em bom estado geral.",
        "preco": 14.99,
        "imgBase64": ""
        },
        {
        "tituloLivro": "Harry Potter e a Pedra Filosofal",
        "sumario": "A história de um jovem bruxo que descobre seu destino no mundo mágico.",
        "estadoFisico": "Livro usado, com algumas marcas de leitura.",
        "preco": 9.99,
        "imgBase64": ""
        },
        {
        "tituloLivro": "A Revolução dos Bichos",
        "sumario": "Uma fábula que satiriza a política e a corrupção através da história de uma fazenda.",
        "estadoFisico": "Livro usado, páginas amareladas pelo tempo.",
        "preco": 7.99,
        "imgBase64": ""
        },
        {
        "tituloLivro": "O Pequeno Príncipe",
        "sumario": "Uma história encantadora sobre a amizade entre um príncipe e um aviador.",
        "estadoFisico": "Livro usado, com assinatura na primeira página.",
        "preco": 6.99,
        "imgBase64": ""
        }
    ])
}