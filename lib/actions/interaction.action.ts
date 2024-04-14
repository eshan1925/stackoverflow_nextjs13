"use server";

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose";
import { ViewQuestionParams } from "./shared.types";
import Interaction from "@/database/interaction.model";

export async function viewQuestion(params: ViewQuestionParams) {
  try {
    connectToDatabase();
    // eslint-disable-next-line no-unused-vars
    const { questionId, userId} = params;
    if(questionId===null) return;
    // update view count for the question we are currently viewing
    await Question.findByIdAndUpdate(questionId, { $inc: { views: 1 } });

    if(userId){
        const existingInteraction = await Interaction.findOne({
            user:userId,
            action:'view',
            question:questionId,
        })
        
        if(existingInteraction) return;
        const questionObject = await Question.findById(questionId);
        // create interaction
        await Interaction.create({
            user:userId,
            action:"view",
            question:questionId,
            tags:questionObject.tags
        })
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
