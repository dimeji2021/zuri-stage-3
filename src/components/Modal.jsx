import React from 'react';
import X from '../assets/x.png';
import Meta from '../assets/meta.png';
import Wallet from '../assets/wallet.png';
import Open from '../assets/open.png';

export default function Modal({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <>
          <div
            className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'
            onClick={() => setShowModal(false)}
          >
            <div className='relative md:w-[600px] '>
              {/*content*/}
              <div className='relative flex w-full flex-col rounded-2xl border-0 bg-white p-2 shadow-lg outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between rounded-t border-b border-solid border-[#CFD8DC] p-5'>
                  <h3 className='text-xl font-bold'>Connect Wallet</h3>
                  <img
                    src={X}
                    onClick={() => setShowModal(false)}
                    alt='cancel'
                  />
                </div>
                {/*body*/}
                <div className='relative flex flex-col gap-3 p-6'>
                  <p className=''>Choose your preferred wallet:</p>
                  <button className='flex w-full items-center justify-between rounded-2xl border-2 py-3 px-5 hover:bg-[#F8F9FA]'>
                    <div className='flex items-center'>
                      <img src={Meta} className='mr-3' alt='metamusk' />
                      <p className='font-bold md:text-xl '>Metamask</p>
                    </div>
                    <img src={Open} alt='open' />
                  </button>
                  <button className='flex w-full items-center justify-between rounded-2xl border-2 py-3 px-5 hover:bg-[#F8F9FA]'>
                    <div className='flex items-center text-sm'>
                      <img src={Wallet} className='mr-3' alt='connect wallet' />
                      <p className='text-sm font-bold md:text-xl'>
                        WalletConnect
                      </p>
                    </div>
                    <img src={Open} alt='open' />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='fixed inset-0 z-40 bg-black opacity-25'></div>
        </>
      ) : null}
    </>
  );
}
