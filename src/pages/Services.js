import React from 'react';
import { Link } from 'react-router-dom';

const Services = (props) => {
    const { imgService, serviceName, Description, id } = props.service;
    console.log(props);
    return (

        <>
            <div class="col" id="services">
                <div class="card">
                    <img src={imgService} class="card-img-top height=300 " alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{serviceName}</h5>
                        <p class="card-text">{Description.slice(0, 140)}</p>
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