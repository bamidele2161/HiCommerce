import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

type productPageProp = {
  productId?: string;
  productName?: string;
  productPrice?: number;
  productImage?: string;
  available?: boolean;
};

const ProductPage: React.FC<productPageProp> = () => {
  const cartShow = useSelector(
    (store: any) => store.ProductDataReducer.showCart
  );
  const [productCont, setProductCon] = useState<productPageProp[]>([]);

  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const { productId } = useParams();
  let newDetail = products.filter((product) => product.productId === productId);

  const addToCart = async (productId: any) => {
    let itemArray = await localStorage.getItem("cartItems");
    let newItemArray = JSON.parse(itemArray || "[]");
    console.log(newItemArray);

    if (newItemArray) {
      if (newItemArray.includes(productId)) {
        toast.success("item added already");
        navigate("/products");
      } else {
        newItemArray.push(productId);
        try {
          await localStorage.setItem("cartItems", JSON.stringify(newItemArray));
          toast.success("item added successfully");
          navigate("/products");
        } catch (error) {
          return error;
        }
      }
    } else {
      let array = []; //if the array is empty
      array.push(productId);

      try {
        await localStorage.setItem("cartItems", JSON.stringify(array));
        toast.success("item added successfully");
        navigate("/products");
      } catch (error) {
        return error;
      }
    }
  };

  useEffect(() => {}, []);
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
              onClick={() => addToCart(product.productId)}
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
