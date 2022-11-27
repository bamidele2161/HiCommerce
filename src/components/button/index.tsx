import React from "react";
import { ButtonContainer, Container } from "./style";

type buttonProp = {
  buttonText: string;
  onClick: () => void;
};
const PrimaryButton: React.FC<buttonProp> = ({ buttonText, onClick }) => {
  return (
    <Container>
      <ButtonContainer onClick={onClick}>{buttonText}</ButtonContainer>
    </Container>
  );
};

export default PrimaryButton;
