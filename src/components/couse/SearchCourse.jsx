"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchCourse = ({ courses, onSearch }) => {
  const [searchInput, setSearchInput] = useState("");


  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = courses.filter((i) =>
      i.title.toLowerCase().includes(searchInput.toLowerCase()),
    );
    onSearch(filtered);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-center gap-2 max-w-xl mx-auto"
    >
      <input
        value={searchInput}
        onChange={(e)=>setSearchInput(e.target.value)}
        type="text"
        placeholder="e.g. Web development"
        className="w-full px-5 py-3 border rounded-full outline-none focus:ring-2 focus:ring-violet-300"
      />
      <button
        type="submit"
        className="p-3 rounded-full bg-violet-600 text-white hover:bg-violet-700 transition cursor-pointer"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchCourse;
