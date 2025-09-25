import { Carousel } from "../Carousel";
import { InstructorMiniCard } from "./InstructorMiniCard";

export const TopInstructors = () => {
  return (
    <>
      <Carousel
        Title="Top Instructors"
        slidesToShow={5}
        CardComponent={InstructorMiniCard}
      ></Carousel>
    </>
  );
};
