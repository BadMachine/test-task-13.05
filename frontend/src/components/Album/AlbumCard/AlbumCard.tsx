import styles from "./AlbumCard.module.css";
import { ImageType } from "@/types";
import { FC } from "react";
import { imageFallback } from "@/utils/fallback";

interface AlbumCardProps extends ImageType {
  onClick?: () => void;
}
const AlbumCard: FC<AlbumCardProps> = ({ onClick, path, url, title }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <img alt={"Album-image"} src={path || url} onError={imageFallback} />
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default AlbumCard;
