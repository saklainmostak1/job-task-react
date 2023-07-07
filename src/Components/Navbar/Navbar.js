import React from 'react';
import Nav1 from './Nav1';
import Nav2 from './Nav2';
import Nav3 from './Nav3';

const Navbar = () => {
    return (
        <div className=''>
          <div className='mb-4'>
          <Nav1></Nav1>
          </div>
            <hr />
            <Nav2></Nav2>
            <Nav3></Nav3>
        </div>
    );
};

export default Navbar;