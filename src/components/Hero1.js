import React from 'react';

const Hero1 = () => {
    return (
       
        <div className="hero min-h-screen" style={{backgroundImage: "url(src/assets/umnbcbackground.png)"}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">University of Minnesota Twin Cities Blockchain Club</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero1;
