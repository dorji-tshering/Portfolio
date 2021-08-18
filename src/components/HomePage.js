import React from 'react'
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <section className="homepage">
                <p className="home-intro">Hi! I'm Dorji Tshering, a Frontend Developer based in 
                Thimphu, Bhutan.</p>

                <p>I am a self-taught programmer. It has been about a year since I started 
                programming. Within that span of time, I have equipped myself with skills 
                and explored several programming languages and frameworks. Currently I'm making 
                best use of ReactJs Framework for my personal projects.</p>
                <br/><hr/><br/>

                <h1>my projects</h1>
                
                <Link to="/projects" className="to-projects">see more</Link>
                <br/><hr/><br/>
                <h1>about me</h1>
                <p>I have always been fascinated by codes and programs. I always end up thinking
                what could I possibly achieve with these amazing tools at my hand and the answer
                to that curiousity is unlimited. I am always and deeply moved by beautiful codes.</p>
                <Link to="/about" className="to-about">read more</Link>
            </section>
        </>
    )
}

export default HomePage;
