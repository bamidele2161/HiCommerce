import React from "react";
import image from "../../images/VSF.png";
import { Image, LoaderWrapper } from "./styled";
import "./loader.css";

const Loader = () => {
  return (
    <LoaderWrapper>
      <Image src={image} alt="logo" />
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderWrapper>
  );
};

export default Loader;
