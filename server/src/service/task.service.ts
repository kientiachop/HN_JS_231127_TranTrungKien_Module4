import pool from "../config/database";

export const createTask= async (name: string, status: number)=>{
  const query = `INSERT INTO tasks (name, status) VALUES ('${name}', ${status});`;
  console.log("11111",name, status);
  
  return await pool.execute(query);


}