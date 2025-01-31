import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  return <>Product ID: {id}</>;
};

export default Product;
