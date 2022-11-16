import React from 'react';
import ThreeImages from '../assets/ThreeImages.png';

const Nfts = () => {
  return (
    <div className='mt-5 flex h-[40rem] flex-col bg-[#A02279] p-2 md:flex-row md:justify-center md:gap-[2rem] md:p-8 lg:h-[774px] lg:items-center lg:p-[5rem]'>
      <div className='mb-10 flex flex-col gap-7 p-5 text-center text-white md:mb-0 md:w-2/5 md:justify-center md:text-left lg:justify-between'>
        <h2 className='text-3xl font-bold md:text-2xl lg:text-5xl'>
          Metabnb NFTs
        </h2>
        <p className='text-sm leading-[2rem] md:text-xs lg:text-base lg:leading-[2rem]'>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button className=' w-full rounded-lg bg-white p-4 text-base text-[#A02279] md:w-[156px]'>
          Learn more
        </button>
      </div>
      <div className=' w-4/5 self-center md:mx-[2rem] md:w-3/5'>
        <div className=''>
          <img src={ThreeImages} alt='Nfts' />
        </div>
      </div>
    </div>
  );
};

export default Nfts;
