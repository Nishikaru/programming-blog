import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between items-center px-80 py-3 bg-black/80 text-white'>
            <div className='text-2xl font-bold'>
            <Link to='/'>Brand Name</Link>
            </div>
            <div className='flex gap-3 text-lg font-medium'>
                <Link to='#'>link 1</Link>
                <Link to='#'>link 2</Link>
                <Link to='#'>link 3</Link>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;