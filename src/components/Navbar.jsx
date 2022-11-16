import React, { useState } from 'react';
import Logo from '../assets/Group.png';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Modal from './Modal';

const Navbar = () => {
  const [nav, Setnav] = useState(false);
  const handleClick = () => Setnav(!nav);
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className='fixed top-0 z-50 w-full bg-white p-3 '>
      <div className='flex items-center justify-between md:hidden'>
        <div className=' w-2/4'>
          <img className='m-2 h-5 ' src={Logo} alt='logo' />
        </div>
        <button
          className='m-2 rounded-md bg-[#A02279] py-2 px-4 text-xs text-white'
          onClick={() => setShowModal(true)}
        >
          Connect Wallet
        </button>

        <div className='z-10' onClick={handleClick}>
          {!nav ? <FaBars fontSize={25} /> : <FaTimes fontSize={25} />}
        </div>
        <div
          className={
            !nav
              ? 'hidden'
              : ' absolute top-0 right-0 flex h-screen w-3/5 flex-col items-center justify-center gap-6 bg-white'
          }
        >
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? 'w-full border-b-2 border-solid border-[#CFD8DC] p-5 text-[#A02279]'
                : 'w-full border-b-2 border-solid border-[#CFD8DC] p-5 text-center hover:text-[#A02279]'
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/placeToStay'
            className={({ isActive }) =>
              isActive
                ? 'w-full border-b-2 border-solid border-[#CFD8DC] p-5 text-[#A02279]'
                : 'w-full border-b-2 border-solid border-[#CFD8DC] p-5 text-center hover:text-[#A02279]'
            }
          >
            Place to stay
          </NavLink>
          <NavLink
            to=''
            className='w-full border-b-2 border-solid border-[#CFD8DC] p-5 text-center hover:text-[#A02279]'
          >
            NFTs
          </NavLink>
          <NavLink
            to=''
            className='w-full border-b-2 border-solid border-[#CFD8DC] p-5 text-center hover:text-[#A02279]'
          >
            Community
          </NavLink>
        </div>
      </div>

      <div className=' mx-5 hidden items-center justify-between py-5 md:flex lg:px-10'>
        <div>
          <img src={Logo} alt='logo' className='md:w-[180px] lg:w-[200px]' />
        </div>
        <div className='flex text-[#434343] md:gap-5 md:text-sm lg:gap-8 lg:text-xl '>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'text-[#A02279]' : 'hover:text-[#A02279]'
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/placeToStay'
            className={({ isActive }) =>
              isActive ? 'text-[#A02279]' : 'hover:text-[#A02279]'
            }
          >
            Place to stay
          </NavLink>
          <NavLink to='/#'>NFTs</NavLink>
          <NavLink to='/#'>Community</NavLink>
        </div>
        <div>
          <button
            className='rounded-[10px] bg-[#A02279] py-2 px-4 text-base text-white'
            onClick={() => setShowModal(true)}
          >
            Connect Wallet
          </button>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Navbar;
