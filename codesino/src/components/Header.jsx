import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-2xl font-bold">
                    <a href="/" className="hover:text-gray-200">Codesino</a>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <a href="/" className="hover:text-gray-200">Home</a>
                        </li>
                        <li>
                            <a href="/services" className="hover:text-gray-200">Services</a>
                        </li>
                        <li>
                            <a href="/blog" className="hover:text-gray-200">Blog</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-gray-200">Contact</a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-gray-200">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;