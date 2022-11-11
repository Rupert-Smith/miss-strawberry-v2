import styles from "./_page-heading.module.scss";
import { clickOnRecipeTest } from "../../temp-data/temp_CONTANTS";

type PageHeadingProps = {
  heading?: string;
  icon?: JSX.Element;
  // fixed?: boolean;
};

function PageHeading({ heading, icon }: PageHeadingProps) {
  return (
    <div className={`${styles["page-heading"]}`}>
      {icon}
      {heading}
    </div>
    // <>
    //   {fixed ? (
    //     <FixedPageHeading heading={heading} icon={icon} />
    //   ) : (
    //     <RelativePageHeading heading={heading} icon={icon} />
    //   )}
    // </>
  );
}

// function FixedPageHeading({ heading, icon }: PageHeadingProps) {
//   return (
//     <div
//       className={`${styles["page-heading-fixed"]} ${styles["page-heading"]} ${
//         clickOnRecipeTest ? styles["shrink"] : styles["full"]
//       }  `}
//     >
//       {icon}
//       {heading}
//     </div>
//   );
// }

// function RelativePageHeading({ heading, icon }: PageHeadingProps) {
//   return (
//     <div
//       className={`${styles["page-heading-relative"]} ${styles["page-heading"]}`}
//     >
//       {icon}
//       {heading}
//     </div>
//   );
// }

export { PageHeading };
