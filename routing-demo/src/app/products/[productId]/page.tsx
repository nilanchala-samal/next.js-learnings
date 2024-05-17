import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
}

// We cannot export meatadata object and generateMetadata function at the same time from the same route segment

// export const metadata = {
//   name: "Nilanchala Samal"
// }

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => { 
      resolve(`Iphone ${params.productId}`)
    }, 1000)
  })
  return {
    title: `Product ${title}`
  }
}

const ProductDetails = ({ params }: Props) => {
  return <h1>Product Details of Product: {params.productId}</h1>;
};

export default ProductDetails;
