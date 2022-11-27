import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  position: absolute;
  top: 73px;
  right: 100px;
  padding: 32px 16px;
  background-color: white;
  z-index: 2;
`;

export const ProductContainer = styled.div``;

export const DetailsContainer = styled.div``;

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmptyMsg = styled.p`
  font-weight: 600;
  color: black;
  font-size: 18px;
`;

export const ProductItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  height: 190px;
`;
export const ProductItemDetails = styled.div``;
export const ProductUpdate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Add = styled.div`
  border: solid 1px black;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const Minus = styled.div`
  border: solid 1px black;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const Symbol = styled.p`
  font-weight: 500px;
  font-size: 18px;
`;
export const productImage = styled.div``;
export const Image = styled.img`
  height: 100%;
  width: 100px;
`;

export const PriceText = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #1d1f22;
`;

export const TitleText = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #1d1f22;
`;

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 34px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 34px;
`;

export const TotalText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #1d1f22;
`;

export const TotalPrice = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  color: #1d1f22;
`;
