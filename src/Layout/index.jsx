import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className=' mt-[5rem] md:mt-[8rem] md:px-0 lg:mt-[10rem]'>
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
