import styles from "./_rating.module.scss";
import Star from "assets/images/shapes/star.png";
import EmptyStar from "assets/images/shapes/star-empty.png";

type RatingTypes = {
  rating: number;
};

function Rating({ rating }: RatingTypes) {
  const stars = rating;
  const emptyStars = 5 - rating;

  return (
    <div className={styles["rating-star-wrapper"]}>
      {[...Array(stars)].map((e, i) => (
        <img className={styles["rating-star"]} key={i} src={Star} alt="Star" />
      ))}
      {[...Array(emptyStars)].map((e, i) => (
        <img
          className={styles["rating-star"]}
          key={i}
          src={EmptyStar}
          alt="Empty star"
        />
      ))}
    </div>
  );
}

export { Rating };
