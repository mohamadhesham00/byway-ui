import { FaStar } from "react-icons/fa";
import instructor from "../../assets/images/instructor.png";

export const InstructorMiniCard = () => {
  return (
    <>
      <div
        className="card-border"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          gap: "1rem",
        }}
      >
        <div className="crop-top">
          <img src={instructor} className="" />
        </div>
        <div>
          <h5 className="main-text">Ronald Richards</h5>
          <small className="sub-text">UI/UX Designer</small>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ borderTop: "1px solid #E2E8F0", paddingTop: "1rem" }}
        >
          <div>
            <FaStar style={{ color: "#EAB308" }} />
            <span className="main-text ms-1">4.9</span>
          </div>
          <label className="sub-text">2400 students</label>
        </div>
      </div>
    </>
  );
};
