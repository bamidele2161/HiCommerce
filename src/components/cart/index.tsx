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

type productProp = {
  productId?: string;
  productName?: string;
  productPrice?: number;
  productImage?: string;
  available?: boolean;
};

type productPrice = {
  productPrice?: number;
};
const CartContainer: React.FC<productProp> = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [price, setPrice] = useState<productPrice[]>();
  const [total, setTotal] = useState();
  const [quantity, setQuantity] = useState(1);
  const [itemContainer, setItemContainer] = useState(0);
  const [productList, setProductList] = useState<productProp[]>();

  const cartShow = useSelector(
    (store: any) => store.ProductDataReducer.showCart
  );

  const navigate = useNavigate();
  const productDataContainer = useSelector(
    (store: any) => store.ProductDataReducer.cartItems
  );
  useEffect(() => {
    // setId(productList.productId);
    // setPrice(productList.productPrice);
  }, [productDataContainer]);

  const viewBag = () => {
    navigate("/view-bag");
  };
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

  useEffect(() => {
    const localData = localStorage.getItem("cartItems");
    let newItemContainer = JSON.parse(localData || "[]");
    setItemContainer(newItemContainer.length);
  }, []);

  const getDataFromDB = async () => {
    const localData = localStorage.getItem("cartItems");
    let newItemContainer = JSON.parse(localData || "[]");

    let productData: productProp[] = []; // initialize an empty array
    let productPrice: any[] = [];
    console.log(typeof productPrice);

    if (newItemContainer) {
      products.forEach((data: any) => {
        // loop through the object
        if (newItemContainer.includes(data.productId)) {
          //if the object includes the Id
          productData.push(data); //push the data inside the empty array
          // productPrice.push({ productPrice: 4647 });

          return;
        }
      });
      console.log(typeof productPrice);
      setProductList(productData);
      setPrice(productPrice);

      // getTotal(productData);
    } else {
      // setProduct(false);
      // getTotal(false);
    }
  };

  // console.log("price", typeof price);
  // const sum = () => {
  //   let sum = 0;
  //   for (let i = 0; i < price.length; i++) {
  //     sum = sum + price[i];
  //   }
  //   return sum;
  // };
  useEffect(() => {
    getDataFromDB();
    let sum = price?.reduce((a: any, b: any) => {
      return a + b;
    });
    console.log("sum", sum);
  }, []);

  // const total = quantity * price;
  return (
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
                    <ProductUpdate>
                      <Add>
                        <Symbol>+</Symbol>
                      </Add>
                      {quantity}
                      <Minus>
                        <Symbol>-</Symbol>
                      </Minus>
                    </ProductUpdate>
                    {/* <ProductImage> */}
                    <Image src={product.productImage} alt="testing" />
                    {/* </ProductImage> */}
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
        {itemContainer > 0 && (
          <>
            <TotalWrapper>
              <TotalText>Total</TotalText>
              <TotalPrice>$200.00</TotalPrice>
            </TotalWrapper>
            <ButtonWrapper>
              <PrimaryButton buttonText="VIEW BAG" onClick={viewBag} />
              <PrimaryButton buttonText="CHECK OUT" onClick={viewBag} />
            </ButtonWrapper>
          </>
        )}
      </DetailsContainer>
    </Container>
  );
};

export default CartContainer;
