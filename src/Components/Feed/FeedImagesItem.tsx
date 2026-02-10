import styles from "./FeedImagesItem.module.css";
import Image from "../Helpers/Image";
import { Image as ImageType } from "../../api";

interface FeedImagesItemProps {
  image: ImageType;
  setModalImage: (image: ImageType | null) => void;
}

const FeedImagesItem = ({ image, setModalImage }: FeedImagesItemProps) => {
  function handleClick() {
    setModalImage(image);
  }
  return (
    <li className={styles.image} onClick={handleClick}>
      <Image src={image.src} alt={image.title} />
      <span className={styles.views}>{image.views}</span>
    </li>
  );
};

export default FeedImagesItem;
