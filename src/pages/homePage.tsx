import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import ProductCard from "../components/productCard";
import { products } from "../config/data";
import ProductLayout from "../layouts/productContainer";
import { BodyContainer, BodyOverLay, BodyTitle } from "./style";

const HomePage: React.FC = () => {
  const productDataContainer = useSelector(
    (store: any) => store.ProductDataReducer.cartItems
  );

  const cartShow = useSelector(
    (store: any) => store.ProductDataReducer.showCart
  );

  console.log("data fetched", productDataContainer);
  const navigate = useNavigate();
  const handleClick = (productId: string, available: boolean) => {
    if (available === true) {
      navigate(`/products/${productId}`);
    }
  };
  return (
    <>
      <Navbar />
      <BodyContainer>
        <BodyTitle>Category name</BodyTitle>
        <ProductLayout>
          {products.map((product) => {
            return (
              <div key={product.productId}>
                <ProductCard
                  title={product.productName}
                  price={product.productPrice}
                  image={product.productImage}
                  available={product.available}
                  handleClick={() =>
                    handleClick(product.productId, product.available)
                  }
                />
              </div>
            );
          })}
        </ProductLayout>
        {cartShow && <BodyOverLay></BodyOverLay>}
      </BodyContainer>
    </>
  );
};

export default HomePage;
