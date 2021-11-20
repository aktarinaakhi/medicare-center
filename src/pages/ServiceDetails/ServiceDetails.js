import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();

    const [services, setServices] = useState([]);
    const [singleService, setSingleService] = useState({})

    useEffect(() => {
        fetch('/medicare.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    useEffect(() => {
        const foundService = services.find(service => service.id == serviceId);
        setSingleService(foundService);

    }, [services])

    // console.log(services);
    console.log(singleService);

    return (



        <div class="card my-5 container p-5">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={singleService?.imgService} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8 ps-4">
                    <div class="card-body">
                        <h5 class="card-title">{singleService?.serviceName}</h5>
                        <p class="card-text">{singleService?.description}</p>
                        <p class="card-text"><small class="text-muted">Surgury Specialist : <strong>{singleService?.doctorName}</strong></small></p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServiceDetails;