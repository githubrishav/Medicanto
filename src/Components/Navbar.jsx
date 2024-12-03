import React, { useState, } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "./../assets/logo.png"
import { MdAccountCircle } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { IoMdClose } from "react-icons/io";





const Navbar = () => {


        const [isOpen, setisOpen] = useState(false);

        const toggle = () => {
                setisOpen(!isOpen)
        }
        console.log(isOpen)


        return (

                // Navbar Starts Here
                <nav>
                        <div className=" flex py-4 px-8  ">
                                <div className="flex w-full lg:justify-end items-center lg:gap-12 lg:px-40 justify-between">
                                        <div className="lg:hidden">
                                                <RxHamburgerMenu onClick={toggle} />
                                        </div>
                                        <div className=" lg:w-full lg:text-center lg:text-3xl lg:ml-[8rem] px-9 py-1 ">
                                                <p className='font-serif'>Medicanto</p>

                                        </div>
                                        <div className=" text-2xl lg:text-3xl ">
                                                <IoMdCart />
                                        </div>
                                        <div className="hidden lg:block text-3xl">
                                                <MdAccountCircle />
                                        </div>
                                </div>

                        </div>
                        {isOpen && <div className=" bg-white h-screen w-full lg:hidden md:hidden absolute top-0 ">
                                <div className=" ml-[25rem]  ">
                                        <IoMdClose onClick={() => { setisOpen(!isOpen) }} className=' mt-4  cursor-pointer text-3xl mr-' />
                                </div>
                                <div className="ml-12 mt-4">
                                        <p className='text-xl mb-2 ml-4' >Account</p>
                                        <hr />
                                        <div className="flex gap-8 flex-col ml-4">
                                                <p className='text-2xl mt-8'>My Account</p>
                                                <p className='text-2xl'>Bookings</p>
                                                <p className='text-2xl'>Contact</p>

                                        </div>

                                </div>

                        </div>}

                </nav>
        )
}

export default Navbar