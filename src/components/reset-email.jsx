import { FcGoogle } from "react-icons/fc";
import { FaFacebook} from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { handleSignupSuccess, handleSignupError }  from "./swalAlert";
import { useState } from "react";


export default function ResetEmailPage() {

  const navigate = useNavigate();
  const [formData,setFormData] = useState({
                                     email: "",
                                     password: "",
                                  })

  const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/forgot-password",formData, { headers: { "Content-Type": "application/json" } });
      const {message} = res.data;
      handleSignupSuccess(message);
    } catch (error) {
      handleSignupError(error.response?.data?.error || error.message);
    }
  }
  

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="flex w-full max-w-xl rounded-3xl overflow-hidden shadow-lg bg-white dark:bg-gray-800">
        <div className="w-full  p-10 flex flex-col justify-center text-gray-900 dark:text-white">
          <h2 className="text-3xl font-bold mb-2">Reset Password</h2>
          
          <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            className="mt-4 px-4 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
          />
          <button className="mt-6 w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 transition font-semibold text-white"
          type="submit">
            Enter Reset Password
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}
