import React from 'react'
import '../styles/AboutPage.css';
import dorji from '../assets/images/kasol.jpg';
const AboutPage = () => {
    return (
        <>
            <section className="aboutpage">
                <img src={dorji} alt="Dorji Tshering at Kasol, India" />
                <p>Hello there, I completed High School Diploma in the year 2016,
                got government scholarship to study in India and persued B.Tech 
                Mechanical Engineering. However, due to medical reasons, I had to 
                drop out of college after 2 follwing years i.e in 2019.</p>
                <br/>
                <p>I didn't have any plan after that on what to do with my life.
                Wasted some time of my life then! But then when all things seemed lost,
                I found myself diving deep into coding with C language. I still don't 
                know how I ended up doing what I did but there lied my passion. 
                I loved it, I loved coding, solving problems, creating algorithms, 
                and cracking data structures.</p>
                <br/>
                <p></p>
            </section>
        </>
    )
}

export default AboutPage;