import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import PrimaryButton from "../../components/button";
import Navbar from "../../components/navbar";
import { products } from "../../config/data";
import { setShowCart } from "../../store/slice";
import store from "../../store/store";
import { usePaystackPayment } from "react-paystack";
import {
  Add,
  Body,
  BodyOverLay,
  BottomSection,
  ButtonWrapper,
  CartText,
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
  ProductLeftDetail,
  ProductUpdate,
  Symbol,
  TitleText,
  TotalPrice,
  TotalText,
  TotalWrapper,
  TText,
} from "./style";

type paymentProp = {
  reference?: string;
  email?: string;
  amount?: number;
  publicKey?: string;
};

const ViewBag: React.FC<paymentProp> = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [tax, setTax] = useState(42);
  const cartShow = useSelector(
    (store: any) => store.ProductDataReducer.showCart
  );
  const handleToggle = () => {
    dispatch(setShowCart());
  };

  const productDataContainer = useSelector(
    (store: any) => store.ProductDataReducer.cartItems
  );
  useEffect(() => {
    setId(productDataContainer[0].productId);
    setPrice(productDataContainer[0].productPrice);
  }, [productDataContainer]);

  const paystackAmount = (price * quantity + tax) * 100;
  const amount = price * quantity + tax;
  const config = {
    reference: new Date().getTime().toString(),
    email: "akinyemibamidele2@gmail.com.com",
    amount: paystackAmount,
    publicKey: "pk_test_deae8229cc3f93d0a28c8303e54c325bc04f7a22",
  };

  const onSuccess = () => {
    console.log("reference");
  };

  const onClose = () => {
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

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
  return (
    <>
      <Navbar />
      <Body>
        <CartText>cart</CartText>
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
                          <ProductLeftDetail>
                            <ProductUpdate>
                              <Add onClick={add}>
                                <Symbol>+</Symbol>
                              </Add>
                              {quantity}
                              <Minus onClick={minus}>
                                <Symbol>-</Symbol>
                              </Minus>
                            </ProductUpdate>

                            <Image src={product.productImage} alt="testing" />
                          </ProductLeftDetail>
                        </ProductItemContainer>
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
        <BottomSection>
          <TotalWrapper>
            <TotalText>Tax 21%</TotalText>
            <TotalPrice>${tax}.00</TotalPrice>
          </TotalWrapper>
          <TotalWrapper>
            <TText>Quantity</TText>
            <TotalPrice>{quantity}</TotalPrice>
          </TotalWrapper>
          <TotalWrapper>
            <TText>Total</TText>
            <TotalPrice>${amount}.00</TotalPrice>
          </TotalWrapper>
          <ButtonWrapper>
            <PrimaryButton
              buttonText="ORDER"
              onClick={() => initializePayment(onSuccess, onClose)}
            />
          </ButtonWrapper>
        </BottomSection>
        {cartShow && <BodyOverLay></BodyOverLay>}
      </Body>
    </>
  );
};

export default ViewBag;
