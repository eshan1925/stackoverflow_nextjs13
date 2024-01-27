import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/card/QuestionCard";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "What is the best way to learn Python?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "learning" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "author1.jpg",
    },
    upvotes: 2000000,
    views: 10000,
    answers: [],
    createdAt: new Date("2021-01-15T08:00:00.000Z"),
  },
  {
    _id: "2",
    title: "How to optimize SQL queries for better performance?",
    tags: [
      { _id: "3", name: "sql" },
      { _id: "4", name: "performance" },
    ],
    author: {
      _id: "2",
      name: "Alice Smith",
      picture: "author2.jpg",
    },
    upvotes: 15,
    views: 80,
    answers: [],
    createdAt: new Date("2023-02-20T10:30:00.000Z"),
  },
  {
    _id: "3",
    title: "What are the new features in TypeScript 4.5?",
    tags: [
      { _id: "5", name: "typescript" },
      { _id: "6", name: "release" },
    ],
    author: {
      _id: "3",
      name: "Emma Johnson",
      picture: "author3.jpg",
    },
    upvotes: 25,
    views: 120,
    answers: [],
    createdAt: new Date("2023-03-10T14:45:00.000Z"),
  },
  {
    _id: "4",
    title: "How to deploy a Node.js application on AWS?",
    tags: [
      { _id: "7", name: "node.js" },
      { _id: "8", name: "aws" },
    ],
    author: {
      _id: "4",
      name: "Michael Brown",
      picture: "author4.jpg",
    },
    upvotes: 18,
    views: 90,
    answers: [],
    createdAt: new Date("2023-04-05T16:20:00.000Z"),
  },
  {
    _id: "5",
    title: "What are the best practices for React component testing?",
    tags: [
      { _id: "9", name: "react" },
      { _id: "10", name: "testing" },
    ],
    author: {
      _id: "5",
      name: "Sophia Wilson",
      picture: "author5.jpg",
    },
    upvotes: 22,
    views: 110,
    answers: [],
    createdAt: new Date("2023-05-12T09:10:00.000Z"),
  },
];
export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeHolder="Search for Questions..."
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            desc="Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from. Get
          involved!"
            link="/ask-question"
            linkTitle="Ask a Questions"
          />
        )}
      </div>
    </>
  );
}
