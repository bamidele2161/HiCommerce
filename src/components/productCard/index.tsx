import React from "react";
import {
  Container,
  ImageContainer,
  OverLayMsg,
  ProductDetailsContainer,
  ProductImage,
  ProductOverLay,
  ProductPrice,
  ProductTitle,
} from "./style";

type cardProps = {
  image: any;
  title: string;
  price: number;
  available: boolean;
  handleClick: () => void;
};
const ProductCard: React.FC<cardProps> = ({
  image,
  title,
  price,
  available,
  handleClick,
}) => {
  return (
    <Container onClick={handleClick}>
      <ImageContainer>
        <ProductImage src={image} alt={image} />
      </ImageContainer>
      <ProductDetailsContainer>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>${price}</ProductPrice>
      </ProductDetailsContainer>
      {available === false && (
        <ProductOverLay>
          <OverLayMsg>OUT OF STOCK</OverLayMsg>
        </ProductOverLay>
      )}
    </Container>
  );
};

export default ProductCard;
