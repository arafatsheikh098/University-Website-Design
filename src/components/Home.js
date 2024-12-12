import React from 'react';
import '../components/Home.css';
import Logo from '../components/logo.png';
const Home = () => {
    return (
        <section className="header">
            <nav>
                <a href="index.html">
                <img src={Logo} alt="Logo" />
                </a>
                <div className="nav-links">
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/about">ABOUT</a></li>
                        <li><a href="/course">COURSE</a></li>
                        <li><a href="">BLOG</a></li>
                        <li><a href="/contact">CONTACT</a></li>
                    </ul>
                </div>
            </nav>
            <div className="text-box">
                <h1>World's Biggest University</h1>
                <p>
                    Making website is now one of the easiest thing in the world.
                    You just need to learn Html, Css, Javascript and you are good to go
                </p>
                <a href="" className="hero-btn">Visit us to know more</a>
            </div>
        </section>
    );
}

export default Home;
