import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import signupImg from "../assets/sign-up.jpg";

export default function SigninPage() {
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
          <h2 className="text-3xl font-bold mb-2">Log-in into an account</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Don't have an account?{" "}
            <a href="#" className="text-green-600 dark:text-green-400">
              Log in
            </a>
          </p>
          <input
            type="email"
            placeholder="Email"
            className="mt-4 px-4 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="mt-4 px-4 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
          />
          <button className="mt-6 w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 transition font-semibold text-white">
            Login
          </button>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300 dark:border-gray-600" />
            <span className="px-2 text-gray-500 dark:text-gray-400">
              Or Continue with
            </span>
            <hr className="flex-grow border-gray-300 dark:border-gray-600" />
          </div>

          <div className="flex gap-3">
            <button className="w-1/2 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
              <div className="flex flex-row justify-center gap-2 items-center">
                <FcGoogle /> <span> Google</span>
              </div>
            </button>
            <button className="w-1/2 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
              <div className="flex flex-row justify-center gap-2 items-center"><FaFacebook className="text-blue-700 dark:text-blue-500"/> Facebook </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
