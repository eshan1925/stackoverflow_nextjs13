"use server"


import { connectToDatabase } from "../mongoose";

export async function createQuestion(params:any) {
  console.log("I was here CQ");
  try {
    connectToDatabase();
  } catch (error) {
  }
}
