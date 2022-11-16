import React from 'react';
import Star from '../assets/star.png';

const NftCard = ({ image, id }) => {
  return (
    <div
      key={id}
      className='flex flex-col rounded-2xl border-2 border-[#D7D7D7] p-5 md:justify-evenly lg:w-auto lg:gap-2 lg:px-[.65rem]'
    >
      <div className='relative self-center '>
        <img
          src={image}
          className='w-[18rem] rounded-2xl object-cover lg:h-[249px] lg:w-[236px]'
          alt='Nfts'
        />
        <svg
          className=' absolute top-3 right-5'
          width='20'
          height='18'
          viewBox='0 0 20 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.59964 2.62953L10 3.16466L10.4004 2.62953C11.3204 1.39974 12.7949 0.600006 14.44 0.600006C17.2315 0.600006 19.5 2.87381 19.5 5.69001C19.5 6.82563 19.3189 7.87375 19.0043 8.84609L19.0032 8.84935C18.249 11.2361 16.7035 13.1596 15.0354 14.5933C13.365 16.0289 11.6004 16.9483 10.4589 17.3367L10.4589 17.3366L10.4536 17.3385C10.3537 17.3737 10.1893 17.4 10 17.4C9.81075 17.4 9.64625 17.3737 9.54641 17.3385L9.54642 17.3385L9.54106 17.3367C8.3996 16.9483 6.635 16.0289 4.96465 14.5933C3.29649 13.1596 1.75096 11.2361 0.996763 8.84935L0.996774 8.84935L0.995722 8.8461C0.681141 7.87375 0.5 6.82563 0.5 5.69001C0.5 2.87381 2.76848 0.600006 5.56 0.600006C7.2051 0.600006 8.67958 1.39974 9.59964 2.62953Z'
            fill='#D7D7D7'
            stroke='url(#paint0_linear_9333_349)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_9333_349'
              x1='10'
              y1='17.9'
              x2='10'
              y2='0.100006'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#1D0E3D' />
              <stop offset='1' stopColor='#0F051D' />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className='mt-2 flex flex-col gap-2 font-normal text-[#434343] '>
        <div className='flex justify-between text-xs'>
          <p>Desert king</p>
          <p className=' font-bold'>1MBT per night</p>
        </div>
        <div className='flex justify-between gap-4 text-xs '>
          <p>2345km away</p>
          <p>available for 2weeks stay</p>
        </div>
        <div className='flex gap-2'>
          <img src={Star} className='h-3 w-3' alt='ratings' />
          <img src={Star} className='h-3 w-3' alt='ratings' />
          <img src={Star} className='h-3 w-3' alt='ratings' />
          <img src={Star} className='h-3 w-3' alt='ratings' />
          <img src={Star} className='h-3 w-3' alt='ratings' />
        </div>
      </div>
    </div>
  );
};

export default NftCard;
