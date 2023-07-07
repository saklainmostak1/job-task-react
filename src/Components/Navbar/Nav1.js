import React from 'react';
import { FaUserCircle, FaMapMarkerAlt } from "react-icons/fa";

const Nav1 = () => {
    return (
        <div className='flex justify-between mt-7'>
        <h1 className='text-xl'><strong>Shop</strong>Cart</h1>
        <div className='flex '>
           <FaUserCircle></FaUserCircle>
           <p className='mt-[-4px] ml-2'>Sign In</p>
        </div>
    </div>
    );
};

export default Nav1;