const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

export default function handler(req,res) {
    db.serialize(() => {
        db.run("DROP TABLE IF EXISTS User", (err) => {console.log("Tabela não existe")});
        db.run("DROP TABLE IF EXISTS Books", (err) => {console.log("Tabela não existe")});
        db.run('CREATE TABLE User (nomeCompleto Text, email Text, senha Text)');
        db.run('CREATE TABLE Books (id INT, titulo Text, autor Text, resumo Text, estadoFisico Text, preco Real, image Text)');
        // Insira dados
        const stmt = db.prepare('INSERT INTO User VALUES (?, ?, ?)');
        stmt.run("felipe Molina Gonçalves", "felipemolina.contato@gmail.com", "teste123");
        stmt.finalize();

        const stmt2 = db.prepare('INSERT INTO Books VALUES (?, ?, ?,?,?,?, ?)');
        stmt2.run(1, "Cem Anos de Solidão", "Gabriel García Márquez", "Uma saga familiar mágica e surreal em uma cidade fictícia na América Latina.", "Livro usado, em bom estado geral.", 14.99, "https://cdn.record.com.br/wp-content/uploads/2020/08/25160109/10788.jpeg");
        stmt2.run(2, "Harry Potter e a Pedra Filosofal", "J.K. Rowling", "A história de um jovem bruxo que descobre seu destino no mundo mágico.", "Livro usado, com algumas marcas de leitura.", 9.99, "https://m.media-amazon.com/images/I/71Yw2VtLc8L._AC_UF1000,1000_QL80_.jpg");
        stmt2.run(3, "A Menina que Roubava Livros", "Markus Zusak", "A história de Liesel Meminger, uma jovem que encontra consolo nos livros durante a Segunda Guerra Mundial.", "Livro usado, em boas condições.", 10.99, "https://m.media-amazon.com/images/I/61Fo3CitEGL._AC_UF1000,1000_QL80_.jpg");
        stmt2.run(4, "A Arte da Guerra", "Sun Tzu", "Um clássico sobre estratégia militar e táticas de guerra.", "Livro usado, páginas levemente amareladas.", 8.99, "https://cdn.awsli.com.br/600x450/2443/2443179/produto/163426249/f99dcad9c9.jpg");
        stmt2.run(5, "O Alquimista", "Paulo Coelho", "A jornada de um pastor em busca do seu tesouro pessoal.", "Livro usado, capa com algumas marcas de desgaste.", 9.99, "https://lh3.googleusercontent.com/-Wsav6WffUaA/TYCmWTLxapI/AAAAAAAADfQ/V-6ZSLxrVl8/w1200-h675-p-k-no-nu/pc1.jpg");
        stmt2.run(6, "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa", "C.S. Lewis", "Aventuras mágicas em um mundo de fantasia.", "Livro usado, com páginas amareladas.", 11.99, "https://m.media-amazon.com/images/I/7158aW38zxL._AC_UF1000,1000_QL80_.jpg");
        stmt2.finalize();
    });

    // Feche o banco de dados quando terminar
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        res.status(200).json("OK")
    });
}