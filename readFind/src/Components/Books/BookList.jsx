import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {Spinner} from '../CompsIndex'; 

const BookList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { books } = location.state || { books: [] };

  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading state
    const timer = setTimeout(() => setLoading(false), 500); 

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  // Navigate to BookInfo page with state
  const handleClick = (book) => {
    navigate("/book-info", { state: { book } });
  };

  return (
    <div className='p-[1rem]'>
      <div className='pt-[4rem]'>
        <h1 className='md:text-5xl text-3xl font-light mt-3 text-center  text-white shadow-md shadow-emerald-600 rounded-xl'>
          Your Search Results
        </h1>
        
        {/*Spinner if loading */}
        {loading ? (
          <div className='flex justify-center items-center h-screen'>
            <Spinner />
          </div>
        ) : (
          <div className='p-[3rem]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative rounded-md'>
            {books.length > 0 ? (
              books.map((book) => (
                <div
                  key={book.id}
                  className='shadow-[1px_2px_3.6px_3px] shadow-sky-500 rounded-xl h-[400px] overflow-hidden p-1.5 hover:scale-105 duration-500 ease-in-out cursor-pointer'
                  onClick={() => handleClick(book)}
                >
                  <img
                    src={
                      book.volumeInfo.imageLinks
                        ? book.volumeInfo.imageLinks.thumbnail
                        : "https://www.ourbookshelves.com/media/pic_folder/default_pic/default.png"
                    }
                    alt={book.volumeInfo.title}
                    className='w-full h-3/4 rounded-xl shadow-[0px_4px_8px]'
                  />
                  <h2 className='pt-1 text-yellow-300 font-extrabold text-1.5xl'>
                    {book.volumeInfo.title}
                  </h2>
                  <p className='pt-1 text-white'>
                    By{" "}
                    {book.volumeInfo.authors
                      ? book.volumeInfo.authors.join(", ")
                      : "Unknown author"}
                  </p>
                </div>
              ))
            ) : (
              <p className='text-center text-7xl text-white shadow-2xl shadow-emerald-600'>
                No results found
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookList;
