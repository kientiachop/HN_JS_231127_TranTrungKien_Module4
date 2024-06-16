import { Request, Response } from "express";
import { findAll, findById, createTask, deleteTaskById } from "../service/task.service";

export const findAllTasks = async (req:Request, res:Response) =>{
    try {
        const tasks = await findAll();
        return res.status(200).json({
            data:tasks[0]
        })
    } catch (error) {
        console.log(error);
    }
}
export const findTaskId = async (req:Request, res:Response) =>{
    try {
        const taskId = req.params.id;
        const tasks = await findById(taskId);
        return res.status(200).json({
            data:tasks[0]
        })
    } catch (error) {
        console.log(error);
    }
}
export const postTask = async (req:Request, res:Response) =>{
    try {
        const { name, status } = req.body;
        const tasks = await createTask(name, status);
        return res.status(200).json({
            data:"Create success!"
        })
    } catch (error) {
        console.log(error);
    }
}
export const deleteTask = async (req:Request, res:Response) =>{
    try {
        const taskId = req.params.id;
        const tasks = await deleteTaskById(taskId);
        return res.status(200).json({
            data:"Delete success!"
        })
    } catch (error) {
        console.log(error);
    }
}