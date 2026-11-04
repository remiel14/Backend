import pool from '../config/db.js';

export const fetch = async () => {
    const [rows] = await pool.query('SELECT * FROM books');
    return rows;
};

//insert
export const insert = async (book) => {
    const [result] = await pool.query('INSERT INTO books (name, author) VALUES (?, ?)', [book.name, book.author]);
    return result.insertId;
};

//update
export const update = async (book) => {
    const[result] = await pool.query (
        "UPDATE book SET name= ?,author= ? WHERE id= ? ",
        [book.name, book.author, book.id]
    );
    return result.affectedRows;
}