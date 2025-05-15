import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #ffffff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavList = styled.ul`
  max-width: 1200px;
  margin: 0 auto;
  list-style: none;
  display: flex;
  gap: 2rem;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1rem;
  }
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  color: #213547;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #646cff;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/experience">Experience</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
