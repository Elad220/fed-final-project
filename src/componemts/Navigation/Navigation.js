import { Navbar, NavItem, NavList, NavLink } from "./styled";

const Navigation = () => {
  return (
    <Navbar>
      <NavList>
        <NavItem>
          <NavLink to="/">Form</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/expenses">Expenses</NavLink>
        </NavItem>
      </NavList>
    </Navbar>
  );
};

export default Navigation;
