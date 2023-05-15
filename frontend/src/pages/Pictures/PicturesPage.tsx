import { useCallback, useState } from "react";
import { LayoutType } from "@/constants";
import ToggleButton from "@/components/Button/ToggleButton/ToggleButton";
import { PicturesAPI } from "@/redux/services/PicturesAPI";
import Album from "@/components/Album/Album";
import Carousel from "@/components/Carousel/Carousel";
import Layout from "@/components/Layout/Layout";

const PicturesPage = () => {
  const [layout, setLayout] = useState<LayoutType>(LayoutType.ALBUM);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>();
  const { data: images = [], isLoading } = PicturesAPI.usePicturesQuery();
  const handleChangeLayout = () => {
    setLayout((prevState) =>
      prevState === LayoutType.ALBUM ? LayoutType.CAROUSEL : LayoutType.ALBUM
    );
  };

  const handleAlbumCardClick = (index: number) => {
    setCurrentImageIndex(index);
    handleChangeLayout();
  };

  const handleChangePictureIndex = useCallback((index: number) => {
    setCurrentImageIndex(index);
  }, []);

  return (
    <div
      style={{
        width: "-webkit-fill-available",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        padding: "80px",
        rowGap: "24px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: "4px",
          alignItems: "center",
        }}
      >
        <span>Album</span>
        <ToggleButton
          onClick={handleChangeLayout}
          checked={layout !== LayoutType.ALBUM}
        />
        <span>Carousel</span>
      </div>

      <Layout show={layout === LayoutType.ALBUM} keepMounted>
        <Album onCardClick={handleAlbumCardClick} images={images} />
      </Layout>

      <Layout show={layout === LayoutType.CAROUSEL} keepMounted>
        <Carousel
          onChange={handleChangePictureIndex}
          currentSlide={currentImageIndex}
          images={images}
        />
      </Layout>
    </div>
  );
};

export default PicturesPage;
