import React from "react";

type Props = {
  char: string;
};

export const Letter = ({ char }: Props) => {
  return (
    <div className="flex items-center justify-center h-16 w-16 bg-gray-100 border-4 border-gray-200 shadow-md rounded-md">
      <span className="text-xl text-gray-500 font-bold">{char}</span>
    </div>
  );
};
