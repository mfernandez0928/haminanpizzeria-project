import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { authAPI } from "../services/api";
import { useAuthStore } from "../store/store";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await authAPI.login(formData);
      setUser(response.data.user, response.data.token);
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1D1C1C] pt-24 px-4">
      <div className="container mx-auto max-w-md">
        <div className="bg-[#2a2a2a] rounded-lg p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">
            Welcome Back
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#1D1C1C] text-white border border-[#C4007F] rounded-lg focus:outline-none focus:border-[#F3B404]"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-white mb-2 font-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#1D1C1C] text-white border border-[#C4007F] rounded-lg focus:outline-none focus:border-[#F3B404]"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#C4007F] text-white py-2 rounded-lg font-semibold hover:bg-[#a60064] transition disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Sign In"}
            </button>
          </form>

          <p className="text-center text-white mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#F3B404] hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
