"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.username.trim() || !formData.password.trim()) {
      setError("Please enter valid details");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username.trim(),
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfaf4] px-4">
      <form
        onSubmit={handleLogin}
        className="relative w-full max-w-md bg-white rounded-3xl border border-[#ead9a3] shadow-[0_20px_60px_rgba(184,146,42,0.15)] p-8 overflow-hidden"
      >
        {/* Top Gradient */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b8922a] to-[#d4a843]" />

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-2xl bg-[#fdf6e3] border border-[#ead9a3] flex items-center justify-center shadow-sm">
            <svg
              className="w-10 h-10 text-[#b8922a]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#1a1a1a] tracking-tight">
            Admin Portal
          </h1>

          <p className="mt-2 text-sm uppercase tracking-[4px] font-semibold text-[#b8922a]">
            SRS Institute
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 text-center">
            {error}
          </div>
        )}

        {/* Username */}
        <div className="mb-5">
          <label className="mb-2 block text-xs font-bold uppercase tracking-[2px] text-gray-600">
            Username
          </label>

          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A9 9 0 1118.88 17.8"
              />
            </svg>

            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              autoComplete="username"
              disabled={loading}
              placeholder="Enter admin username"
              className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 text-gray-800 outline-none transition-all focus:border-[#b8922a] focus:ring-4 focus:ring-[#b8922a20]"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-8">
          <label className="mb-2 block text-xs font-bold uppercase tracking-[2px] text-gray-600">
            Password
          </label>

          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m6-6V7a6 6 0 10-12 0v4"
              />
            </svg>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              disabled={loading}
              placeholder="Enter admin password"
              className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 text-gray-800 outline-none transition-all focus:border-[#b8922a] focus:ring-4 focus:ring-[#b8922a20]"
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full rounded-xl py-3 font-bold uppercase tracking-[2px] text-white transition-all duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-[#b8922a] to-[#d4a843] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(184,146,42,0.35)] active:scale-[0.98]"
          }`}
        >
          {loading ? "Checking..." : "Login to Dashboard"}
        </button>
      </form>
    </div>
  );
}