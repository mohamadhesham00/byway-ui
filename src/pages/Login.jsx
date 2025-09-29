import Login_img from "../assets/images/login_img.jpg";
import { LoginForm } from "../components/Auth/LoginForm";
export const Login = () => {
  return (
    <>
      <div className="d-flex justify-content-between h-auto">
        <div className="w-40 align-content-center">
          <LoginForm />
        </div>
        <img src={Login_img} style={{ width: "50%", height: "89vh" }} />
      </div>
    </>
  );
};
