import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    return (
        <div className='service'>
            <img src={service.thumbnail} alt='service-image' />
            <div className='text-container'>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <Link to={`/service/${service.id}`} onClick={() => window.scrollTo(0, 0)}>جزیات بیشتر</Link>
            </div>
        </div>
    )
}

export default Service;