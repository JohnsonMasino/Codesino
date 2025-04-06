import React from 'react'
import BlogCards from '../components/Blog/BlogCards'
import Footer from '../components/Footer'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import "../styles/blog.css";


const Blog = () => {
  return (
    <>
        <ResponsiveAppBar/>
        <BlogCards/>
        <Footer/>
                                      
    
    
    </>
  )
}

export default Blog