import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { products } from "../../config/data";
import { setShowCart } from "../../store/slice";
import PrimaryButton from "../button";
import {
  Add,
  ButtonWrapper,
  Container,
  DetailsContainer,
  EmptyContainer,
  EmptyMsg,
  Image,
  Minus,
  PriceText,
  ProductContainer,
  ProductItemContainer,
  ProductItemDetails,
  ProductUpdate,
  Symbol,
  TitleText,
  TotalPrice,
  TotalText,
  TotalWrapper,
} from "./style";

const CartContainer = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const cartShow = useSelector(
    (store: any) => store.ProductDataReducer.showCart
  );
  const handleToggle = () => {
    dispatch(setShowCart());
  };

  const navigate = useNavigate();
  const productDataContainer = useSelector(
    (store: any) => store.ProductDataReducer.cartItems
  );
  useEffect(() => {
    setId(productDataContainer[0].productId);
    setPrice(productDataContainer[0].productPrice);
  }, [productDataContainer]);

  const viewBag = () => {
    navigate("/view-bag");
  };
  const add = () => {
    setQuantity(quantity + 1);
  };
  const minus = () => {
    if (quantity == 1) {
      setQuantity(quantity);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const total = quantity * price;
  return (
    <Container>
      <DetailsContainer>
        {productDataContainer && productDataContainer.length > 0 ? (
          <>
            {products
              .filter((product) => product.productId === id)
              .map((product: any) => {
                return (
                  <ProductContainer>
                    <p>My bags: {productDataContainer.length} items</p>
                    {/* <p>{product.productName}</p> */}
                    <ProductItemContainer>
                      <ProductItemDetails>
                        <p>{product.productName}</p>
                        <PriceText>${product.productPrice}.00</PriceText>
                        <TitleText>Size:</TitleText>
                        <TitleText>Color:</TitleText>
                      </ProductItemDetails>
                      <ProductUpdate>
                        <Add onClick={add}>
                          <Symbol>+</Symbol>
                        </Add>
                        {quantity}
                        <Minus onClick={minus}>
                          <Symbol>-</Symbol>
                        </Minus>
                      </ProductUpdate>
                      {/* <ProductImage> */}
                      <Image src={product.productImage} alt="testing" />
                      {/* </ProductImage> */}
                    </ProductItemContainer>
                    <TotalWrapper>
                      <TotalText>Total</TotalText>
                      <TotalPrice>${total}.00</TotalPrice>
                    </TotalWrapper>
                    <ButtonWrapper>
                      <PrimaryButton buttonText="VIEW BAG" onClick={viewBag} />
                      <PrimaryButton buttonText="CHECK OUT" onClick={viewBag} />
                    </ButtonWrapper>
                  </ProductContainer>
                );
              })}
          </>
        ) : (
          <EmptyContainer>
            <EmptyMsg>Your Cart is Empty</EmptyMsg>
          </EmptyContainer>
        )}
      </DetailsContainer>
    </Container>
  );
};

export default CartContainer;
