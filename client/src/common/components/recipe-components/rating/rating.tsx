import styles from "./_rating.module.scss";
import Star from "assets/images/shapes/star.png";
import EmptyStar from "assets/images/shapes/star-empty.png";

type RatingTypes = {
  rating: number | null;
};

function Rating({ rating }: RatingTypes) {
  const stars = rating;
  const emptyStars = rating ? 5 - rating : "";

  return (
    <div className={styles["rating-star-wrapper"]}>
      {rating ? (
        <>
          {[...Array(stars)].map((e, i) => (
            <img
              className={styles["rating-star"]}
              key={i}
              src={Star}
              alt="Star"
            />
          ))}
          {[...Array(emptyStars)].map((e, i) => (
            <img
              className={styles["rating-star"]}
              key={i}
              src={EmptyStar}
              alt="Empty star"
            />
          ))}
        </>
      ) : (
        "no rating specified"
      )}
    </div>
  );
}

export { Rating };
