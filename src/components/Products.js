import React from 'react';

const Products = () => {
    return (
        <div className="container" style={{
            background: `url(/images/bg-mountain.jpg)`,
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
                Products
            </h1>

            <p>
                List of products we have
                <ul>
                    <li>product 1</li>
                    <li>product 2</li>
                    <li><a href='/about'>Dont click me</a></li>
                </ul>
            </p>
        </div>
    );
};

export default Products;