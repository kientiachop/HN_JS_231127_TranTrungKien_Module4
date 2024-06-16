import pool from "../config/database";

export const findAll= async ()=>{
    const query = "SELECT * FROM todolists";
    return await pool.execute(query);
}
export const findById= async (taskId: string)=>{
    const query = `SELECT * FROM todolists WHERE id = '${taskId}'`;
    return await pool.execute(query);
}
export const createTask= async (name: string, status: number)=>{
    const query = `INSERT INTO todolists (name, status) VALUES ('${name}', ${status});`;
    return await pool.execute(query);
}
export const deleteTaskById= async (taskId: string)=>{
    const query = `DELETE FROM todolists WHERE id = ${taskId};`;
    return await pool.execute(query);
}