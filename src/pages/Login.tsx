import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaArrowLeft, FaExclamationCircle } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { signInWithEmail, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // If redirected from a protected route, go back there; else go to /profile or /
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || "/profile";

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    try {
      setIsSubmitting(true);
      await signInWithEmail(email, password);
      navigate(from, { replace: true });
    } catch (err: unknown) {
      const authError = err as { code?: string; message?: string };
      if (authError.code === "auth/invalid-credential" || authError.code === "auth/user-not-found" || authError.code === "auth/wrong-password") {
        setError("Invalid email or password. Please try again.");
      } else if (authError.code === "auth/too-many-requests") {
        setError("Too many failed login attempts. Please reset your password or try again later.");
      } else {
        setError(authError.message || "Failed to sign in. Please verify your credentials.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);
    try {
      setIsSubmitting(true);
      await signInWithGoogle();
      navigate(from, { replace: true });
    } catch (err: unknown) {
      const authError = err as { code?: string; message?: string };
      if (authError.code !== "auth/popup-closed-by-user") {
        setError(authError.message || "Google sign in failed. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-off-white flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
      {/* Top Brand Bar */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-dull hover:text-black mb-6 transition-colors"
        >
          <FaArrowLeft className="text-xs" /> Back to Home
        </Link>
        <div className="flex justify-center">
          <img src="/dsc.png" alt="GDG Logo" className="h-12 w-auto" />
        </div>
        <h2 className="mt-4 text-center cal text-3xl tracking-tight text-black">
          Welcome Back
        </h2>
        <p className="mt-1 text-center text-sm text-dull">
          Sign in to test authentication and member access
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-sm rounded-xl border border-gray sm:px-10">
          {error && (
            <div className="mb-5 rounded-md bg-red/10 border border-red/30 p-3.5 text-sm text-red flex items-start gap-2">
              <FaExclamationCircle className="text-base mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Google Sign In */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray rounded-lg shadow-sm bg-white text-sm font-medium text-black hover:bg-gray/20 transition-colors disabled:opacity-50"
          >
            <FcGoogle className="text-xl" />
            <span>Continue with Google</span>
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-grayer" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 text-dull font-mono">
                Or with email
              </span>
            </div>
          </div>

          {/* Email / Password Form */}
          <form className="space-y-4" onSubmit={handleEmailLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-black"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="albert@ufl.edu"
                  className="w-full rounded-lg border border-gray px-3.5 py-2.5 text-sm text-black placeholder-dull/50 focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-semibold uppercase tracking-wider text-black"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-gray px-3.5 py-2.5 text-sm text-black placeholder-dull/50 focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-blue py-2.5 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue/90 focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Signing in..." : "Sign In"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-dull">Don&apos;t have an account? </span>
            <Link
              to="/signup"
              className="font-medium text-blue hover:underline"
            >
              Sign up here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
