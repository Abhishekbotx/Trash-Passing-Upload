import React from 'react';
import { SocialIcon } from 'react-social-icons/component';

import 'react-social-icons/youtube';
import 'react-social-icons/instagram';
import 'react-social-icons/x';
import { NavLink } from 'react-router-dom';

const Footer = ({ scrollToSection, ourVisionRef, contactUsRef }) => {
    return (
        <footer className="bg-black border-t-2 text-white py-8 -mt-2 px-[10vw]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-bold text-lg mb-4 raleway-medium">ABOUT US</h3>
                    <div className=' space-y-3'>
                        <div onClick={() => scrollToSection(ourVisionRef)} className="hover:underline text-sm poppins cursor-pointer">OUR VISION</div>
                        <div onClick={() => scrollToSection(ourVisionRef)} className="hover:underline text-sm poppins cursor-pointer">OUR MISSION</div>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4 raleway-medium">FAQ's</h3>
                    <div className=' space-y-3'>
                        <NavLink to={'/faq'} className='hover:underline text-sm poppins cursor-pointer'>FAQ </NavLink>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4 raleway-medium">CONTACT US</h3>
                    <NavLink to={'/contactus'}  className="hover:underline poppins cursor-pointer">REACH US</NavLink>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4 raleway-medium">FOLLOW US</h3>
                    <div className="flex space-x-4">
                        <div href="/" target="_blank" rel="noopener noreferrer">
                            <SocialIcon url="https://www.instagram.com" className='border-2 rounded-full border-slate-800' />
                        </div>
                        <div href="https://www.x.com" target="_blank" className='text-2xl' rel="noopener noreferrer">
                            <SocialIcon url="https://www.x.com" className='border-2 rounded-full border-slate-900' />
                        </div>
                        <div href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <SocialIcon url="https://www.youtube.com" className='border-2 rounded-full border-slate-800' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8 text-sm">
                © Copyright 2024 TrashPassing, Inc. All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
