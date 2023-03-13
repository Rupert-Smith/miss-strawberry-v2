import styles from "./_general-heading.module.scss";

type HeadingProps = {
  heading: string;
  icon?: JSX.Element;
  small?: boolean;
  black?: boolean;
};

function GeneralHeading({ small, heading, icon, black }: HeadingProps) {
  return (
    <div
      className={`${small ? styles["small"] : styles["big"]} ${
        styles["page-heading"]
      } ${black ? styles["black"] : styles["white"]} `}
    >
      {icon}
      {heading}
    </div>
  );
}

export { GeneralHeading };
