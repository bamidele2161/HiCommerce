import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PrimaryButton from "../../components/button";
import Navbar from "../../components/navbar";
import { products } from "../../config/data";
import { usePaystackPayment } from "react-paystack";
import numeral from "numeral";
import {
  BodyOverLay,
  Container,
  Image,
  ImageContainer,
  ImageRows,
  ProductAmount,
  ProductName,
  ProductParagraph,
  ProductPrice,
  ProductShortName,
  ProdutDetailsContainer,
  SmallImage,
} from "./style";
import store from "../../store/store";
import { setCartItems } from "../../store/slice";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const ProductPage = () => {
  const cartShow = useSelector(
    (store: any) => store.ProductDataReducer.showCart
  );

  const [items, setItems] = useState([]);
  const { productId } = useParams();
  let newDetail = products.filter((product) => product.productId === productId);

  const addToCart = (product: any) => {
    let container = [];
    container.push(product);
    store.dispatch(setCartItems(container));
    toast.success("item added successfully");
  };
  return (
    <>
      <Navbar />
      {newDetail.map((product) => (
        <Container key={product.productId}>
          <ImageContainer>
            <ImageRows>
              <SmallImage
                src={product.productImage}
                alt={product.productImage}
              />
              <SmallImage
                src={product.productImage}
                alt={product.productImage}
              />
              <SmallImage
                src={product.productImage}
                alt={product.productImage}
              />
            </ImageRows>
            <Image src={product.productImage} alt={product.productImage} />
          </ImageContainer>
          <ProdutDetailsContainer>
            <ProductName>{product.productName}</ProductName>
            <ProductShortName></ProductShortName>

            <ProductPrice>SIZE:</ProductPrice>

            <ProductPrice>COLOR:</ProductPrice>
            <ProductPrice>PRICE:</ProductPrice>
            <ProductAmount>${product.productPrice}.00</ProductAmount>
            <PrimaryButton
              buttonText="Add to Cart"
              onClick={() => addToCart(product)}
            />
            <ProductParagraph>
              Find stunning women's cocktail dresses and party dresses. Stand
              out in lace and metallic cocktail dresses and party dresses from
              all your favorite brands.
            </ProductParagraph>
          </ProdutDetailsContainer>
          {cartShow && <BodyOverLay></BodyOverLay>}
        </Container>
      ))}
    </>
  );
};

export default ProductPage;
