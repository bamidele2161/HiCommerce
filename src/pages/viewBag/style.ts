import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 100px;
  background-color: white;
`;

export const ProductContainer = styled.div`
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 20px;
`;

export const DetailsContainer = styled.div`
  width: 100%;
  margin-top: 55px;
`;

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmptyMsg = styled.p`
  font-weight: 600;
  color: black;
  font-size: 24px;
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
export const ProductLeftDetail = styled.div`
  display: flex;
  gap: 20px;
`;
export const Image = styled.img`
  height: 100%;
  width: 200px;
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
  gap: 20px;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export const TText = styled.p`
  font-size: 20px;
  color: #1d1f22;
`;

export const TotalText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 18px;
  color: #1d1f22;
`;

export const TotalPrice = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: #1d1f22;
`;
export const CartText = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
  color: #1d1f22;
  padding: 0px 100px;
`;
export const BottomSection = styled.div`
  padding: 0px 100px;
`;
export const Body = styled.div`
  position: relative;

  padding-top: 80px;
`;

export const BodyOverLay = styled.div`
  background-color: rgba(57, 55, 72, 0.22);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  /* opacity: 0.5; */
`;
