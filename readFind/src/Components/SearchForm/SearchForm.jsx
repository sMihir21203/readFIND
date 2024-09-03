import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchBtn = async (evt) => {
    evt.preventDefault(); // Prevent default form submission behavior

    try {
      if (search.trim() === "") return; // Don't perform search if the input is empty

      const URL = `https://www.googleapis.com/books/v1/volumes?q=
        ${search}
        &key=AIzaSyBSsGXki-IG0bQYpwSgkfGt1IWm_O_ZtEw
        &maxResults=40`;

      const response = await fetch(URL);
      const data = await response.json();
      console.log(data.items);

      // Navigate to the book-list page with search results
      navigate("/book-list", { state: { books: data.items } });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-full flex justify-center'>
      <form className='w-full max-w-md' onSubmit={searchBtn}>
        <div className='md:-ml-[8rem] md:-mr-[8rem] relative mt-4 bg-white shadow-lg rounded-full flex items-center overflow-hidden border border-gray-300'>
          <input
            type='text'
            placeholder='Find your read...'
            className='w-full p-4 text-xl font-semibold text-gray-700 outline-none border-none focus:ring-2 focus:ring-slate-950 transition-all duration-300'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type='submit'
            className='absolute right-0 p-4 bg-blue-500 hover:bg-slate-900 text-white transition-colors duration-300 rounded-full'
          >
            <FaSearch size={30} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
