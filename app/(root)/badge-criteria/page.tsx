import React from 'react';

const BadgeCriteria = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* Question Count */}
      <div className="text-dark100_light900 text-lg font-bold">Our badging criteria is as follows- :</div>
      <div className="text-lg font-bold text-primary-500">👋 Question Count</div>
      <ul className="text-dark100_light900 list-disc pl-4">
        <li>Bronze: 5 questions</li>
        <li>Silver: 10 questions</li>
        <li>Gold: 20 questions</li>
      </ul>

      {/* Answer Count */}
      <div className="text-lg font-bold text-primary-500">👋 Answer Count</div>
      <ul className="text-dark100_light900 list-disc pl-4">
        <li>Bronze: 2 answers</li>
        <li>Silver: 5 answers</li>
        <li>Gold: 10 answers</li>
      </ul>

      {/* Question Upvotes */}
      <div className="text-lg font-bold text-primary-500">👋 Question Upvotes</div>
      <ul className="text-dark100_light900 list-disc pl-4">
        <li>Bronze: 10 upvotes</li>
        <li>Silver: 20 upvotes</li>
        <li>Gold: 30 upvotes</li>
      </ul>

      {/* Answer Upvotes */}
      <div className="text-lg font-bold text-primary-500">👋 Answer Upvotes</div>
      <ul className="text-dark100_light900 list-disc pl-4">
        <li>Bronze: 10 upvotes</li>
        <li>Silver: 20 upvotes</li>
        <li>Gold: 30 upvotes</li>
      </ul>

      {/* Total Views */}
      <div className="text-lg font-bold text-primary-500">👋 Total Views</div>
      <ul className="text-dark100_light900 list-disc pl-4">
        <li>Bronze: 10 views</li>
        <li>Silver: 100 views</li>
        <li>Gold: 1000 views</li>
      </ul>
    </div>
  );
};

export default BadgeCriteria;
