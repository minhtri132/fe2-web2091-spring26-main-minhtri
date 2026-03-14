import { useState } from "react";

function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!emailRegex.test(form.email)) {
      setError("Email không đúng định dạng");
      return;
    }

    if (form.password.length < 6) {
      setError("Password tối thiểu 6 ký tự");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Confirm Password không trùng");
      return;
    }

    setError("");
    alert("Đăng ký thành công");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full border px-3 py-2 mb-3 rounded"
          onChange={handleChange}
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border px-3 py-2 mb-3 rounded"
          onChange={handleChange}
        />

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="w-full border px-3 py-2 mb-3 rounded"
          onChange={handleChange}
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border px-3 py-2 mb-3 rounded"
          onChange={handleChange}
        />

        {/* Confirm Password */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="w-full border px-3 py-2 mb-3 rounded"
          onChange={handleChange}
        />

        {error && (
          <p className="text-red-500 text-sm mb-3">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;