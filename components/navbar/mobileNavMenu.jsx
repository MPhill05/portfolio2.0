import Link from 'next/link'
import React from 'react'
import { NavLink, NavLinks, NavMenuContainer } from './navbar.styles'

const variants = {
  show: {
    transform: 'translateX(0)',
    opacity: 1
  },
  hide: {
    transform: 'translateX(5em)',
    opacity: 0
  }
}

const MobileNavMenu = ({ isOpen, toggleMenu }) => {
  return (
    <NavMenuContainer>
      <NavLink
        initial={false}
        animate={isOpen ? 'show' : 'hide'}
        variants={{
          show: {
            ...variants.show,
            transition: { delay: 0.3, duration: 0.2 },
          },
          hide: {
            ...variants.hide,
            transition: { delay: 0.05, duration: 0.05 },
          },
        }}
      >
        <NavLinks
          to='topHome'
          className='navItem'
          smooth={true}
          duration={500}
          exact='true'
          offset={-80}
          spy={true}
        >
          <p className='font-bold -ml-4 text-xl'>
            Home
          </p>
        </NavLinks>
      </NavLink>
      <NavLink
        initial={false}
        animate={isOpen ? 'show' : 'hide'}
        variants={{
          show: {
            ...variants.show,
            transition: { delay: 0.4, duration: 0.2 },
          },
          hide: {
            ...variants.hide,
            transition: { delay: 0.1, duration: 0.05 },
          },
        }}
      >
        <NavLinks
          to='about'
          className='navItem'
          smooth={true}
          duration={500}
          exact='true'
          offset={-80}
          spy={true}
        >
          <p className='font-bold -ml-4 text-xl'>
            About
          </p>
        </NavLinks>
      </NavLink>
      <NavLink
        initial={false}
        animate={isOpen ? 'show' : 'hide'}
        variants={{
          show: {
            ...variants.show,
            transition: { delay: 0.5, duration: 0.2 },
          },
          hide: {
            ...variants.hide,
            transition: { delay: 0.15, duration: 0.05 },
          },
        }}
      >
        <NavLinks
          to='projects'
          className='navItem'
          smooth={true}
          duration={500}
          exact='true'
          offset={-80}
          spy={true}
        >
          <p className='font-bold -ml-4 text-xl'>
            Projects
          </p>
        </NavLinks>
      </NavLink>
      <NavLink
        initial={false}
        animate={isOpen ? 'show' : 'hide'}
        variants={{
          show: {
            ...variants.show,
            transition: { delay: 0.6, duration: 0.2 },
          },
          hide: {
            ...variants.hide,
            transition: { delay: 0.2, duration: 0.05 },
          },
        }}
      >
        <NavLinks
          to='contact'
          className='navItem'
          smooth={true}
          duration={500}
          exact='true'
          offset={-80}
          spy={true}
        >
          <p className='font-bold -ml-4 text-xl'>
            Contact
          </p>
        </NavLinks>
      </NavLink>
      <NavLink
        initial={false}
        animate={isOpen ? 'show' : 'hide'}
        variants={{
          show: {
            ...variants.show,
            transition: { delay: 0.7, duration: 0.2 },
          },
          hide: {
            ...variants.hide,
            transition: { delay: 0.25, duration: 0.05 },
          },
        }}
      >
        <Link
          className='navItem'
          href='/blog'
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className='font-bold ml-0 text-xl'>
            Blog
          </p>
        </Link>
      </NavLink>
    </NavMenuContainer>
  )
}

export default MobileNavMenu
