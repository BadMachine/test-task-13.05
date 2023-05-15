import styles from "./Album.module.css";
import { FC } from "react";
import { ImageType } from "@/types";
import AlbumCard from "./AlbumCard/AlbumCard";

interface AlbumComponentProps {
  images: ImageType[];
  onCardClick: (index: number) => void;
}
const Album: FC<AlbumComponentProps> = ({ images, onCardClick }) => {
  return (
    <div className={styles.container}>
      {
        // In case there will be some replacements/order changes - replace key with unique value
        images.map((image, index) => (
          <AlbumCard
            onClick={onCardClick.bind(null, index)}
            key={index}
            {...image}
          />
        ))
      }
    </div>
  );
};

export default Album;
