import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0px 100px;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0px;
`;

export const NavIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 20px 0px;
`;
export const DropIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;
export const LengthContainer = styled.div`
  position: absolute;
  left: 15px;
  bottom: 12px;
  background-color: black;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  height: 18px;
  display: flex;
  width: 18px;
  padding: 0;
`;
export const Length = styled.p`
  font-size: 10px;
  color: white;
  font-weight: 600;
`;
export const NavLinkText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  text-transform: uppercase;
  text-decoration: none;
`;
