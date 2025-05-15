import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: var(--background);
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const NavList = styled.ul`
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

export const NavItem = styled.li``;

export const NavLink = styled(Link)`
  color: var(--text);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary);
  }
`;
