import signupImg from "../assets/sign-up.jpg";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { handleSignupSuccess, handleSignupError } from "./swalAlert";
import { useState } from "react";

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      return handleSignupError("No token found in URL");
    }

    try {
      const res = await axios.post("http://localhost:3000/api/reset-password", {
        token,
        newPassword: formData.newPassword,
        confirmPassword: formData.confirmPassword,
      });

      handleSignupSuccess(res.data.message);
      navigate("/login");
    } catch (error) {
      handleSignupError(error.response?.data?.error || error.message);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="flex w-full max-w-4xl rounded-3xl overflow-hidden shadow-lg bg-white dark:bg-gray-800">
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-green-500 to-green-800 items-center justify-center">
          <img
            src={signupImg}
            alt="MunicipalHub"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center text-gray-900 dark:text-white">
          <h2 className="text-3xl font-bold mb-2">Reset Password</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Forgot your password? Enter a new one below.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="New password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="mt-4 px-4 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            />

            <input
              type="password"
              placeholder="Confirm your new password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-4 px-4 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            />

            <button
              type="submit"
              className="mt-6 w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 transition font-semibold text-white"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
