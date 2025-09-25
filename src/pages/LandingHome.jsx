import { TopCategories } from "../components/Category/TopCategories";
import { CourseSection } from "../components/Course/CourseSection";
import { TopInstructors } from "../components/Instructor/TopInstructors";
export const LandingHome = () => {
  return (
    <>
      <TopCategories />
      <CourseSection Title="Top Courses" />
      <TopInstructors />
    </>
  );
};
