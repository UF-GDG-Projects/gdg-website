import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.error("Failed to sign out", err);
    }
  };

  const providerId = user?.providerData[0]?.providerId || "password";
  const providerLabel = providerId === "google.com" ? "Google Account" : "Email & Password";

  return (
    <div className="min-h-screen bg-off-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-dull hover:text-black transition-colors"
          >
            <FaArrowLeft className="text-xs" /> Back to Home
          </Link>
        </div>

        <div className="rounded-xl border border-gray bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 border-b border-grayer pb-6">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || "User avatar"}
                className="h-20 w-20 rounded-full border-2 border-blue object-cover shadow-sm"
              />
            ) : (
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue/10 border-2 border-blue text-blue text-2xl font-bold">
                {user?.displayName ? (
                  user.displayName.charAt(0).toUpperCase()
                ) : (
                  <FaUser className="text-2xl" />
                )}
              </div>
            )}

            <div className="text-center sm:text-left flex-1">
              <h1 className="cal text-2xl font-bold text-black">
                {user?.displayName || "GDG Club Member"}
              </h1>
              <p className="text-sm text-dull mt-0.5">{user?.email}</p>
              <div className="mt-2.5 flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="inline-flex items-center gap-1 rounded-md bg-gray px-2.5 py-1 text-xs text-black font-medium">
                  Provider: {providerLabel}
                </span>
                {user?.emailVerified && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-blue/10 px-2.5 py-1 text-xs text-blue font-medium">
                    <FaCheckCircle className="text-xs" /> Verified
                  </span>
                )}
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-lg border border-red/40 bg-red/5 px-4 py-2 text-xs font-semibold text-red hover:bg-red hover:text-white transition-colors"
            >
              <FaSignOutAlt />
              <span>Sign Out</span>
            </button>
          </div>

          <div className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-dull">
              Account Information
            </h2>
            <div className="mt-3 space-y-2 rounded-lg bg-off-white/80 p-4 font-mono text-xs text-black border border-grayer">
              <div className="flex justify-between flex-wrap gap-1">
                <span className="text-dull">Member ID:</span>
                <span className="font-semibold break-all">{user?.uid}</span>
              </div>
              <div className="flex justify-between flex-wrap gap-1">
                <span className="text-dull">Email:</span>
                <span className="font-semibold">{user?.email}</span>
              </div>
              <div className="flex justify-between flex-wrap gap-1">
                <span className="text-dull">Display Name:</span>
                <span className="font-semibold">{user?.displayName || "None set"}</span>
              </div>
              <div className="flex justify-between flex-wrap gap-1">
                <span className="text-dull">Created:</span>
                <span>{user?.metadata?.creationTime || "Unknown"}</span>
              </div>
              <div className="flex justify-between flex-wrap gap-1">
                <span className="text-dull">Last Sign In:</span>
                <span>{user?.metadata?.lastSignInTime || "Unknown"}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-between items-center pt-4 border-t border-grayer">
            <Link
              to="/"
              className="rounded-lg bg-blue px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue/90 transition-colors"
            >
              Go to Landing Page
            </Link>
            <p className="text-xs text-dull">
              UF GDG
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
