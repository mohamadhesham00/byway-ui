import Rating from "@mui/material/Rating";
import course from "../../assets/images/course.jpg";
export const CourseCard = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
          borderRadius: "1rem",
          padding: "1rem",
          gap: "8px",
        }}
        className="card-border"
      >
        <div className="position-relative">
          <img
            src={course}
            alt="Course"
            style={{ width: "100%", height: "auto", borderRadius: "0.5rem" }}
          />
          <span
            style={{
              position: "absolute",
              backgroundColor: "#EEF2FF",
              color: "#5879DC",
              borderRadius: "40px",
              padding: "4px 16px",
              left: "5px",
              top: "4px",
            }}
          >
            UI/UX Design
          </span>
        </div>
        <div>
          <h5 className="main-text">Beginner’s Guide to Design</h5>
          <p className="sub-text">By Ronald Richards</p>
          <Rating name="disabled" value="2.5" precision={0.5} readOnly />

          <p className="sub-text">22 Total Hours. 155 Lectures. Beginners</p>
          <h5 className="main-text">$45.00</h5>
        </div>
      </div>
    </>
  );
};
