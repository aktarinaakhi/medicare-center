import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css'

const Doctor = ({ service }) => {
    const { imgDoctor, doctorName, id, specialities } = service;
    return (

        <>
            <div class="col" id="services">
                <div class="card">
                    <img src={imgDoctor} class="card-img-top height=300 " alt="..." />
                    <div class="card-body">
                        <p>{specialities}</p>

                        <h5 class="card-title">{doctorName}</h5>
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