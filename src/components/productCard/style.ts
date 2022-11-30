import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  background-color: white;
  padding: 16px;
  gap: 24px;
  cursor: pointer;
  position: relative;
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: column;
  background-color: white;
`;
export const ProductImage = styled.img`
  /* max-width: 200px;
  max-height: 200px; */
`;

export const ProductDetailsContainer = styled.div``;

export const ProductTitle = styled.p`
  font-weight: 300;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: #1d1f22;
`;

export const ProductPrice = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #1d1f22;
`;

export const ProductOverLay = styled.div`
  background-color: white;
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
  opacity: 0.5;
`;
export const OverLayMsg = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: #8d8f9a;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 31px;
  bottom: 72px;
`;
