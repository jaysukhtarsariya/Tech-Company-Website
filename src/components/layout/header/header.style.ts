import { useState } from 'react';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    height: ${({ open }) => (open ? '200px' : '70px')};
    overflow: hidden;
    transition: height 0.3s ease-in-out;
  }
`;

export const NavLogo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 1rem;
    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
`;

export const NavMenuItem = styled.li`
  margin-left: 1rem;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
      color: #ccc;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
