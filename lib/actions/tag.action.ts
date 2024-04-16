"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import {
  GetAllTagsParams,
  GetQuestionsByTagIdParams,
  GetTopInteractedTagsParams,
} from "./shared.types";
import Tag, { ITag } from "@/database/tag.model";
import { FilterQuery } from "mongoose";
import Question from "@/database/question.model";
import Interaction from "@/database/interaction.model";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  // try {
  //   connectToDatabase();

  //   const { userId } = params;
  //   const user = await User.findById(userId);
  //   if (!user) throw new Error("User not Found");
  //   const userInteractions = await Interaction.find({ user: userId })
  //     .populate("tags")
  //     .exec();
  //     // Extract tags from user's interactions
  //     const userTags = userInteractions.reduce((tags, interaction) => {
  //       if (interaction.tags) {
  //         tags = tags.concat(interaction.tags);
  //       }
  //       return tags;
  //     }, []);
      
  //     // Get distinct tag IDs from user's interactions
  //     const distinctUserTagIds = [
  //       // @ts-ignore
  //       ...new Set(userTags.map((tag: any) => tag.name)),
  //     ];
  //   return distinctUserTagIds.slice(0,3);
  // } catch (error) {
  //   console.log(error);
  //   throw error;
  // }
  try {
    await connectToDatabase();

    const { userId, limit = 3 } = params;

    // Find the user by clerkId
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    // Find interactions for the user and group by tags
    const tagCountMap = await Interaction.aggregate([
      { $match: { user: user._id, tags: { $exists: true, $ne: [] } } },
      { $unwind: "$tags" },
      { $group: { _id: "$tags", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: limit },
    ]);

    const topTags = tagCountMap.map((tagCount) => tagCount._id);

    // Find the tag documents for the top tags
    const topTagDocuments = await Tag.find({ _id: { $in: topTags } });

    return topTagDocuments;
  } catch (error) {
    console.error("Error fetching top interacted tags:", error);
    throw error;
  }
}

export async function getAllTags(params: GetAllTagsParams) {
  try {
    connectToDatabase();
    const { searchQuery, filter, page = 1, pageSize = 8 } = params;
    const query: FilterQuery<typeof Tag> = {};
    if (searchQuery) {
      query.$or = [{ name: { $regex: new RegExp(searchQuery, "i") } }];
    }

    const skipAmount = (page - 1) * pageSize;
    let sortOptions = {};

    switch (filter) {
      case "popular":
        sortOptions = { questions: -1 };
        break;
      case "recent":
        sortOptions = { createdAt: -1 };
        break;
      case "name":
        sortOptions = { name: 1 };
        break;
      case "old":
        sortOptions = { createdAt: 1 };
        break;
      default:
        break;
    }
    const totalTags = await Tag.countDocuments(query);
    const tags = await Tag.find(query)
      .sort(sortOptions)
      .skip(skipAmount)
      .limit(pageSize);

    const isNext = totalTags > skipAmount + tags.length;
    return { tags,isNext };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getQuestionsByTagId(params: GetQuestionsByTagIdParams) {
  try {
    connectToDatabase();

    // eslint-disable-next-line no-unused-vars
    const { tagId, page = 1, pageSize = 4, searchQuery } = params;
    const tagFilter: FilterQuery<ITag> = { _id: tagId };
    const skipAmount = (page - 1) * pageSize;
    const tag = await Tag.findOne(tagFilter).populate({
      path: "questions",
      model: Question,
      match: searchQuery
        ? { title: { $regex: searchQuery, $options: "i" } }
        : {},
      options: {
        sort: { createdAt: -1 },
        skip:skipAmount,
        limit: pageSize+1
      },
      populate: [
        { path: "tags", model: Tag, select: "_id name" },
        { path: "author", model: User, select: "_id clerkId name picture" },
      ],
    });

    if (!tag) {
      throw new Error("Tag not found");
    }

    const isNext = tag.questions.length > pageSize;

    const questions = tag.questions;

    return { tagTitle: tag.name, questions, isNext };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getTopPopularTags() {
  try {
    connectToDatabase();
    // passing a pipeline using agregate
    const popularTags = await Tag.aggregate([
      { $project: { name: 1, numberOfQuestions: { $size: "$questions" } } },
      { $sort: { numberOfQuestions: -1 } },
      { $limit: 5 },
    ]);

    return popularTags;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
