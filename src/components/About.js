import React from 'react';

const About = () => {
    return (

        <div className="container" style={{
            background: `url(/images/about.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white'


        }}>
            <h1 className="text-3xl font-bold underline text-center">
                About
            </h1>
            <p>
                What are you thing about?
            </p>
        </div>
    );
};

export default About;