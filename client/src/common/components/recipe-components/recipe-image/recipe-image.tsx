import { useRef, useState, useEffect } from "react";
import styles from "./_recipe-image.module.scss";

function importAll(r: any) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("assets/images/flags", false, /\.(png|jpe?g|svg)$/)
);

type RecipeImageProps = {
  src: string;
  alt: string;
  origin: string;
  imageClassName: string;
  flagSize: string;
};

function RecipeImage({
  flagSize,
  origin,
  src,
  alt,
  imageClassName,
}: RecipeImageProps) {
  let flagSrc = "";

  images.forEach((imageSrc: string) => {
    if (imageSrc.includes(`static/media/${origin}`)) {
      flagSrc = imageSrc;
    }
  });

  return (
    <div>
      <img
        src={src}
        id={alt}
        alt={alt}
        className={`${imageClassName} ${styles["recipe-picture"]}`}
      />
      {/* <img
        className={`${styles[flagSize]} ${styles["flag"]}`}
        src={flagSrc}
        alt={origin}
      /> */}
    </div>
  );
}

export { RecipeImage };
