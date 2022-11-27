import product1 from "../images/cool.png";
import product2 from "../images/Product B.png";
import product3 from "../images/Image.png";
import product4 from "../images/apollo.png";
type productArray = {
  productId: string;
  productName: string;
  productPrice: number;
  productImage: string;
  available: boolean;
};

export const products: productArray[] = [
  {
    productId: "1",
    productName: "Apollo Running Short",
    productPrice: 50,
    productImage: product1,
    available: true,
  },
  {
    productId: "2",
    productName: "Apollo Running Short",
    productPrice: 50,
    productImage: product2,
    available: true,
  },
  {
    productId: "3",
    productName: "Apollo Running Short",
    productPrice: 50,
    productImage: product4,
    available: false,
  },
  {
    productId: "4",
    productName: "Apollo Running Short",
    productPrice: 50,
    productImage: product3,
    available: true,
  },
  {
    productId: "5",
    productName: "Apollo Running Short",
    productPrice: 50,
    productImage: product1,
    available: true,
  },
  {
    productId: "6",
    productName: "Apollo Running Short",
    productPrice: 50,
    productImage: product4,
    available: true,
  },
];
