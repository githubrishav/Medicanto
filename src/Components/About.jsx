import React from 'react';
import about from './../assets/about.webp';
import contact from "./../assets/contact.jpg"

const About = () => {
        return (
                <div className="p-4 lg:p-8 bg-gray-100">
                        <div className="lg:ml-24 lg:mr-24 lg:mt-20 lg:flex lg:justify-center">
                                {/* Image Section */}
                                <div className="lg:w-[41.85rem]">
                                        <img className="w-full rounded-md shadow-lg" src={about} alt="About us" />
                                </div>
                                {/* Text Section */}
                                <div className="flex flex-col items-center lg:items-start lg:ml-10 lg:w-[36rem] mt-6 lg:mt-0">
                                        <p className="font-bold text-xl lg:text-2xl mb-6 text-center lg:text-left">
                                                Commitment to Innovation
                                        </p>
                                        <p className="text-gray-700 text-sm lg:text-lg leading-relaxed text-center lg:text-left">
                                                Our company understands the technology and medicine in the health care industry are consistently progressing. Our team of experienced professionals stays current about the latest drug trends.
                                        </p>
                                </div>
                        </div>
                        <div className="cc p-4">
                                {/* Title Section */}
                                <div className="flex justify-center lg:justify-start lg:ml-24 mt-10">
                                        <p className="text-xl lg:text-2xl font-bold">OUR APPOINTMENTS</p>
                                </div>

                                {/* Content Section */}
                                <div className="flex justify-center mt-8">
                                        <p className="shadow-md text-lg lg:text-3xl text-gray-500 lg:px-32 px-4 py-6 bg-gray-200 text-center max-w-4xl">
                                                New services are coming soon!
                                        </p>
                                </div>
                        </div>
                       
                </div>
        );
};

export default About;
