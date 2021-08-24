import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  transition: 0.3s ease-in-out;
  top: 0;
  left: 0;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")}; */
  
  display: grid;
  align-items: center;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
  flex-direction: column;
  display: flex;
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style-type: none;
  transition: 0.02s ease-in-out;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    color: #01bf71;
    transition: 0.02s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  color: #010606;
  background: #01bf71;
  font-size: 16px;
  cursor: pointer;
  border: none;
  padding: 10px 64px;
  white-space: nowrap;
  outline: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const SidebarMenu = styled.ul`
  display: grid;
  margin-top: 100px;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 85px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
