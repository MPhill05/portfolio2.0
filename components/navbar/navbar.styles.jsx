import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  height: 80px;
  ${'' /* margin-top: -280px; */}
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;  
  display: flex;
  padding: 1.25rem /* 20px */;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: auto;
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const About = styled.li`
  cursor: pointer;
  margin: 0 1em;
`;

export const Projects = styled.li`
  cursor: pointer;
  margin: 0 1em;
`;

export const Contact = styled.li`
  cursor: pointer;
  margin: 0 1em;
`;

export const Blog = styled.li`
  cursor: pointer;
  margin: 0 1em;
`;