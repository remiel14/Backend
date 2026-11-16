import * as studentModels from '../models/studentModel.js';

export const fetchAllStudents = async() => {
    const students = await studentModels.fetch();
    return students;
}

export const createStudents = async(student) =>{
    const studentId = await studentModels.insert(student);
    return studentId
}

//UPDATE
export const updateStudents = async(student) =>{
    const updatedStudent = await studentModels.update(student);
    return updatedStudent;
}

//DELET
export const deleteStudents = async(id) =>{
    const deletedstudent = await studentModels.remove(id);
    return deletedstudent;
}