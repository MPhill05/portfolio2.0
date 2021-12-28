import React, { useState } from 'react'
import { MenuToggle } from './menuToggle';
import MobileNavMenu from './mobileNavMenu';

import { HamburgerIcon, HamburgerMenu, MenuContainer } from './navbar.styles';

const menuVariants = {
  open: {
    transform: 'translateX(3%)'
  },
  closed: {
    transform: 'translateX(103%)'
  }
};

const menuTransition = {
  type: 'spring',
  duration: 1,
  stiffness: 33,
  delay: 0.1
};

const MobileNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HamburgerMenu className='md:hidden'>
      <HamburgerIcon>
        <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      </HamburgerIcon>
      <MenuContainer
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        transition={menuTransition}
      >
        <MobileNavMenu isOpen={isOpen} />
      </MenuContainer>
    </HamburgerMenu>
  )
}

export default MobileNav
