import pool from '../config/db.js';

export const fetch = async () =>{
    const [rows] = await pool.query("SELECT * FROM student");
    return rows;

};

//insert
export const insert = async (student)=>{
    const[result] = await pool.query("INSERT IN TO student(name, srcode, program) VALUES(?,?)",[student.name, student.srcode, student.program]);
    
    return result.insertId;
    
}

//update
export const update = async (studentId, student) => {
    const[result] = await pool.query("UPDATE student SET name=?, srcode=?, program=? WHERE id=?",[student.name, student.srcode, student.program, studentId]);
    return result.affectedRows;
}

//delete
export const remove = async (id) => {
    const[result] = await pool.query("DELETE FROM student WHERE id=?",[id]);
    return result.affectedRows;
}