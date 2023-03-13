import { useRef, useState, useEffect } from "react";
import styles from "./_recipe-image.module.scss";
import noImage from "assets/images/recipe-images/no-image3.jpg";
import { Buffer } from "buffer";
import { encode } from "base64-arraybuffer";

function importAll(r: any) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("assets/images/flags", false, /\.(png|jpe?g|svg)$/)
);

type RecipeImageProps = {
  src: any;
  alt: string;
  country: string | null;
  imageClassName: string;
  flagSize: string;
};

function RecipeImage({
  flagSize,
  country,
  src,
  alt,
  imageClassName,
}: RecipeImageProps) {
  let flagSrc = "";

  //img.src =

  // console.log(src.data);

  // console.log(src?.data);

  let srcTest = src;

  // console.log(src.data);

  // if (src) {
  //   if (src.data) {
  //     console.log(src.data);
  //     // const srcTestString = Buffer.from(src.data).toString("base64");
  //     srcTest = `data:image/jpeg;base64,${src.data}`;
  //     console.log(srcTest);
  //   }
  // }

  // let test = encode(src.data);

  // console.log(test);
  // const base64String = btoa(String.fromCharCode(...new Uint8Array(src.data)));

  // const imgSrc = "data:image/jpeg;base64," + Buffer.from(src, "base64");

  // console.log(imgSrc);

  // images.forEach((imageSrc: string) => {
  //   if (imageSrc.includes(`static/media/${src.data}`)) {
  //     flagSrc = imageSrc;
  //   }
  // });

  return (
    <div>
      <img
        src={src}
        // src={`data:image/png;base64,${src.test}`}
        id={alt}
        alt={alt}
        className={`${imageClassName} ${styles["recipe-picture"]}`}
      />
      {/* <img
        className={`${styles[flagSize]} ${styles["flag"]}`}
        src={flagSrc}
        alt={country}
      /> */}
    </div>
  );
}

export { RecipeImage };
