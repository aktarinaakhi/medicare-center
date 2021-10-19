import initializeAuthentication from "../../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, FacebookAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState();

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const auth = getAuth();

    const googleSignIn = () => {
        setIsloading(true);
        return signInWithPopup(auth, googleProvider)

    }

    const facebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
            })

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

    const registration = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });

    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);

    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);

    }

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setError('');
                console.log(user);

            })
    }

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
        isLoading,
        setIsloading,
        registration,
        login,
        handleEmailChange,
        handlePasswordChange,
        error,
        setError,
        facebookSignIn


    }
};

export default useFirebase;