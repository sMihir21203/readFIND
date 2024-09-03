import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3} from "react-icons/hi";
import { AiOutlineClose} from "react-icons/ai";

const Header = () => {
  const [menu, setMenu] = React.useState(false);

  const menuBtn = () => setMenu(!menu);

  return (
    <header className='fixed z-10 top-0 right-0 left-0 shadow-md shadow-slate-950 bg-slate-900'>
      <nav className='w-full h-24 flex justify-between px-4 items-center'>
        <div className='transition-all duration-500 hover:scale-105 rounded-sm text-5xl md:text-6xl shadow-[1px_2px_3.6px_3px] shadow-[#205295]  hover:text-yellow-400  cursor-pointer text-[#256D85]'>
          <Link
            to='/'
          >
            Read<span className='font-extrabold text-yellow-300'>FIND</span>
          </Link>
        </div>
        <div className='flex items-center'>
          {/*desktopView*/}
          <button
                type='button'
                onClick={menuBtn}
                className='text-5xl text-[#256D85] md:hidden'
              >
                {menu ? <AiOutlineClose /> : <HiOutlineMenuAlt3 />}
              </button>
          <div className='hidden md:flex text-white mr-28 gap-6 text-2xl font-semibold'>
            <Link to='/' className='hover:font-extrabold'>
              Home
            </Link>
          </div>
          {menu && (
            <div className='fixed inset-0 bg-slate-900 bg-opacity-90 flex flex-col items-center justify-center md:hidden z-50'>
              <button
                type='button'
                onClick={menuBtn}
                className='absolute top-7 right-4 text-5xl text-[#256D85]'
              >
                <AiOutlineClose />
              </button>
              <ul className='text-[#256D85] text-2xl font-semibold py-4'>
                  <Link
                    to='/'
                    className='hover:font-extrabold'
                    onClick={() => setMenu(false)}
                  >
                    Home
                  </Link>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
