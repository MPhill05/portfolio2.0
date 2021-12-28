import React from 'react'
import { NavLink, NavMenuContainer } from './navbar.styles'

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

const MobileNavMenu = ({ isOpen }) => {
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
        Home
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
        Projects
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
        Contact
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
        Blog
      </NavLink>
    </NavMenuContainer>
  )
}

export default MobileNavMenu
