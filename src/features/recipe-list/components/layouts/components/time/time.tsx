import styles from "./_time.module.scss";
import { ReactComponent as TimeIcon } from "assets/icons/timer-light.svg";
import { convertTimeToString } from "helpers/convert-time-to-string";

type RatingTypes = {
  time: (number | null)[];
};

function Time({ time }: RatingTypes) {
  return (
    <div className={styles["recipe-time"]}>
      <TimeIcon />
      {convertTimeToString(time)}
    </div>
  );
}

export { Time };
