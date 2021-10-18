import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../components/hooks/useAuth';
import "./Login.css"

const Login = () => {
    const { googleSignIn } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_url);
            });

    };
    return (
        <div className="text-center mt-5">

            <input className="input-field" placeholder="Enter email" type="email" /> <br />
            <input className="input-field mt-4" type="password" placeholder="Enter password" /> <br />
            <input className="my-4 btn-regular px-5" type="submit" value="login" /><br />
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
    );
};

export default Login;