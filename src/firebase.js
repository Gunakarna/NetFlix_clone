import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { toast } from "react-toastify";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuPfOXWQAiYejBALLz0gFK2s-Uc3_i5ZA",
  authDomain: "netflix-indian.firebaseapp.com",
  projectId: "netflix-indian",
  storageBucket: "netflix-indian.firebasestorage.app",
  messagingSenderId: "586651794424",
  appId: "1:586651794424:web:97b70baede28bed0c5b40d",
  measurementId: "G-NZFBBJM2LX",
};

const app = initializeApp(firebaseConfig);

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      email,
      authProvider: "local",
    });
  } catch (error) {
    console.error("Error logging in:", error);
    const code = error.code.replace("auth/", "").replace(/-/g, " ");
    toast.error(code); //
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (error) {
    console.error("Error logging in:", error);
    const code = error.code.replace("auth/", "").replace(/-/g, " ");
    toast.error(code); // 👉 shows "invalid credential"
    throw error;
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout error:", error);
    toast.error(error.message);
  }
};

export { auth, db, signup, login, logout, analytics };
