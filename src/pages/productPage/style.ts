import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 33px 100px;
  gap: 40px;
  position: relative;
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
  height: 100vh;
  width: 100%;
  /* opacity: 0.5; */
`;

export const ImageRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
  width: 15%;
`;

export const SmallImage = styled.img`
  width: 100%;
  height: 88px;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  gap: 40px;
`;

export const Image = styled.img`
  width: 80%;
  height: 500px;
`;

export const ProdutDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;
export const ProductName = styled.p`
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  color: #1d1f22;
`;
export const ProductShortName = styled.p`
  font-weight: 400;
  font-size: 30px;
  line-height: 27px;
  color: #1d1f22;
`;
export const ProductPrice = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #1d1f22;
`;
export const ProductAmount = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;

  color: #1d1f22;
`;

export const ProductParagraph = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 159.96%;
  color: #1d1f22;
`;
