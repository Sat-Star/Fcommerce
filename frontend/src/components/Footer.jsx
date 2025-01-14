import React from 'react';
import NavBar from './Navbar';
import SocialIcons from './SocialIcons';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='max-padd-container bg-tertiary py-8'>
      <div className='flexCenter flex-col gap-y-4'>
        <Link to={'/'} className='flex items-center gap-x-2'>
          <img src={logo} alt="logoImg" height={31} width={31} />
          <span className='bold-24 hidden xs:flex text-white'>Fcommer</span>
        </Link>

        <div className='py-4'>
          <NavBar containerStyles={"flex gap-x-5 xl:gap-x-10 text-white medium-15 rounded-full px-2 py-1"} />
        </div>
        <SocialIcons/>
        <hr className='h-[1px] w-2/3 my-3' />
        <div className='text-white'>Copyright &copy; Fcommer | All Rights Reserved</div>
      </div>
    </footer>
  )
}

export default Footer