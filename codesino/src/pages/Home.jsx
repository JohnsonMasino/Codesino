import React from 'react';
import Header from '../components/Header.jsx';

const Home = () => {
    return (
        <div style={{ textAlign: 'center'}} className='p-[1px]' >
            <Header />
            <h1>Welcome to Codesino</h1>
            <p>Tailwind css is installed fine!</p>
        </div>
    );
};

export default Home;