const sqlite3 = require('sqlite3').verbose();
export default function handler(req,res) {
    const db = new sqlite3.Database('meu_banco_de_dados.db');

    db.serialize(() => {
    // Insira dados
        db.each('SELECT * FROM Books', (err, row) => {
            if (err) {
            console.error(err.message);
            }
            res.status(200).json(row)
        });
    });

    // Feche o banco de dados quando terminar
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Banco de dados fechado.');
    });
}