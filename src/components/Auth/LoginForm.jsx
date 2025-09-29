import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { login } from "../../api/authAPI";
import { AuthContext } from "../../contexts/AuthContext";
const schema = yup.object().shape({
  UserName: yup
    .string()
    .required("Username is required")
    .matches(/^[^\s£$%*@]+$/, "Username cannot contain spaces or £ $ % * @"),
  Password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/\d/, "Must contain at least one digit")
    .matches(/[@$!%*?&]/, "Must contain at least one special character"),
});

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const { storeToken } = useContext(AuthContext);

  const onSubmit = async (data) => {
    setApiError("");
    setLoading(true);
    try {
      let result = await login(data);
      storeToken(result.data);
    } catch (err) {
      if (err.response) {
        setApiError(err.response.data.error || "Login failed.");
      } else {
        setApiError("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2>Sign in to your account</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column gap-4 text-start"
      >
        <div className="username-section">
          <h5 className="main-text">Username</h5>
          <input
            type="text"
            placeholder="Enter Username"
            className="auth-input"
            {...register("UserName")}
          />
          {errors.UserName && (
            <small className="text-danger">{errors.UserName.message}</small>
          )}
        </div>

        <div>
          <h5 className="main-text">Password</h5>
          <input
            type="password"
            placeholder="Enter Password"
            className="auth-input"
            {...register("Password")}
          />
          {errors.Password && (
            <small className="text-danger">{errors.Password.message}</small>
          )}
        </div>

        <button type="submit" className="main-btn w-25" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>
        {apiError && <div className="text-danger">{apiError}</div>}
      </form>
    </>
  );
};
