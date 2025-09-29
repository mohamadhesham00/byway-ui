import { TopCategories } from "../components/Category/TopCategories";
import { CourseSection } from "../components/Course/CourseSection";
import { TopInstructors } from "../components/Instructor/TopInstructors";
import { PromoSection } from "../components/PromoSection";
export const LandingHome = () => {
  return (
    <>
      <TopCategories />
      <CourseSection Title="Top Courses" />
      <TopInstructors />
      <PromoSection />
    </>
  );
};
