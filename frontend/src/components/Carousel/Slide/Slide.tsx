import { FC } from "react";
import { ImageType } from "@/types";
import classNames from "classnames/bind";
import styles from "./Slide.module.css";
import { imageFallback } from "@/utils/fallback";

interface SlideProps extends ImageType {
  active?: boolean;
}

const cx = classNames.bind(styles);
const Slide: FC<SlideProps> = ({ path, url, active, title }) => {
  // Constructs base style with fade animation
  const fadingSlideStyle = cx({ container: true, fade: true, visible: active });
  const textStyle = cx({ caption: true });

  return (
    <div className={fadingSlideStyle}>
      <img src={path || url || "/no-image.webp"} onError={imageFallback} />
      <div className={textStyle}>{title}</div>
    </div>
  );
};

export default Slide;
