import React from "react";
import styles from "./Image.module.css";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}

const Image = ({ alt, ...props }: ImageProps) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }: React.SyntheticEvent<HTMLImageElement>) {
    setSkeleton(false);
    (target as HTMLImageElement).style.opacity = "1";
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />
    </div>
  );
};

export default Image;
