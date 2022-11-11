import styles from "./_title.module.scss";

type RatingTypes = {
  title: string;
};

function Title({ title }: RatingTypes) {
  return <div className={`${styles["recipe-title"]}`}>{title}</div>;
}

export { Title };
