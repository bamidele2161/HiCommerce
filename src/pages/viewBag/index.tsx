import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import PrimaryButton from "../../components/button";
import Navbar from "../../components/navbar";
import { products } from "../../config/data";
import { setShowCart } from "../../store/slice";
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

type productProp = {
  productId?: string;
  productName?: string;
  productPrice?: number;
  productImage?: string;
  available?: boolean;
};
const ViewBag: React.FC<paymentProp> = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [tax, setTax] = useState(42);
  const [itemContainer, setItemContainer] = useState(0);
  const [productList, setProductList] = useState<productProp[]>();
  const cartShow = useSelector(
    (store: any) => store.ProductDataReducer.showCart
  );
  const handleToggle = () => {
    dispatch(setShowCart());
  };

  const productDataContainer = useSelector(
    (store: any) => store.ProductDataReducer.cartItems
  );
  useEffect(() => {}, [productDataContainer]);

  const paystackAmount = (200 * quantity + tax) * 100;
  // const amount = price * quantity + tax;
  const config = {
    reference: new Date().getTime().toString(),
    email: "akinyemibamidele2@gmail.com.com",
    amount: paystackAmount,
    publicKey: "pk_test_deae8229cc3f93d0a28c8303e54c325bc04f7a22",
  };

  const onSuccess = () => {
    console.log("reference");
    localStorage.clear();
  };

  const onClose = () => {
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  useEffect(() => {
    const localData = localStorage.getItem("cartItems");
    let newItemContainer = JSON.parse(localData || "[]");
    setItemContainer(newItemContainer.length);
  }, []);

  const getDataFromDB = async () => {
    const localData = localStorage.getItem("cartItems");
    let newItemContainer = JSON.parse(localData || "[]");

    let productData: productProp[] = []; // initialize an empty array

    if (newItemContainer) {
      products.forEach((data: any) => {
        // loop through the object
        if (newItemContainer.includes(data.productId)) {
          //if the object includes the Id

          productData.push(data); //push the data inside the empty array
          return;
        }
      });
      setProductList(productData);
      // getTotal(productData);
    } else {
      // setProduct(false);
      // getTotal(false);
    }
  };

  useEffect(() => {
    getDataFromDB();
  }, []);

  // const add = () => {
  //   setQuantity(quantity + 1);
  // };
  // const minus = () => {
  //   if (quantity == 1) {
  //     setQuantity(quantity);
  //   } else {
  //     setQuantity(quantity - 1);
  //   }
  // };
  return (
    <>
      <Navbar />
      <Body>
        <CartText>cart</CartText>
        <Container>
          <DetailsContainer>
            {itemContainer > 0 ? (
              <>
                {productList?.map((product: any) => {
                  return (
                    <ProductContainer>
                      <p>My bags: {itemContainer} items</p>
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
                            <Add>
                              <Symbol>+</Symbol>
                            </Add>
                            {quantity}
                            <Minus>
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
        {itemContainer > 0 && (
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
              <TotalPrice>$242.00</TotalPrice>
            </TotalWrapper>
            <ButtonWrapper>
              <PrimaryButton
                buttonText="ORDER"
                onClick={() => initializePayment(onSuccess, onClose)}
              />
            </ButtonWrapper>
          </BottomSection>
        )}
        {cartShow && <BodyOverLay></BodyOverLay>}
      </Body>
    </>
  );
};

export default ViewBag;
