import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaArrowLeft, FaExclamationCircle } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";

export default function SignUp() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { signUpWithEmail, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please provide an email and password.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setIsSubmitting(true);
      await signUpWithEmail(email, password, displayName);
      navigate("/profile");
    } catch (err: unknown) {
      const authError = err as { code?: string; message?: string };
      if (authError.code === "auth/email-already-in-use") {
        setError("An account with this email already exists. Try signing in.");
      } else if (authError.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else if (authError.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError(authError.message || "Failed to create an account. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setError(null);
    try {
      setIsSubmitting(true);
      await signInWithGoogle();
      navigate("/profile");
    } catch (err: unknown) {
      const authError = err as { code?: string; message?: string };
      if (authError.code !== "auth/popup-closed-by-user") {
        setError(authError.message || "Google sign-up failed. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-off-white flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
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
          Join UF GDG
        </h2>
        <p className="mt-1 text-center text-sm text-dull">
          Create an account to test member onboarding
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
            onClick={handleGoogleSignUp}
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray rounded-lg shadow-sm bg-white text-sm font-medium text-black hover:bg-gray/20 transition-colors disabled:opacity-50"
          >
            <FcGoogle className="text-xl" />
            <span>Sign up with Google</span>
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
          <form className="space-y-4" onSubmit={handleEmailSignUp}>
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold uppercase tracking-wider text-black"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Albert Gator"
                  className="w-full rounded-lg border border-gray px-3.5 py-2.5 text-sm text-black placeholder-dull/50 focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
                />
              </div>
            </div>

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
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  className="w-full rounded-lg border border-gray px-3.5 py-2.5 text-sm text-black placeholder-dull/50 focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-xs font-semibold uppercase tracking-wider text-black"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repeat your password"
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
                {isSubmitting ? "Creating account..." : "Create Account"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-dull">Already have an account? </span>
            <Link
              to="/login"
              className="font-medium text-blue hover:underline"
            >
              Sign in here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
