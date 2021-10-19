import React from 'react';
import { Link } from 'react-router-dom';

const Services = (props) => {
    const { imgService, serviceName, Description, id } = props.service || {};

    return (

        <>
            <div className="col" id="services">
                <div className="card">
                    <img src={imgService} className="card-img-top height=300 " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{serviceName}</h5>
                        <p className="card-text">{Description.slice(0, 140)}</p>
                        <Link to={`/serviceDetails/${id}`}>
                            <button className="btn-regular">See Details</button>

                        </Link>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Services;