import React from 'react';
// import image from '../../images/bg-mountain.jpg';

const Home = () => {
    return (
        <div className="container" style={{
            background: `url(/images/bg-mountain-wt.jpg)`,
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
                Home
            </h1>
            <p>
                Welcome to the home page
            </p>
            <div >
                <a href="/about">
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        About
                    </button>
                </a>
                <a href="/products">
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Products
                    </button>
                </a>
                <a href="/services">
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Services
                    </button>
                </a>
                <a href="/contact">
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Contact
                    </button>
                </a>

            </div>
        </div>
    );
};

export default Home;