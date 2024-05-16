const ProductDetails = ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  return <h1>Product Details of Product: {params.productId}</h1>;
};

export default ProductDetails;
