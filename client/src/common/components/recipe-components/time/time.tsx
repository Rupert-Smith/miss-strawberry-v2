import styles from "./_time.module.scss";
import { ReactComponent as TimeIcon } from "assets/icons/timer-light.svg";
import { convertTimeToString } from "common/helpers/convert-time-to-string";

type RatingTypes = {
  time: string;
  icon?: boolean;
};

function Time({ time, icon = true }: RatingTypes) {
  return (
    <div className={styles["recipe-time"]}>
      {icon && <TimeIcon />}
      {convertTimeToString(time)}
    </div>
  );
}

export { Time };
