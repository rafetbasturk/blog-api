import { useState } from 'react';
import Logo from './Logo';
import Wrapper from '../assets/wrappers/Header';
import Navbar from './Navbar';
import MenuIcons from './MenuIcons';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <Wrapper>
      <Logo />
      <MenuIcons isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </Wrapper>
  );
};

export default Header;