import React from 'react';

const Services = () => {
    return (

        <div className="container" style={{
            background: `url(/images/services.jpg)`,
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
                Services
            </h1>


            We offer all kinds of services.
            <p>

                <div>
                    <a href="/about">
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            About

                        </button>
                    </a>
                </div>
            </p>
        </div>
    );
};

export default Services;