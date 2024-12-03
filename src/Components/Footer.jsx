import React from 'react';

const Footer = () => {
    return (
        <div className="flex flex-col items-center mt-12 px-4 lg:px-8 ">
            {/* Title */}
            <p className="text-2xl lg:text-4xl font-medium mb-4">Subscribe</p>
            {/* Subtitle */}
            <p className="text-lg lg:text-2xl mb-8 lg:mb-12 text-gray-600 text-center">
                Sign up to receive updates, news, and more.
            </p>
            {/* Subscription Form */}
            <div className="flex flex-col items-center mb-12 w-full">
                <div className="flex items-center w-full max-w-5xl">
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="w-[80%] lg:w-[60%] px-4 py-2 border border-gray-800 rounded-md text-sm lg:text-base lg:ml-52"
                    />
                    <button className="ml-4 px-6 py-2 lg:py-4 bg-black text-white rounded-md text-sm lg:text-base">
                        SIGN UP
                    </button>
                </div>
            </div>
            {/* Copyright */}
            <p className="text-sm lg:text-base text-center text-gray-500">
                Copyright © 2024 Medicanto - All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;
