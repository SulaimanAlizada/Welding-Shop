import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <hr />
            <ul className='cta-container'>
                <li><a className='phone' href="tel:+0790001918" title='شماره تماس خلیفه'>0790001918</a></li>
                <li><a className='phone' href="tel:+0787944885" title='شماره تماس خلیفه'>0787944885</a></li>
            </ul>
            <address title='آدرس'>آدرس: دهمزنگ، روبروی تانگ تیل  ، پل شیردروازه، فلز کاری حیدری</address>
            <p>ساخته شده توسط سلیمان حسنی</p>
        </footer>
    )
}

export default Footer;