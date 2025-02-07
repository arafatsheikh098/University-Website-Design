import React, { useState } from 'react';
import '../components/Home.css';
import Logo from '../components/logo.png';
import image from '../components/image.png'; 
import { FaBars, FaTimes } from 'react-icons/fa';

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <section className="header">
                <nav>
                    <a href="index.html">
                        <img src={Logo} alt="Logo" />
                    </a>
                    <div className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks">
                        <FaTimes className="fa-icon close-icon" onClick={toggleMenu} />
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/about">ABOUT</a></li>
                            <li><a href="/course">COURSE</a></li>
                            <li><a href="/blog">BLOG</a></li>
                            <li><a href="/contact">CONTACT</a></li>
                        </ul>
                    </div>
                    <FaBars className="fa-icon menu-icon" onClick={toggleMenu} />
                </nav>
                <div className="text-box">
                    <h1>World's Biggest University</h1>
                    <p>
                        Making a website is now one of the easiest things in the world.
                        You just need to learn HTML, CSS, JavaScript, and you are good to go.
                    </p>
                    <a href="#" className="hero-btn">Visit us to know more</a>
                </div>
            </section>

            <section className="course">
                <h1>Courses We Offer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                <div className="row">
                    <div className="course-col">
                        <h3>Intermediate</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque aliquet turpis nulla, eleifend faucibus est sollicitudin ut.
                        </p>
                    </div>
                    <div className="course-col">
                        <h3>Degree</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque aliquet turpis nulla, eleifend faucibus est sollicitudin ut.
                        </p>
                    </div>
                    <div className="course-col">
                        <h3>Post Graduation</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque aliquet turpis nulla, eleifend faucibus est sollicitudin ut.
                        </p>
                    </div>
                </div>
            </section>

            {/* Campus Section */}
            <section className="campus">
                <h1>Our Global Campus</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                <div className="row">
                    <div className="campus-col">
                        <img src={image} alt="Campus" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
