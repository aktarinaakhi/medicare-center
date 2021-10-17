import initializeAuthentication from "../../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState();
    // const [error, setError] = useState();

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, []);

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        })
    }

    return {
        googleSignIn,
        user,
        logOut
    }
};

export default useFirebase;