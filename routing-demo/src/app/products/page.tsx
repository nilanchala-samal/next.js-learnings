import Link from "next/link";

const ProductList = () => {
  const productId = 100;
  return (
    <>
      <h1>ProductList</h1>
      <h2><Link href={"products/1"}>Product 1</Link></h2>
      <h2><Link href={"products/2"}>Product 2</Link></h2>
      <h2><Link href={"products/3"} replace={false}>Product 3</Link></h2>
      {/* replace props of Link component replaces the current history state and no new entry will be created for the browser's history stack*/}
      <h2><Link href={`products/${productId}`}>Product {productId}</Link></h2>
      <Link href={"/"}>Click here to go to Home Page</Link>
    </>
  );
};

export default ProductList;
