import initializeAuthentication from "../../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);
    // const [error, setError] = useState();

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn = () => {
        setIsloading(true);
        return signInWithPopup(auth, googleProvider)

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsloading(false)
        });
    }, []);

    const logOut = () => {
        setIsloading(true)
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsloading(false))
    }

    return {
        googleSignIn,
        user,
        logOut,
        isLoading
    }
};

export default useFirebase;