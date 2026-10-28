import pool from '../config/db.js';

//Retrieve
export const fetch = async () => {
    const [rows] = await pool.query('SELECT * FROM books');
    return rows;
};

//update
export const update = async (book) => {
    const[result] = await pool.query (
        "UPDATE book SET name= ?,author= ? WHERE id= ? ",
        [book.name, book.author, book.id]
    );
    return result.affectedRows;
}