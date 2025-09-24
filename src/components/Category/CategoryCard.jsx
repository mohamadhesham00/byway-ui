import telescope from "../../assets/images/telescope.png";
export const CategoryCard = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "24px 93px",
          gap: "8px",
          //   height: "auto",
        }}
        className="card-border"
      >
        <div
          style={{
            backgroundColor: "#E0F2FE",
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={telescope} />
        </div>
        <h4 className="main-text">Fullstack</h4>
        <p className="sub-text">11 Courses</p>
      </div>
    </>
  );
};
