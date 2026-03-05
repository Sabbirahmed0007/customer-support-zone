import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className='bg-black pt-10'>
        <div className='grid grid-cols-1 lg:grid-cols-5 items-start justify-around gap-5 box-border  font-inter p-5'>

            {/* First col */}

            <div>
                <h1 className=' text-xl lg:text-2xl font-bold font-inter mb-3'>CS — Ticket System</h1>
                <p className='text-gray-400 text-xs'>
                    We provide a smart and efficient customer support platform designed to help businesses manage and resolve customer issues seamlessly.

                    From login issues and payment failures to subscription problems and technical bugs, our platform ensures that every concern is properly recorded, monitored, and addressed.
                </p>
            </div>
            {/* Second Col */}
            <div>
                <h1 className='text-lg font-semibold'>Company</h1>
                <div className='text-gray-400 space-y-2 mt-2'>
                    <li className='list-none'><a href="">About Us</a></li>
                    <li className='list-none'><a href="">Our Mission</a></li>
                    <li className='list-none'><a href="">Contact</a></li>

                </div>
            </div>
            {/* Third Col */}
            <div>
                <h1 className='text-lg font-semibold'>Services</h1>
                <div className='text-gray-400 space-y-2 mt-2'>
                    <li className='list-none'><a href="">Products & Services</a></li>
                    <li className='list-none'><a href="">Customer stories</a></li>
                    <li className='list-none'><a href="">Download Apps</a></li>

                </div>
            </div>
            {/* Fourth Col */}
            <div>
                <h1 className='text-lg font-semibold'>Information</h1>
                <div className='text-gray-400 space-y-2 mt-2'>
                    <li className='list-none'><a href="">Privacy Policy</a></li>
                    <li className='list-none'><a href="">Terms & Conditions</a></li>
                    <li className='list-none'><a href="">Join Us</a></li>

                </div>
            </div>
            {/* fifth Col */}
            <div>
                <h1 className='text-lg font-semibold'>Social Links</h1>
                <div className='text-gray-400 space-y-2 mt-2'>

                    <li className='list-none'><a href="" className='flex items-center  gap-2'><FaXTwitter></FaXTwitter> CS - Ticket System</a></li>
                    <li className='list-none'><a href="" className='flex items-center  gap-2'><FaLinkedin />
                        CS - Ticket System</a></li>
                    <li className='list-none'><a href="" className='flex items-center  gap-2'><FaFacebook></FaFacebook> CS - Ticket System</a></li>
                    <li className='list-none'><a href="" className='flex items-center  gap-2'><MdEmail/> CS - Ticket System</a></li>

                </div>
            </div>

            </div>
            <div className="footer sm:footer-horizontal footer-center text-base-content p-4  border-t-1 border-gray-500">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className='uppercase font-semibold'>CS — Ticket System</span> </p>
                </aside>
            </div>

        </div>
    );
};

export default Footer;