// BookInfo.js
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {Spinner} from "../CompsIndex"

const BookInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const book = location.state?.book;
  
 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
     
      const timer = setTimeout(() => setLoading(false), 200); 
  
      return () => clearTimeout(timer);
    }, []);

  //book details
  const bookImg = book.volumeInfo.imageLinks
    ? book.volumeInfo.imageLinks.thumbnail
    : "https://www.ourbookshelves.com/media/pic_folder/default_pic/default.png"; 
  
  const title = book.volumeInfo.title ? book.volumeInfo.title : "title";

  const author = book.volumeInfo.authors
      ? book.volumeInfo.authors
      : "Unknown Author";

  const publishDate = book.volumeInfo.publishedDate
    ? book.volumeInfo.publishedDate
    : "Publish Date Not Available";

  const price = book.saleInfo.listPrice
    ? book.saleInfo.listPrice.amount
    : "not available";

  const about = book.volumeInfo.description
    ? book.volumeInfo.description
    : "description not available";

  const buy = book.saleInfo.buyLink
    ? book.saleInfo.buyLink
    : "Book Not Avaialble";

  // readMore btn
  const [more, setMore] = useState(false);
  const maxWord = 1000;
  const readMore = about.length > maxWord;
  const dots = about.slice(0, maxWord) + ".....";

  // Go back to the previous page
  const close = () => {
    navigate(-1);
  };

  if (!book) return null;

  return (
    <div className='p-[2rem]'>
      {loading? (<div className='flex justify-center items-center h-screen'>
            <Spinner />
          </div>) : (<div className='pt-[6rem] md:flex'>
        <img
          src={bookImg}
          alt={title}
          className='md:h-[550px] h-[300px] shadow-[1px_2px_3.6px_5px] shadow-sky-500 rounded-xl'
        />
        <div className='grid md:pl-12 text-white space-y-4 md:mt-0 mt-[1rem] '>
          <p className='text-yellow-500 text-5xl font-extrabold underline '>
            {title}
          </p>
          <div className='text-[1.3rem]'>
            <p>
              <span className='font-bold'>Author : </span>
              {author}
            </p>
            <p>
              <span className='font-bold'>Published_On : </span>
              {publishDate}
            </p>
            <p>
              <span className='font-bold'>Price : </span>&#8377;{price}
            </p>
          </div>
          <p className='text-lg'>
            <span className='font-bold text-2xl'>
              About This eBook &#8669; <br />
            </span>
            {more ? about : readMore ? dots : about}
            {readMore && (
              <button
                className='text-blue-500 ml-2'
                onClick={() => setMore(!more)}
              >
                {more ? "read less" : "read more"}
              </button>
            )}
          </p>
          <div className='flex space-x-3  p-2 justify-center'>
            <button
              onClick={close}
              className=' p-3 font-bold text-2xl rounded-xl shadow-sm shadow-emerald-500 hover:scale-105 duration-300'
            >
              Close
            </button>
            {price !== "not available" && buy && (
              <button className="p-2 md:p-3 font-bold text-lg md:text-2xl rounded-xl shadow-sm shadow-emerald-500 hover:scale-105 duration-300">
                <a href={buy} target="_blank">
                  Buy
                </a>
              </button>
            )}
          </div>
        </div>
      </div>) }
    </div>
  );
};

export default BookInfo;
