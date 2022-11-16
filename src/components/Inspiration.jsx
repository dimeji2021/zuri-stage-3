import React from 'react';
import { data } from '../data.js';
import NftCard from './NftCard.jsx';

const Inspiration = () => {
  const miniData = data.slice(0, 8);
  return (
    <div className='mt-5 flex flex-col items-center justify-center py-[2.5rem] tall:px-[3rem] '>
      <h2 className='mb-[2rem] text-xl font-bold md:text-3xl lg:text-[46px]'>
        Inspiration for your next adventure
      </h2>
      <div className='mt-2 grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {miniData.map((item) => (
          <div key={item.id}>
            <NftCard image={item.img} alt='Nfts' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inspiration;
