import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <header>
            <div className="container">
                <div className='d-none d-md-block'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                        <Link href="/"><Image alt="logo" src="/images/logo_black.webp" width={50} height={50} priority/></Link>
                        </div>
                        <ul className='m-0 p-0'>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/events">Events</Link></li>
                            <li><Link href="/about-us">About Us</Link></li>
                        </ul>
                    </div>
                </div>

                
            {/* mobile nav */}
            <div className='d-md-none'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <Link href="/"><Image alt="logo" src="/images/logo_black.webp" width={50} height={50} priority/></Link>
                    </div>
                    <button className='btn secondary' onClick={handleShow}>Menu</button>
                </div>

                <Offcanvas placement='end' show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton className='border-bottom'>
                        <Offcanvas.Title>Menus</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul className=' d-flex-col m-0 p-0'>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/events">Events</Link></li>
                            <li><Link href="/about-us">About Us</Link></li>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            </div>


        </header>
    );
};

export default Header;