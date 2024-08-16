const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      
    password: '',     
    database: 'contacts_db' ,
});

db.connect((err) => {
    if (err) {
        console.error('MySQL connection error:', err);
        process.exit(1);
    }
    console.log('MySQL Connected...');
});

module.exports = db;
