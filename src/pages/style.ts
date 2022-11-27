import styled from "styled-components";

export const BodyContainer = styled.div`
  padding: 80px 100px;
  position: relative;
`;

export const BodyTitle = styled.div`
  font-weight: 400;
  font-size: 42px;
  line-height: 160%;
  margin-bottom: 100px;
  color: #1d1f22;
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
