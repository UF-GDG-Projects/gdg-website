import React, { createContext, useEffect, useState } from "react";
import {
  User,
  UserCredential,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider, isFirebaseConfigured } from "../lib/firebase";

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  isConfigured: boolean;
  signInWithEmail: (email: string, password: string) => Promise<UserCredential>;
  signUpWithEmail: (
    email: string,
    password: string,
    displayName?: string
  ) => Promise<UserCredential>;
  signInWithGoogle: () => Promise<UserCredential>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const configured = isFirebaseConfigured();

  useEffect(() => {
    if (!configured || !auth || typeof auth.onAuthStateChanged !== "function") {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      },
      (error) => {
        console.error("Firebase auth state change error:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [configured]);

  const signInWithEmail = async (email: string, password: string) => {
    if (!configured) {
      throw new Error(
        "Firebase is not configured. Please add your credentials in .env.local"
      );
    }
    return signInWithEmailAndPassword(auth, email.trim(), password);
  };

  const signUpWithEmail = async (
    email: string,
    password: string,
    displayName?: string
  ) => {
    if (!configured) {
      throw new Error(
        "Firebase is not configured. Please add your credentials in .env.local"
      );
    }
    const cred = await createUserWithEmailAndPassword(
      auth,
      email.trim(),
      password
    );
    if (displayName && cred.user) {
      await updateProfile(cred.user, { displayName: displayName.trim() });
      setUser({ ...cred.user });
    }
    return cred;
  };

  const signInWithGoogle = async () => {
    if (!configured) {
      throw new Error(
        "Firebase is not configured. Please add your credentials in .env.local"
      );
    }
    return signInWithPopup(auth, googleProvider);
  };

  const logout = async () => {
    if (!configured) {
      setUser(null);
      return;
    }
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isConfigured: configured,
        signInWithEmail,
        signUpWithEmail,
        signInWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
