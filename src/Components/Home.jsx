import React from 'react';
import wall from "./../assets/wall.webp";

const Home = () => {
    return (
        <div className=''>
            <div className="lg:ml-24 lg:mr-24 lg:mt-20 lg:flex lg:justify-center p-4 ">
                <div className="lg:w-[41.85rem]">
                    <img className="w-full" src={wall} alt="" />
                </div>
                <div className="flex bg-slate-200 flex-col lg:flex-row">
                    <div className="flex flex-col items-center mt-4 lg:mt-20 lg:ml-10 lg:mr-8">
                        <p className='mb-4 lg:mb-12 text-lg lg:text-2xl'>Welcome</p>
                        <p className='text-lg lg:text-3xl'>Connecting You With</p>
                        <p className='text-lg lg:text-3xl'>Health Support</p>
                        <p className='text-sm lg:text-xl mt-2 lg:mt-4'>We're Dedicated to Your Health</p>
                        <button className='px-8 py-2 lg:px-12 lg:py-3 bg-black text-white mt-6 lg:mt-12 mb-10 lg:mb-16'>BOOK ONLINE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
