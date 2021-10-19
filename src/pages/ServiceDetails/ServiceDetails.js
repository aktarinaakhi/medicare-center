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
        <div>
            <h2>Service details {serviceId}</h2>
            <img src={singleService?.imgService} class="img-fluid rounded-start" alt="..." />
            <h5 class="card-title">{singleService?.serviceName}</h5>
            {/* <p>{singleService.Description}</p> */}

            {/* 
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={singleService.imgService} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{singleService.serviceName}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ServiceDetails;