import React, { useState, useEffect } from "react";
import { FaFacebookF, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../LoginFlow/Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Tambahkan ini:
  useEffect(() => {
    document.body.style.backgroundColor = "#f6f5f7";
    return () => {
      document.body.style.backgroundColor = "white"; // ganti sesuai warna halaman lain
    };
  }, []);

  return (
    <div className="form-container sign-in-container">
      <form>
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="#" className="social">
            <FaFacebookF />
          </a>
          <a href="#" className="social">
            <FaGoogle />
          </a>
        </div>
        <span>or use your account</span><br />
        <input type="email" placeholder="Email" name="email" /><br />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
          />
          <span onClick={togglePassword} className="eye-icon">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <a href="#">Forgot your password?</a>
        <a href="#">Belum punya akun</a>
        <button className="btnLogin">Masuk</button>
      </form>
    </div>
  );
}

export default Login;
