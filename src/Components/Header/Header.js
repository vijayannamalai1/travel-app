import React from 'react';
import HeaderContent from '../HeaderContent/HeaderContent';
import PrimaryNavigation from '../PrimaryNavigation/PrimaryNavigation';
import './Header.css'

const Header = () => {
  return (
    <header className='header col-md-10 mx-auto'>
      <HeaderContent />
      <PrimaryNavigation />
    </header>
  );
};

export default Header;
