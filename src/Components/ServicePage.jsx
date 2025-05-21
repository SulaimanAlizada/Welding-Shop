import React from 'react';
import './ServicePage.css';
import { features } from '../Assets/data.js';
import { useParams } from 'react-router-dom';

const ServicePage = () => {
    var { serviceId } = useParams();
    var service = features.find((feature) => feature.id === Number(serviceId));

    return (
        <div className='service-page'>
            <h1 className='title'>{service.title}</h1>
            <p className='desc'>{service.description}</p>
            <ul className='features-container'>
                {service.features.map(
                    (item, index) => { return <li key={index} className='feature'>{item.detail} <span>{" :"+item.name}</span></li> }
                )}
            </ul>
            <section className='images'>
                {service.imgs.map((img) => { return <img className='service-img' src={img} alt='عکس محصول' /> })}
            </section>
        </div>
    )
}

export default ServicePage;