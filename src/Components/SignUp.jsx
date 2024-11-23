// import { useState } from "react";
// import "../styles/User.css";
// import { FcGoogle } from "react-icons/fc";


// const Signup = ({ toggleForm, handleGoogleLogin, handleSubmit }) => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [country, setCountry] = useState("");
//   const [photo, setPhoto] = useState(""); // Campo para la URL de la foto
//   const [showPassword, setShowPassword] = useState(false);

//   const countries = [
//     "United States",
//     "Canada",
//     "Mexico",
//     "Brazil",
//     "Argentina",
//     "Germany",
//     "France",
//     "Italy",
//     "Spain",
//     "United Kingdom",
//     "Australia",
//     "India",
//     "China",
//     "Japan",
//     "South Korea",
//     "South Africa",
//     "Egypt",
//     "Russia",
//     "Turkey",
//     "Netherlands",
//   ];

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     handleSubmit({
//       firstName,
//       lastName,
//       email,
//       password,
//       country,
//       photo,
//     });
//   };

//   return (
//     <form onSubmit={onSubmit} className="form w-96 max-w-sm p-6 space-y-5 flex flex-col items-center rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold text-center text-white">Create Account</h2>
//       <div className="w-full">
//         <p className="text-xs my-2 text-gray-300 inline-flex me-2">Already have an account?</p>
//         <button type="button" onClick={toggleForm}>
//           <p className="text-xs my-2 text-sky-300">Sign In</p>
//         </button>
//       </div>
//       <div className="w-full">
//         <label className="block mb-1 text-sm font-medium text-gray-300">First Name:</label>
//         <input
//           type="text"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//           required
//           className="w-full px-4 py-2 text-white bg-[#011f26] border border-sky-700 rounded focus:outline-none focus:ring-2 focus:ring-sky-950"
//         />
//       </div>
//       <div className="w-full">
//         <label className="block mb-1 text-sm font-medium text-gray-300">Last Name:</label>
//         <input
//           type="text"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//           required
//           className="w-full px-4 py-2 text-white bg-[#011f26] border border-sky-700 rounded focus:outline-none focus:ring-2 focus:ring-sky-950"
//         />
//       </div>
//       <div className="w-full">
//         <label className="block mb-1 text-sm font-medium text-gray-300">Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="w-full px-4 py-2 text-white bg-[#011f26] border border-sky-700 rounded focus:outline-none focus:ring-2 focus:ring-sky-950"
//         />
//       </div>
//       <div className="w-full">
//         <label className="block mb-1 text-sm font-medium text-gray-300">Password:</label>
//         <input
//           type={showPassword ? "text" : "password"}
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           className="w-full px-4 py-2 text-white bg-[#011f26] border border-sky-700 rounded focus:outline-none focus:ring-2 focus:ring-sky-950"
//         />
//         <button
//           type="button"
//           onClick={togglePasswordVisibility}
//           className="absolute right-3 top-10 text-gray-300"
//         >
//           {showPassword ? "Hide" : "Show"}
//         </button>
//       </div>
//       <div className="w-full">
//         <label className="block mb-1 text-sm font-medium text-gray-300">Photo (URL):</label>
//         <input
//           type="url"
//           value={photo}
//           onChange={(e) => setPhoto(e.target.value)}
//           required
//           className="w-full px-4 py-2 text-white bg-[#011f26] border border-sky-700 rounded focus:outline-none focus:ring-2 focus:ring-sky-950"
//         />
//       </div>
//       <div className="w-full">
//         <label className="block mb-1 text-sm font-medium text-gray-300">Country:</label>
//         <select
//           value={country}
//           onChange={(e) => setCountry(e.target.value)}
//           required
//           className="w-full px-4 py-2 text-white bg-[#011f26] border border-sky-700 rounded focus:outline-none focus:ring-2 focus:ring-sky-950"
//         >
//           <option value="" disabled>
//             Select your country
//           </option>
//           {countries.map((country, index) => (
//             <option key={index} value={country}>
//               {country}
//             </option>
//           ))}
//         </select>
//       </div>
//       <button
//         type="submit"
//         className="w-full py-2 font-semibold text-white bg-sky-950 rounded hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
//       >
//         Sign Up
//       </button>
//       <div className="w-full flex items-center justify-center my-4">
//         <div className="w-full h-px bg-gray-500" />
//         <span className="mx-3 text-sm text-gray-300">or</span>
//         <div className="w-full h-px bg-gray-500" />
//       </div>
//       <button
//         type="button"
//         onClick={handleGoogleLogin}
//         className="w-full flex items-center justify-center py-2 bg-gray-200 text-black font-semibold rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
//       >
//         <FcGoogle className="mr-2" size={20} />
//         Sign Up with Google
//       </button>
//     </form>
//   );
// };

// export default Signup;
