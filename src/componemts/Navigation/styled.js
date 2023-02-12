/* Written by:
Elad Asaf - 208434597
Lidar Baruch - 207233545
Guy Ofir - 318597259
*/
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  position: sticky;
  top: 0;
  background-color: #333;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin-right: 1.5rem;

  &:last-child {
    margin-right: 0;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #647c90;
  }
`;
