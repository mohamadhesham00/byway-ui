import { FaArrowRightLong } from "react-icons/fa6";
import promo_1 from "../assets/images/promo_img_1.png";
import promo_2 from "../assets/images/promo_img_2.png";
import { AnimateOnScroll } from "./AnimateOnScroll";

export const PromoSection = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-around text-start">
        <AnimateOnScroll animation="animate__slideInLeft">
          <img style={{ width: "400px", height: "425px" }} src={promo_1} />
        </AnimateOnScroll>
        <AnimateOnScroll
          animation="animate__slideInRight"
          className="d-flex flex-column w-50 gap-3"
        >
          <h4>Become an Instructor</h4>
          <p>
            Instructors from around the world teach millions of students on
            Byway. We provide the tools and skills to teach what you love.
          </p>
          <button className="main-btn w-50">
            Start Your Instructor Journey <FaArrowRightLong className="ms-1" />
          </button>
        </AnimateOnScroll>
      </div>
      <div className="d-flex align-items-center justify-content-around text-start">
        <AnimateOnScroll
          animation="animate__slideInLeft"
          className="d-flex flex-column w-50 gap-3"
        >
          <h4 className="">Transform your life through education</h4>
          <p>
            Learners around the world are launching new careers, advancing in
            their fields, and enriching their lives.
          </p>
          <button className="main-btn w-40">
            Checkout Courses <FaArrowRightLong className="ms-1" />
          </button>
        </AnimateOnScroll>
        <AnimateOnScroll animation="animate__slideInRight">
          <img style={{ width: "471.5px", height: "385px" }} src={promo_2} />
        </AnimateOnScroll>
      </div>
      <div></div>
    </>
  );
};
