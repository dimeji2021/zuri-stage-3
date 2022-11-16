import React from 'react';
import ImageA from '../assets/imageA.png';
import ImageB from '../assets/imageB.png';
import ImageC from '../assets/imageC.png';
import ImageD from '../assets/imageD.png';
import Mbtoken from '../assets/mb.png';
import Metamusk from '../assets/logo.svg';
import Opensea from '../assets/Frame.svg';

const Cta = () => {
  return (
    <main>
      <div className=' mx-5 mt-8 mb-6 flex flex-col justify-between pt-10 md:my-[4rem] md:mx-10 md:flex-row md:items-center md:pt-0 lg:mx-[4rem] '>
        <div className='flex flex-col gap-5 md:w-4/5 lg:w-1/2 lg:gap-[48px]'>
          <h1 className='text-[1.75rem] font-normal text-[#434343] lg:text-[46px] lg:leading-[3rem]'>
            Rent a <span className='font-bold text-[#A02279]'>Place</span> away
            from <span className='font-bold text-[#A02279]'>Home</span> in the{' '}
            <span className='font-bold text-[#A02279]'>Metaverse</span>
          </h1>
          <p className=' text-sm text-[#434343] md:text-lg lg:text-2xl'>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div>
            <input
              type='text'
              placeholder='Search for location'
              className='w-2/3 rounded-tl-lg rounded-bl-lg border-2 px-2 py-2 md:py-4 tall:w-1/2'
            />
            <button className='w-1/3 rounded-tr-lg rounded-br-lg border-2 border-[#A02279] bg-[#A02279] py-2 px-2 text-white md:py-4 lg:w-[10rem]'>
              Search
            </button>
          </div>
        </div>
        <div className='mt-5  pl-5 lg:mt-0 '>
          <div className=' grid grid-cols-2 grid-rows-5 justify-items-center gap-4'>
            <div className='row-span-2 row-start-2'>
              <img src={ImageA} alt='nfts' />
            </div>
            <div className='row-span-2 row-start-4'>
              <img src={ImageD} alt='nfts' />
            </div>
            <div className='row-span-2'>
              <img src={ImageC} alt='nfts' />
            </div>
            <div className='row-span-2'>
              <img src={ImageB} alt='nfts' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-evenly bg-[#A02279] p-2'>
        <img
          src={Mbtoken}
          className='w-[6rem] md:w-[150px] lg:w-[214.14px]'
          alt='nfts'
        />
        <img
          src={Metamusk}
          className='w-[6rem] md:w-[150px] lg:w-[214.14px]'
          alt='nfts'
        />
        <img
          src={Opensea}
          className='w-[6rem] md:w-[150px] lg:w-[214.14px]'
          alt='nfts'
        />
      </div>
    </main>
  );
};

export default Cta;
