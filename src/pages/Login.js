import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../components/hooks/useAuth';
import "./Login.css"

const Login = () => {
    const { googleSignIn, setIsloading, login, handleEmailChange, handlePasswordChange, facebookSignIn, error, setError } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_url);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsloading(false));
    };
    return (
        <>
            <div className="form-container mx-auto mt-5" >
                <h1 className="mb-5">Sign In to <span className="span">MEDICARE</span></h1>
                <div className="row my-4">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onChange={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onChange={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>

                <p className="text-danger">{error}</p>
                <button onClick={login} type="submit" className=" my-3 btn-regular">login</button> <br />
            </div>

            <div className="mx-auto form-container">
                <span className="mt-4">New to medicare center? </span>
                <Link to="/signup">Create account</Link>
                <div className="d-flex ms-5 ps-5 mt-3"><hr className="w-25" /> <small>OR</small> <hr className="w-25" /></div>
                <div className="btn-div mt-4">
                    <button onClick={handleGoogleSignIn} className="button"><i className="bi bi-google"></i> Continue with Google</button> <br />
                    <button onClick={facebookSignIn} className="button"><i className="bi bi-facebook"></i>Continue with Facebook</button>
                </div>
                <h5 className="text-success my-3 text-center">Why crete an Account ?</h5>
                <p className="text-xl-center mb-5">By creating this account, you agree to our <span className="text-success">Privacy Policy</span> &  <span className="text-success"> Cookie Policy </span> </p>
            </div>

        </>

    );
};

export default Login;