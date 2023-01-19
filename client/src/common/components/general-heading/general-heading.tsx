import styles from "./_general-heading.module.scss";

type HeadingProps = {
  heading?: string;
  icon?: JSX.Element;
  small?: boolean;
};

function GeneralHeading({ small, heading, icon }: HeadingProps) {
  return (
    <div
      className={`${small ? styles["small"] : styles["big"]} ${
        styles["page-heading"]
      }`}
    >
      {icon}
      {heading}
    </div>
  );
}

export { GeneralHeading };
