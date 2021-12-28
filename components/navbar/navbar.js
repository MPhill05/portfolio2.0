import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import './navbar.styles';
import {
  Nav,
  NavLogo,
  Wrapper
} from './navbar.styles';
import NavLink from './navLinks';
import MobileNav from './mobileNav';

const Navbar = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme('dark');
  }, []);

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav scrollNav={scrollNav}>
        <div className='max-w-6xl mx-auto px-4 py-5 md:py-5 z-50'>
          <Wrapper className='flex md:flex-row justify-between items-center'>
            <Link
              href='/'
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleOnClickHome}
            >
              <NavLogo onClick={toggleHome}>MP</NavLogo>
            </Link>
            <MobileNav />
            <NavLink />
          </Wrapper>
        </div>
      </Nav>
    </IconContext.Provider>
  )
}

export default Navbar;