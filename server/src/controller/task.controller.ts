import { Request, Response } from "express";
import { createTask } from "../service/task.service";

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