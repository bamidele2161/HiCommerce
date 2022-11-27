import React from "react";
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
  const cartShow = useSelector(
    (store: any) => store.ProductDataReducer.showCart
  );
  const handleToggle = () => {
    dispatch(setShowCart());
  };

  console.log("testing toggle ", cartShow);
  const productDataContainer = useSelector(
    (store: any) => store.ProductDataReducer.cartItems
  );

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
          {productDataContainer && productDataContainer.length > 0 && (
            <LengthContainer>
              <Length>{productDataContainer.length}</Length>
            </LengthContainer>
          )}
        </CartIconContainer>
      </NavIcons>
      {cartShow && <CartContainer />}
    </Container>
  );
};

export default Navbar;
