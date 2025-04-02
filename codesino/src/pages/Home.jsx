import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='flex-grow flex items-center justify-center'>
                <h1>Welcome to Codesino</h1>
                <p>Tailwind css is working</p>
            </main>
            <Footer />
        </div>
    );
};

export default Home;