import "animate.css";
import { useInView } from "react-intersection-observer";
export const AnimateOnScroll = ({
  children,
  animation = "animate__fadeIn",
  className = "",
  once = true,
  threshold = 0.2,
}) => {
  const { ref, inView } = useInView({ triggerOnce: once, threshold });

  return (
    <div
      ref={ref}
      className={`${className} ${
        inView ? `animate__animated ${animation}` : ""
      }`}
    >
      {children}
    </div>
  );
};
