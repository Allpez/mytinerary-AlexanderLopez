import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/authActions";
import { useNavigate } from "react-router-dom";

// Icons
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Styles
import "../styles/User.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.authStore);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  
  const loginWithGoogle = () => {
    window.location.href = "http://localhost:8080/api/auth/signIn/google";
  };

  const handleCreateAccountClick = () => {
    navigate('/SignUp');
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form w-96 max-w-sm p-6 my-6 space-y-5 flex flex-col items-center justify-center h-auto rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold text-center text-white">Sign In</h2>

      <div className="w-full">
        <p className="text-xs my-2 text-gray-300 inline-flex me-2">New user?</p>
        <button type="button" onClick={handleCreateAccountClick}>
          <p className="text-xs my-2 text-sky-300">Create an account</p>
        </button>
      </div>

      <div className="w-full">
        <label className="block mb-1 text-sm font-medium text-gray-300">
          Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="current-email"
          required
          className="w-full px-4 py-2 text-white bg-[#011f26] tracking-wide border border-sky-700 rounded focus:outline-none focus:ring-2 focus:ring-sky-950"
        />
      </div>

      <div className="w-full relative">
        <label className="block mb-1 text-sm font-medium text-gray-300">
          Password:
        </label>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
          className="w-full px-4 py-2 text-white bg-[#011f26] tracking-wide border border-sky-700 rounded focus:outline-none focus:ring-2 focus:ring-sky-950"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-10 text-gray-300"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <button
        type="submit"
        className="w-full py-2 font-semibold text-white bg-sky-950 rounded hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
      >
        Sign In
      </button>

      {loading && <p className="text-center text-teal-400">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="flex items-center my-4 w-full">
        <hr className="flex-grow border-gray-400" />
        <p className="px-2 text-gray-300">Or</p>
        <hr className="flex-grow border-gray-400" />
      </div>

      <button
        type="button"
        className="w-full flex items-center justify-center py-2 bg-gray-200 text-black font-semibold rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
        onClick={loginWithGoogle}
      >
        <FcGoogle className="mr-2" />
        Sign In with Google
      </button>
    </form>
  );
};

export default SignIn;