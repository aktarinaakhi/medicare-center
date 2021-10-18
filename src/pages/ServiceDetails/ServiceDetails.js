import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Service details {serviceId}</h2>
        </div>
    );
};

export default ServiceDetails;