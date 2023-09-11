const sqlite3 = require('sqlite3').verbose();
export default function handler(req,res) {
    const db = new sqlite3.Database('database.db');

    db.serialize(() => {
        db.all('SELECT * FROM Books', (err, rows) => {
            if (err) {
            console.error(err.message);
            }
            res.status(200).json(rows)
        })
    });

    // Feche o banco de dados quando terminar
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Banco de dados fechado.');
    });
}