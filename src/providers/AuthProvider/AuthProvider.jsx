import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, db } from "../../services/firebase/config";
import { doc, onSnapshot, setDoc } from "firebase/firestore";

export const AuthContext = createContext({
  user: null,
  isRefreshing: true,
  googleSignIn: async () => {},
  goggleSignOut: async () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (!currentUser) return;
        const { displayName, email, photoURL, uid } = currentUser;

        setCurrentUser({ displayName, email, photoURL, uid });
      } catch (error) {
        console.error(error);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!currentUser) {
      setIsRefreshing(false);
      return;
    }
    const unsubscribe = onSnapshot(
      doc(db, "users", currentUser.uid),
      async (document) => {
        const user = document.data();

        if (!user) {
          try {
            const { photoURL: avatar, email, displayName: name } = currentUser;

            const userData = {
              avatar,
              email,
              name,
              role: "admin",
            };

            console.log("userData", userData);
            await setDoc(doc(db, "users", currentUser.uid), userData);
            setUser(userData);
            setIsRefreshing(false);
          } catch (error) {
            console.error(error);
          }
          return;
        }

        setUser(user);
        setIsRefreshing(false);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [currentUser]);

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);

      return true;
    } catch (error) {
      console.error(error);
    }
  };

  const goggleSignOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, isRefreshing, googleSignIn, goggleSignOut }}
    >
      {isRefreshing ? <h2>...Refreshing</h2> : children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
