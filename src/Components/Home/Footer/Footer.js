import React from 'react';
import { FaCaretDown } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer bg-[#404040] p-10  text-base-content mt-10">
            <div>
                <h1 className='text-xl'><strong>Shop</strong>Cart</h1>
            </div>
            <div className='flex justify-center'>

                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>

                <a className="link link-hover">Help</a>
            </div>
            <div>
             
                <div className="gap-4">
                    <p class="flex ">
                        <span class="mt-[-5px]">English </span>
                        <FaCaretDown></FaCaretDown>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;