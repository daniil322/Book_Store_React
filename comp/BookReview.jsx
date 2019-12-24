export default function BookReview(props) {
  const { reviews, onRemoveReview } = props;

  return reviews.map(review => {
    return (
      <div key={review.date} className=" reviewContainer">
        <div className="flex">
          <h5>User Name={review.name}</h5>
          <a onClick={onRemoveReview(review.time)}>X</a>
        </div>
        <h5>Rating: {review.rate}</h5>
        <h5>Created At: {review.date}</h5>
        <p>Review: {review.text}</p>
      </div>
    );
  });
}
