import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css'

const Doctor = ({ service }) => {
    const { imgDoctor, doctorName, id, specialities, days } = service;
    return (

        <>
            <div className="col" id="services">
                <div className="card">
                    <img src={imgDoctor} className="card-img-top height=300 " alt="..." />
                    <div className="card-body">
                        <p>{specialities}</p>
                        <h5 className="card-title">{doctorName}</h5>

                        <small>{days}</small> <br />
                        <Link to={`/serviceDetails/${id}`}>
                            <button className="doctor-btn my-3">Get appointment - </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Doctor;