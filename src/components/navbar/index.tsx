import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  CartIconContainer,
  Container,
  DropIcon,
  Length,
  LengthContainer,
  NavIcons,
  NavLinks,
  NavLinkText,
  NavLogo,
} from "./styled";
import { ReactComponent as DollarIcon } from "../../images/$.svg";
import { ReactComponent as CartIcon } from "../../images/Vector.svg";
import { ReactComponent as LogoIcon } from "../../images/Group.svg";
import { ReactComponent as ArrowDownIcon } from "../../images/Drop.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setShowCart } from "../../store/slice";
import CartContainer from "../cart";

const Navbar = () => {
  const dispatch = useDispatch();
  const [itemContainer, setItemContainer] = useState(0);
  const cartShow = useSelector(
    (store: any) => store.ProductDataReducer.showCart
  );
  const handleToggle = () => {
    dispatch(setShowCart());
  };

  const localData = localStorage.getItem("cartItems");
  let newItemContainer = JSON.parse(localData || "[]");

  useEffect(() => {
    setItemContainer(newItemContainer.length);
  }, [newItemContainer]);

  const ActiveStyle = {
    textDecoration: "none",
    color: "#5ece7b",
    borderBottom: "3px solid #5ece7b",
    borderRadius: 0,
    padding: "10px 0px",
  };
  const Style = {
    textDecoration: "none",
    color: "#1D1F22",
    fontWeight: 400,
  };
  return (
    <Container>
      <NavLinks>
        <NavLink
          to=""
          style={({ isActive }) => (isActive ? ActiveStyle : Style)}
        >
          <NavLinkText>Women</NavLinkText>
        </NavLink>
        <NavLink to="" style={Style}>
          <NavLinkText>Men</NavLinkText>
        </NavLink>
        <NavLink to="" style={Style}>
          <NavLinkText>Kids</NavLinkText>
        </NavLink>
      </NavLinks>
      <NavLogo>
        <LogoIcon />
      </NavLogo>
      <NavIcons>
        <DropIcon>
          <DollarIcon />
          <ArrowDownIcon />
        </DropIcon>
        <CartIconContainer onClick={handleToggle}>
          <CartIcon />
          {itemContainer > 0 && (
            <LengthContainer>
              <Length>{itemContainer}</Length>
            </LengthContainer>
          )}
        </CartIconContainer>
      </NavIcons>
      {cartShow && <CartContainer />}
    </Container>
  );
};

export default Navbar;
