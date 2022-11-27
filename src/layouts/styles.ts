import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: clamp(16px, 1.6vw, 24px);
  width: 100%;

  @media screen and (max-width: 430px) {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 16px;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: auto auto;
  }

  @media screen and (min-width: 1550px) {
    grid-template-columns: auto auto auto auto;
  }
`;
