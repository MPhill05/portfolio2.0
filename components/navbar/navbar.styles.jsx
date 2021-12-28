import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { motion } from 'framer-motion';

export const Nav = styled.div`
  background: ${({ scrollNav }) => (scrollNav ? '#111827' : 'transparent')};
  height: 120px;
  margin-top: -280px;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.5s all ease;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;  
  display: flex;
  padding: 1.25rem /* 20px */;

  .ghIcon,
  .liIcon,
  .twIcon {
    -webkit-transition: all 1s ease-out;
    -moz-transition: all 1s ease-out;
    -o-transition: all 1s ease-out;
    -ms-transition: all 1s ease-out;
    transition: all 1s ease-out;

    &:hover {
      transition: 0.5s;
      transition-delay: 0.2s;
      transform: scale(1.3);
    }
  }

  .ghIcon {
    &:hover {
      color: #AD5C51;
    }
  }

  .liIcon {
    &:hover {
      color: #2867B2;
    }
  }

  .twIcon {
    &:hover {
      transition: 0.5s;
      transition-delay: 0.2s;
      color: #1DA1F2;
    }
  }
`;

export const NavLogo = styled.p`
  font-weight: bold;
  font-size: 1.3em;
  cursor: pointer;

  -webkit-transition: all 1s ease-out;
  -moz-transition: all 1s ease-out;
  -o-transition: all 1s ease-out;
  -ms-transition: all 1s ease-out;
  transition: all 1s ease-out;

  &:hover {
    color: #00ff00;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: auto;
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
  
  a {
    cursor: pointer;
    margin: 0 1em;
  }

  .navItem {
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    -o-transition: all 0.2s ease-out;
    -ms-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
    transition-delay: 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Blog = styled.li`
  cursor: pointer;
  margin: 0 1em;
`;

export const NavLinks = styled(LinkScroll)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #00ff00;
    color: #fff;
  }
`;

export const bar = styled.span`
  display: block;
  width: 35px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #222222;
`;

export const HamburgerMenu = styled.div`
  display: flex;
  
`;

export const HamburgerIcon = styled.div`
  color: ${({ reverseColor }) => reverseColor ? '#000' : '#fff'};
  cursor: pointer;
  z-index: 99;
  transition: all 250ms ease-in-out;
`;

export const MenuContainer = styled(motion.div)`
  min-width: 300px;
  width: 100%;
  max-width: 90%;
  height: 100%;
  background-color: #111827;
  box-shadow: -2px 0 2px rgba(0, 255, 0, 0.3);
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(4em);
  user-select: none;
  padding: 1em 2.5em;
`;

export const NavMenuContainer = styled.div`
  width: 100%
  display: flex;
  flex-direction: column;
`;

export const NavList = styled.ul`
  padding: 0 0.8em;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NavLink = styled(motion.li)`
  font-weight: 600;
  font-size: 18px;
  color: #fff;
  height: 35px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
  }

  &:hover {
    color: #84E421;
  }
`;