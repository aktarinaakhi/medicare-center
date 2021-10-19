import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../components/hooks/useAuth';
import "./Login.css"

const Login = () => {
    const { googleSignIn, setIsloading, login, handleEmailChange, handlePasswordChange } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_url);
            })
            .finally(() => setIsloading(false));
    };
    return (
        <>
            <div className="w-50 mx-auto mt-5 text-center" >
                <h1>Please <span className="span mb-5">login</span></h1>
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
                <button onClick={login} type="submit" className=" my-3 btn-regular">login</button> <br />

            </div>

            <div className="text-center">
                <span className="mt-4">New to medicare center? </span>
                <Link to="/signup">Create account</Link>
                <div> -------------------or-------------------</div>
                <div className="btn-div mt-4">
                    <button onClick={handleGoogleSignIn} className="button px-4"><i className="bi bi-google"></i>Google</button> <br />
                    <button className="button"><i className="bi bi-facebook"></i>Facebook</button>
                </div>
                <h5 className="text-success my-3 text-center">Why crete an Account ?</h5>
                <p className="text-xl-center mb-5">By creating this account, you agree to our <span className="text-success">Privacy Policy</span> &  <span className="text-success"> Cookie Policy </span> </p>
            </div>

        </>

    );
};

export default Login;