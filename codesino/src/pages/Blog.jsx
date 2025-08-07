import React from 'react';
import { Link } from "react-router-dom";

import Footer from '../components/Footer'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import "../styles/blog.css";
import BlogContainer from '../components/Blog/BlogContainer';



const Blog = () => {
  return (
    <>
        <ResponsiveAppBar/>
        <BlogContainer/>

        <div className="mt-8 mb-8 text-center">
          <Link to="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            ← Go Back
          </Link>
        </div>
        
                                      
    
    
    </>
  )
}

export default Blog