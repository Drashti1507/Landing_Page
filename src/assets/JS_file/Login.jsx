// import { useState } from "react";
// import axios from "axios";
// import {
//   // FaEnvelope,
//   // FaLock,
//   FaSignInAlt,
//   FaUserPlus,
//   FaEye,
//   FaEyeSlash
// } from "react-icons/fa";
// import "../css/Login.css";

// function Login({ onLoginSuccess, onPageChange }) {
//   const [form, setForm] = useState({
//     email: "",
//     password: ""
//   });

//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/auth/login",
//         form
//       );

//       const data = response.data;

//       localStorage.setItem("token", data.token);
//       localStorage.setItem("role", data.role);

//       onLoginSuccess(data.role);

//     } catch (error) {
//       alert(
//         error.response?.data?.msg ||
//         "Login failed. Please check your credentials."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-wrapper">

//       {/* LEFT IMAGE SECTION */}
//       <div className="login-left"></div>

//       {/* RIGHT FORM SECTION */}
//       <div className="login-right">
//         <div className="login-card">

//           <div className="login-header">
//             <div className="login-icon-box">
//               <FaSignInAlt />
//             </div>
//             <h2>Welcome Back</h2>
//             <p>Please sign in to your account</p>
//           </div>

//           <form className="login-form" onSubmit={handleSubmit}>

//             {/* EMAIL FIELD */}
//             <div className="form-group">
//               <div className="input-field">
//                 {/* <FaEnvelope className="input-icon-left" /> */}
//                 <input
//                   name="email"
//                   type="email"
//                   required
//                   placeholder="Email Address"
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             {/* PASSWORD FIELD */}
//             <div className="form-group">
//               <div className="input-field">
//                 {/* <FaLock className="input-icon-left" /> */}
//                 <input
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   required
//                   placeholder="Password"
//                   onChange={handleChange}
//                 />
//                 <span
//                   className="input-icon-right"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </span>
//               </div>
//             </div>

//             {/* <div className="form-options">
//               <label className="remember-me">
//                 <input type="checkbox" /> Remember me
//               </label>
//               <button type="button" className="forgot-password">
//                 Forgot Password?
//               </button>
//             </div> */}

//             <button
//               type="submit"
//               className="login-btn"
//               disabled={loading}
//             >
//               {loading ? "Signing in..." : "Sign in to account"}
//             </button>

//           </form>

//         <div className="register-link-container">
//           <p>
//             Don't have an account yet?{" "}
//             <span
//               className="register-link-text"
//               onClick={() => onPageChange("register")}
//             >
//               Register
//             </span>
//           </p>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;



import { useState } from "react";
import axios from "axios";
import {
  FaSignInAlt,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock
} from "react-icons/fa";
import "../css/Login.css";

function Login({ onLoginSuccess, onPageChange }) {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        form
      );

      const data = response.data;

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      onLoginSuccess(data.role);

    } catch (error) {
      alert(
        error.response?.data?.msg ||
        "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        {/* LEFT SIDE */}
        <div className="login-image-section">
          <img
            src="https://cdn-icons-png.flaticon.com/512/295/295128.png"
            alt="Login"
          />
          <h3>Welcome Back!</h3>
          <p>Login to continue managing your services.</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="login-form-section">
          <div className="login-header">
            <div className="login-icon-box">
              <FaSignInAlt />
            </div>
            <h2>Sign In</h2>
            <p>Please enter your credentials</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="form-group">
              <div className="input-wrapper">
                <FaEnvelope className="inside-icon" />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-group">
              <div className="input-wrapper">
                <FaLock className="inside-icon" />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password"
                  onChange={handleChange}
                />
                <span
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="login-btn"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="register-link-container">
            Don't have an account?{" "}
            <span
              className="register-link-text"
              onClick={() => onPageChange("register")}
            >
              Register
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;