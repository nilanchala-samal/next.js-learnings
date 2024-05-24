import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count)
}

const ReviewDetails = ({ params }: {
  params: {
    productId: string,
    reviewId: string
  }
}) => {

  const random = getRandomInt(3);
  if (random === 1) {
    throw new Error("Error loading preview")
  }

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for the Product with ProductId: {params.productId}
    </h1>
  )
};

export default ReviewDetails;