import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar  shadow-sm ">
                <div className="navbar-start">

                    <h1 className=' text-xl lg:text-2xl font-bold font-inter '>CS — Ticket System</h1>
                </div>

                <div className="navbar-end">
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Changelog</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Download</a></li>
                            <li><a>Contact</a></li>
                            <button className='btn   bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white'>+ Add Ticket</button>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content   rounded-box z-50 mt-3 w-52 p-2 shadow-xl absolute right-0 ">
                            <li><a>Home</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Changelog</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Download</a></li>
                            <li><a>Contact</a></li>
                            <button className='btn   bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white'>+ Add Ticket</button>

                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;