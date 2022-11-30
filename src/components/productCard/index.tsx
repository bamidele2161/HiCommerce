import React from "react";
import {
  Container,
  IconWrapper,
  ImageContainer,
  OverLayMsg,
  ProductDetailsContainer,
  ProductImage,
  ProductOverLay,
  ProductPrice,
  ProductTitle,
} from "./style";
import { ReactComponent as CartIcon } from "../../images/Common.svg";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type cardProps = {
  image: any;
  title: string;
  price: number;
  available: boolean;
  handleClick: () => void;
  id: any;
};
const ProductCard: React.FC<cardProps> = ({
  image,
  title,
  price,
  available,
  handleClick,
  id,
}) => {
  const navigate = useNavigate();

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

  return (
    <Container onClick={handleClick}>
      <ImageContainer>
        <ProductImage src={image} alt={image} />
      </ImageContainer>
      <ProductDetailsContainer>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>${price}</ProductPrice>
      </ProductDetailsContainer>
      <IconWrapper onClick={() => addToCart(id)}>
        <CartIcon />
      </IconWrapper>
      {available === false && (
        <ProductOverLay>
          <OverLayMsg>OUT OF STOCK</OverLayMsg>
        </ProductOverLay>
      )}
    </Container>
  );
};

export default ProductCard;
