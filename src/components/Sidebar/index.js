import React from "react";
import {
  SidebarContainer,
  SidebarRoute,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
  SideBtnWrap,
} from "./SidebarElements";
const Sidebar = ({ toogle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toogle}>
      <Icon onclick={toogle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toogle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toogle}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toogle}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={toogle}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
