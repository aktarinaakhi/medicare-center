import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner/Banner'
import Doctor from './Doctor/Doctor';
import OurTeam from './OurTeam/OurTeam';
import Services from './Services';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./medicare.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id="home">
            <Banner></Banner>

            <div id="services">
                <h2 className="text-center mt-5">Our <span className="span">Services</span> </h2>
                <div className="row row-cols-1 row-cols-md-3 g-5 container mx-auto my-5" >

                    {
                        services.slice(0, 6)?.map(service => <Services
                            key={service.id}
                            service={service}
                        >
                        </Services>)
                    }

                </div>
            </div>

            <OurTeam></OurTeam>

            <div id="doctor">
                <h2 className="text-center mt-5"> Meet Our <span className="span">Doctors</span> </h2>

                <div className="row row-cols-1 row-cols-md-3 g-5 container mx-auto my-5" >

                    {
                        services.map(service => <Doctor
                            key={service.id}
                            service={service}
                        >
                        </Doctor>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Home;