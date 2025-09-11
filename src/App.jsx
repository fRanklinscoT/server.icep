import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninPage from "./components/sign-in";
import SignupPage from "./components/Signup";
import ResetPasswordPage from "./components/resetPassword";
import OtpPage from "./components/OneTimePin";
import ResetEmailPage from "./components/reset-email";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/reset-email" element={<ResetEmailPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/otp" element={<OtpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
