import { useRef } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Slider from "react-slick";

export const Carousel = ({ Title, slidesToShow, CardComponent }) => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    adaptiveHeight: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px auto",
        }}
      >
        <h2>{Title}</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <button className="button icon-btn" onClick={previous}>
            <MdNavigateBefore />
          </button>
          <button className="button icon-btn" onClick={next}>
            <MdNavigateNext />
          </button>
        </div>
      </div>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {CardComponent && <CardComponent />}
        {CardComponent && <CardComponent />}
        {CardComponent && <CardComponent />}
        {CardComponent && <CardComponent />}
        {CardComponent && <CardComponent />}
        {CardComponent && <CardComponent />}
        {CardComponent && <CardComponent />}
        {CardComponent && <CardComponent />}
        {CardComponent && <CardComponent />}
        {CardComponent && <CardComponent />}
      </Slider>
    </div>
  );
};
