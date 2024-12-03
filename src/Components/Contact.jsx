import React from 'react';

const Contact = () => {
    return (
        <div className="p-4 lg:p-8">
            {/* Intro Section */}
            <div className="flex flex-col items-center mt-8 lg:mt-16">
                <div className="text-lg lg:text-2xl text-center">
                    <p className="mb-4">Better yet, see us in person!</p>
                    <p>We love our customers, so feel free to visit during normal business hours.</p>
                </div>
                {/* Info Section */}
                <div className="flex flex-col lg:flex-row lg:gap-44 mt-12 lg:mt-24 items-center">
                    {/* Location */}
                    <p className="text-lg lg:text-xl font-bold">Medicanto</p>
                    {/* Hours */}
                    <div className="flex flex-col text-center mt-6 lg:mt-0">
                        <p className="text-lg lg:text-xl font-semibold mb-4">Hours</p>
                        <div className="text-sm lg:text-base leading-relaxed text-justify lg:text-center">
                            <p>Mon 09:00 am – 05:00 pm</p>
                            <p>Tue 09:00 am – 05:00 pm</p>
                            <p>Wed 09:00 am – 05:00 pm</p>
                            <p>Thu 09:00 am – 05:00 pm</p>
                            <p>Fri 09:00 am – 05:00 pm</p>
                            <p>Sat 09:00 am – 05:00 pm</p>
                            <p>Sun 09:00 am – 05:00 pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
