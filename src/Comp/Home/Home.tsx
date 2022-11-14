import React from 'react';

const Home = () => {
    return (
        <div className='px-80 py-6'>
            <header className='bg-black/40 p-4 rounded text-white flex items-center justify-between'>
                <h1 className='text-4xl font-medium'>বাংলায় প্রোগ্রামিং ব্লগে স্বাগতম</h1>
                <img className='w-[50%] rounded' src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190813181110/7-Tips-and-Tricks-to-Learn-Programming-Faster.png" alt="" />
            </header>
        </div>
    );
};

export default Home;