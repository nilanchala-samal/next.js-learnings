const ReviewDetails = ({params} : {
    params : {
        productId: string,
        reviewId: string
    }
}) => {
  return (
    <h1>
      Review {params.reviewId} for the Product with ProductId: {params.productId}
    </h1>
  )
};

export default ReviewDetails;