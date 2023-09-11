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
        stmt2.run(1, "Cem Anos de Solidão", "Gabriel García Márquez", "Uma saga familiar mágica e surreal em uma cidade fictícia na América Latina.", "Livro usado, em bom estado geral.", 14.99, "");
        stmt2.run(2, "Harry Potter e a Pedra Filosofal", "J.K. Rowling", "A história de um jovem bruxo que descobre seu destino no mundo mágico.", "Livro usado, com algumas marcas de leitura.", 9.99, "");
        stmt2.run(3, "A Menina que Roubava Livros", "Markus Zusak", "A história de Liesel Meminger, uma jovem que encontra consolo nos livros durante a Segunda Guerra Mundial.", "Livro usado, em boas condições.", 10.99, "");
        stmt2.run(4, "A Arte da Guerra", "Sun Tzu", "Um clássico sobre estratégia militar e táticas de guerra.", "Livro usado, páginas levemente amareladas.", 8.99, "");
        stmt2.run(5, "O Alquimista", "Paulo Coelho", "A jornada de um pastor em busca do seu tesouro pessoal.", "Livro usado, capa com algumas marcas de desgaste.", 9.99, "");
        stmt2.run(6, "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa", "C.S. Lewis", "Aventuras mágicas em um mundo de fantasia.", "Livro usado, com páginas amareladas.", 11.99, "");
        stmt2.run(7, "O Código Da Vinci", "Dan Brown", "Uma emocionante busca por segredos ocultos na obra de Leonardo da Vinci.", "Livro usado, com algumas marcas de manuseio.", 12.99, "");
        stmt2.run(8, "Dom Quixote", "Miguel de Cervantes", "As aventuras de um cavaleiro sonhador que confunde realidade e fantasia.", "Livro usado, com algumas marcas de dobras nas páginas.", 18.99, "");
        stmt2.run(9, "O Grande Gatsby", "F. Scott Fitzgerald", "Uma história de decadência e extravagância na Nova York dos anos 1920.", "Livro usado, em boas condições.", 14.99, "");
        stmt2.run(10, "Moby Dick", "Herman Melville", "A perseguição a uma baleia branca lendária pelo capitão Ahab.", "Livro usado, com capa desgastada.", 16.99, "");
        stmt2.run(11, "A Culpa é das Estrelas", "John Green", "Uma história de amor entre dois adolescentes com câncer.", "Livro usado, em boas condições.", 11.99, "");
        stmt2.run(12, "O Iluminado", "Stephen King", "Um escritor e sua família em um hotel assombrado durante o inverno.", "Livro usado, com algumas marcas de leitura.", 13.99, "");
        stmt2.run(13, "A Revolução dos Bichos", "George Orwell", "Uma fábula que satiriza a política e a corrupção através da história de uma fazenda.", "Livro usado, páginas amareladas pelo tempo.", 7.99, "");
        stmt2.run(14, "O Pequeno Príncipe", "Antoine de Saint-Exupéry", "Uma história encantadora sobre a amizade entre um príncipe e um aviador.", "Livro usado, com assinatura na primeira página.", 6.99, "");
        stmt2.run(15, "O Hobbit", "J.R.R. Tolkien", "A jornada de Bilbo Bolseiro em busca de um tesouro guardado por um dragão.", "Livro usado, com algumas manchas na capa.", 10.99, "");
        stmt2.run(16, "O Silmarillion", "J.R.R. Tolkien", "Uma obra que explora a mitologia da Terra-média de J.R.R. Tolkien.", "Livro usado, em bom estado geral.", 12.99, "");
        stmt2.run(17, "A Moreninha", "Joaquim Manuel de Macedo", "Um romance brasileiro clássico de Joaquim Manuel de Macedo.", "Livro usado, com páginas amareladas.", 8.99, "");
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