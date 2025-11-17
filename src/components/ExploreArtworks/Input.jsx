import React, { useState } from "react";

const Input = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onSearch(searchValue); 
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full"
    >
      <input
        type="text"
        placeholder="Search by title..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      />
      <button
        type="submit"
        className="ml-2 py-2.5 px-3 text-white rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700"
      >
        Search
      </button>
    </form>
  );
};

export default Input;
