import { notFound } from "next/navigation";

const ReviewDetails = ({params} : {
    params : {
        productId: string,
        reviewId: string
    }
}) => {

  if(parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for the Product with ProductId: {params.productId}
    </h1>
  )
};

export default ReviewDetails;