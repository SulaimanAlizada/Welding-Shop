import React from 'react';
// Data
import { features } from '../Assets/data';
import Service from './Service.jsx';
import Hero from './Hero.jsx';

const Home = () => {
    return (
        <>
            <Hero />
            {features.map((service, index) => { return <Service key={index} service={service} /> })}
        </>
    )
}

export default Home;