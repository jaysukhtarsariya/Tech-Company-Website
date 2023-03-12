import React, { ReactNode, useState } from 'react'
import {MobileMenuIcon, Nav, NavLogo, NavMenu, NavMenuItem, NavToggle} from "./header.style"

interface Props {
  open?: ReactNode
}
const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Nav open={open}>
      <NavLogo href="#">My Website</NavLogo>
      <MobileMenuIcon onClick={handleOpen}>
        {open ? <span>&times;</span> : <span>&#9776;</span>}
      </MobileMenuIcon>
      <NavMenu open={open}>
        <NavMenuItem>
          <a href="#">Home</a>
        </NavMenuItem>
        <NavMenuItem>
          <a href="#">About</a>
        </NavMenuItem>
        <NavMenuItem>
          <a href="#">Contact</a>
        </NavMenuItem>
      </NavMenu>
    </Nav>
  );
};
export default Header
