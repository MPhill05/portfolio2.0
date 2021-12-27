import styled from 'styled-components';
// import { Link as LinkScroll } from 'react-scroll';

// export const Nav = styled.div`
//   background: ${({ scrollNav }) => (scrollNav ? '#111827' : 'transparent')};
//   height: 120px;
//   margin-top: -280px;
//   align-items: center;
//   font-size: 1rem;
//   position: sticky;
//   top: 0;
//   z-index: 10;
//   transition: 0.5s all ease;
// `;

// export const Wrapper = styled.div`
//   width: 100%;
//   max-width: 1100px;  
//   display: flex;
//   padding: 1.25rem /* 20px */;

//   .ghIcon,
//   .liIcon,
//   .twIcon {
//     -webkit-transition: all 1s ease-out;
//     -moz-transition: all 1s ease-out;
//     -o-transition: all 1s ease-out;
//     -ms-transition: all 1s ease-out;
//     transition: all 1s ease-out;

//     &:hover {
//       transition: 0.5s;
//       transition-delay: 0.2s;
//       transform: scale(1.3);
//     }
//   }

//   .ghIcon {
//     &:hover {
//       color: #AD5C51;
//     }
//   }

//   .liIcon {
//     &:hover {
//       color: #2867B2;
//     }
//   }

//   .twIcon {
//     &:hover {
//       transition: 0.5s;
//       transition-delay: 0.2s;
//       color: #1DA1F2;
//     }
//   }
// `;

// export const NavLogo = styled.p`
//   font-weight: bold;
//   font-size: 1.3em;
//   cursor: pointer;

//   -webkit-transition: all 1s ease-out;
//   -moz-transition: all 1s ease-out;
//   -o-transition: all 1s ease-out;
//   -ms-transition: all 1s ease-out;
//   transition: all 1s ease-out;

//   &:hover {
//     color: #00ff00;
//   }

//   ${'' /* @media screen and (max-width: 743px) {
//     font-size: 1em;
//   } */}
// `;

// export const NavContainer = styled.div`
//   display: flex;
//   align-items: flex-start;
//   margin: auto;
// `;

// export const NavItems = styled.ul`
//   display: flex;
//   flex-direction: row;

//   a {
//     cursor: pointer;
//     margin: 0 1em;
//   }

//   .navItem {
//     -webkit-transition: all 0.2s ease-out;
//     -moz-transition: all 0.2s ease-out;
//     -o-transition: all 0.2s ease-out;
//     -ms-transition: all 0.2s ease-out;
//     transition: all 0.2s ease-out;
//     transition-delay: 0.3s;

//     &:hover {
//       transform: scale(1.1);
//     }
//   }
// `;

// export const Blog = styled.li`
//   cursor: pointer;
//   margin: 0 1em;
// `;

// export const NavLinks = styled(LinkScroll)`
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;

//   &.active {
//     border-bottom: 3px solid #00ff00;
//     color: #fff;
//   }

//   @media screen and (max-width: 767px) {
//     padding: 0;
//   }
// `;

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shawdow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
`;

const RightSection = styled.div`
  display: flex;
`