import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="mt-5 text-center">
            <img src={notFound} alt="" /> <br />
            <Link to="/home">
                <button className="button my-5">Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;