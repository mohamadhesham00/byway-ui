import { CourseCard } from "./CourseCard";
export const CourseSection = ({ Title }) => {
  return (
    <>
      <div className="mt-5">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px auto",
          }}
        >
          <h2>{Title}</h2>
          <a>See All</a>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <CourseCard />
          </div>
          <div className="col-md-3 col-sm-6">
            <CourseCard />
          </div>
          <div className="col-md-3 col-sm-6">
            <CourseCard />
          </div>
          <div className="col-md-3 col-sm-6">
            <CourseCard />
          </div>
        </div>
      </div>
    </>
  );
};
