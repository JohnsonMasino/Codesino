import React from 'react'

import Footer from '../components/Footer'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import "../styles/blog.css";
import BlogContainer from '../components/Blog/BlogContainer';



const Blog = () => {
  return (
    <>
        <ResponsiveAppBar/>
        <BlogContainer/>
        
        <Footer/>
                                      
    
    
    </>
  )
}

export default Blog