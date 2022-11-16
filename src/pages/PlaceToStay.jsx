import React from 'react';
import { data } from '../data';
import NftCard from '../components/NftCard';
import Setting from '../assets/setting.png';
import DropDown from '../components/DropDown';
import { Link } from 'react-router-dom';

const PlaceToStay = () => {
  return (
    <div className='mx-5 mt-[7rem] md:m-5'>
      <div className='flex items-center justify-center text-[#434343] md:justify-start md:px-[3rem]'>
        <div className='mr-3 md:hidden'>
          <DropDown />
        </div>
        <div className=' hidden gap-5 md:grid md:grid-cols-4 lg:grid-cols-8'>
          <Link to='#'>Resturant</Link>
          <Link to='#'>Cottage</Link>
          <Link to='#'>Castle</Link>
          <Link to='#'>fantast city</Link>
          <Link to='#'>beach</Link>
          <Link to='#'>Carbins</Link>
          <Link to='#'>Off-grid</Link>
          <Link to='#'>Farm</Link>
        </div>
        <button className='flex w-[161px] justify-between rounded-lg border-2 border-[#B4B4B4] p-2 md:ml-[5rem] lg:ml-0'>
          Location
          <span>
            <img src={Setting} />
          </span>
        </button>
      </div>
      <div className='mt-2 grid gap-5 p-2 md:grid-cols-2 md:p-[3rem] lg:grid-cols-4 lg:gap-2 '>
        {data.map((item) => (
          <div key={item.id}>
            <NftCard image={item.img} id={item.id} alt='Nfts' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaceToStay;
