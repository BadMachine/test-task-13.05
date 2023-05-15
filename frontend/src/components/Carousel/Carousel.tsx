import { ImageType } from "@/types";
import { FC, useCallback, useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import Slide from "./Slide/Slide";

interface CarouselComponentProps {
  currentSlide?: number;
  onChange?: (index: number) => void;
  images: ImageType[];
}
const Carousel: FC<CarouselComponentProps> = ({
  images,
  currentSlide,
  onChange,
}) => {
  const [current, setCurrent] = useState(currentSlide || 0);

  const handleNextSlide = useCallback(() => {
    setCurrent((prevState) => {
      return prevState < images.length - 1 ? prevState + 1 : 0;
    });
  }, [images.length]);

  const handlePrevSlide = useCallback(() => {
    setCurrent((prevState) => {
      return prevState !== 0 ? prevState - 1 : images.length - 1;
    });
  }, [images.length]);

  useEffect(() => {
    if (currentSlide || currentSlide === 0) {
      setCurrent(currentSlide);
    }
  }, [currentSlide]);

  useEffect(() => {
    onChange && onChange(current);
  }, [current, onChange]);

  return (
    <div className={styles.container}>
      {
        // In case there will be some replacements/order changes - replace key with unique value
        images.map((image, index) => (
          <Slide key={index} active={current === index} {...image} />
        ))
      }
      <a className={styles.prev} onClick={handlePrevSlide}>
        ❮
      </a>
      <a className={styles.next} onClick={handleNextSlide}>
        ❯
      </a>
    </div>
  );
};

export default Carousel;
