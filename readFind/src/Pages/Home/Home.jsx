import React from "react";
import { SearchForm } from "../../Components/CompsIndex";
import {FaRegCommentDots,FaBookOpen, FaRedo} from 'react-icons/fa'

const Home = () => {
  return (
    <>
      <div className='p-[5rem]'>
        <div className='md:pt-[12rem] pt-[7rem] space-y-5'>
              <div className='gap-5 font-extrabold text-white transition-all duration-500 grid sm:text-clip md:flex items-center justify-center   text-center text-7xl '>
                <h2 className='flex gap-1 hover:scale-110 duration-500 hover:text-yellow-500 ease-in-out'>
                  Read<FaBookOpen size={35} />
                </h2>
                <h2 className='flex gap-1 hover:scale-110 duration-500 hover:text-yellow-500 ease-in-out'>
                  Dream <FaRegCommentDots size={35}/>
                </h2>
                <h2 className='flex gap-1 hover:scale-110 duration-500 hover:text-yellow-500 ease-in-out'>
                  Repeat <FaRedo size={35}/>
                </h2>
              </div>
              <SearchForm />
            </div>
          </div>
    </>
  );
};

export default Home;
