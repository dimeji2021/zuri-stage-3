import React from 'react';
import FooterLogo from '../assets/Group.svg';
import Twitter from '../assets/twitter.png';
import Instagram from '../assets/instagram.png';
import Facebook from '../assets/facebook.png';
import CopyRight from '../assets/copyright.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='grid gap-10 bg-[#1D1D1E] p-5 text-white md:grid-cols-2 md:p-[4rem] lg:grid-cols-4 lg:flex-row '>
      <div className='flex flex-col gap-10'>
        <img src={FooterLogo} className='w-[233px]' alt='Metabnb Logo' />
        <div className='mt-10 flex flex-col gap-10'>
          <div className='flex gap-10'>
            <img src={Facebook} alt='facebook social' />
            <img src={Instagram} alt='instagram social' />
            <img src={Twitter} alt='twitter social' />
          </div>
          <div className='flex gap-2'>
            <img src={CopyRight} className='h-4 w-4' alt='copyright' />
            <p className='text-sm'>2022 Metabnb</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className='mb-6 font-bold'>Community</h3>
        <ul>
          <li className='my-2 text-sm'>
            <Link to='#'>NFT </Link>
          </li>
          <li className='my-2 text-sm'>
            <Link to='#'>Tokens </Link>
          </li>
          <li className='my-2 text-sm'>
            <Link to='#'>Landlords </Link>
          </li>
          <li className='my-2 text-sm'>
            <Link to='#'>Discord </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className='mb-6 font-bold'>Places</h3>
        <ul>
          <li className='my-2 text-sm'>
            <Link to='#'>Castle </Link>
          </li>
          <li className='my-2 text-sm'>
            <Link to='#'>Farms </Link>
          </li>
          <li className='my-2 text-sm'>
            <Link to='#'>Beach </Link>
          </li>
          <li className='my-2 text-sm'>
            <Link to='#'>Learn more </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className='mb-6 font-bold'>About us</h3>
        <ul>
          <li className='my-2 text-sm'>
            <Link to='#'>Road map </Link>
          </li>
          <li className='my-2 text-sm'>
            <Link to='#'>Creators </Link>
          </li>
          <li className='my-2 text-sm'>
            <Link to='#'>Career </Link>
          </li>
          <li className='my-2 text-sm'>
            <Link to='#'>Contact us </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
