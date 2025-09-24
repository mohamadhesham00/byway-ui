import { Carousel } from "../Carousel";
import { CategoryCard } from "./CategoryCard";

export const TopCategories = () => {
  return (
    <>
      <Carousel
        Title="Top Categories"
        slidesToShow={4}
        CardComponent={CategoryCard}
      ></Carousel>
    </>
  );
};
