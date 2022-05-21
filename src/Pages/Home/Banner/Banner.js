import React from 'react';
import chair from '../../../assets/images/chair.png'
import banerbg from '../../../assets/images/bg.png'


const Banner = () => {
    return (
        <div class="hero min-h-screen px-16 bg-banner-back " style={{ backgroundImage: `url(${banerbg})` }}>


            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">We here propose a doctor patient handling, managing system that helps doctors in their work and also patients to book doctor appointments and view medical progress.</p>
                    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;