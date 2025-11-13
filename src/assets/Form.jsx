import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // install react-icons

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on typing
  };

  // Validate fields
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstname.trim()) newErrors.firstname = "First name is required";
    if (!formData.lastname.trim()) newErrors.lastname = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (!formData.confirmPassword.trim())
      newErrors.confirmPassword = "Confirm password is required";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);

    // if no errors, submit form
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };

  return (
    <div className="flex justify-center bg-black py-45">
      <form className="form bg-[#1a1a1a] p-8 rounded-2xl text-white w-[350px]" onSubmit={handleSubmit}>
        <p className="title text-2xl font-bold mb-2">Register</p>
        <p className="message mb-6 text-gray-400">
          Signup now and get full access to our app.
        </p>

        {/* First & Last Name */}
        <div className="flex gap-2">
          <label className="flex flex-col w-1/2 relative">
            <input
              className="input bg-transparent border border-gray-600 rounded px-3 py-2 text-white"
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
            <span className="text-sm text-gray-400 mt-1">Firstname</span>
            {errors.firstname && (
              <p className="text-red-500 text-xs absolute bottom-[-18px]">{errors.firstname}</p>
            )}
          </label>

          <label className="flex flex-col w-1/2 relative">
            <input
              className="input bg-transparent border border-gray-600 rounded px-3 py-2 text-white"
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
            <span className="text-sm text-gray-400 mt-1">Lastname</span>
            {errors.lastname && (
              <p className="text-red-500 text-xs absolute bottom-[-18px]">{errors.lastname}</p>
            )}
          </label>
        </div>

        {/* Email */}
        <label className="flex flex-col relative mt-6">
          <input
            className="input bg-transparent border border-gray-600 rounded px-3 py-2 text-white"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span className="text-sm text-gray-400 mt-1">Email</span>
          {errors.email && (
            <p className="text-red-500 text-xs absolute bottom-[-18px]">{errors.email}</p>
          )}
        </label>

        {/* Password */}
        <label className="flex flex-col relative mt-6">
          <input
            className="input bg-transparent border border-gray-600 rounded px-3 py-2 text-white pr-10"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <span className="text-sm text-gray-400 mt-1">Password</span>
          <button
            type="button"
            className="absolute right-3 top-3 text-gray-400"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye /> :<FaEyeSlash />}
          </button>
          {errors.password && (
            <p className="text-red-500 text-xs absolute bottom-[-18px]">{errors.password}</p>
          )}
        </label>

        {/* Confirm Password */}
        <label className="flex flex-col relative mt-6">
          <input
            className="input bg-transparent border border-gray-600 rounded px-3 py-2 text-white pr-10"
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <span className="text-sm text-gray-400 mt-1">Confirm password</span>
          <button
            type="button"
            className="absolute right-3 top-3 text-gray-400"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <FaEye /> :<FaEyeSlash />}
          </button>
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs absolute bottom-[-18px]">
              {errors.confirmPassword}
            </p>
          )}
        </label>

        {/* Submit */}
        <button
          className="submit bg-blue-500 hover:bg-blue-600 text-white py-2 mt-8 rounded-lg w-full transition"
          type="submit"
        >
          Submit
        </button>

        <p className="signin text-gray-400 mt-4 text-sm text-center">
          Already have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Signin
          </a>
        </p>
      </form>
    </div>
  );
};

export default Form;
