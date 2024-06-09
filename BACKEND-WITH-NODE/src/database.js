const sqlite3 = require('sqlite3').verbose();

export default function initialiseDatabase() {
    let db = new sqlite3.Database('./mydb.sqlite3', (err) => {
        if (err) {
            console.error('Could not open database: ', err.message);
        } else {
            console.log('Connected to the SQLite database!');
        }
    });

    db.serialize(() => {
        db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, city TEXT, country TEXT)', (err) => {
            if (err) {
                console.error('Could not create users table: ', err.message);
            }
        });
        db.run('CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT, author TEXT)', (err) => {
            if (err) {
                console.error('Could not create posts table: ', err.message);
            }
        });
        db.run('CREATE TABLE IF NOT EXISTS comments (id INTEGER PRIMARY KEY AUTOINCREMENT, content TEXT, author TEXT, post_id INTEGER)', (err) => {
            if (err) {
                console.error('Could not create authors table: ', err.message);
            }
        });
    
    });
}