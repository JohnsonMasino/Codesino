import React from 'react';
import Lottie from 'lottie-react'; 
import animation from '../assets/images/Animation.json'; 

const PageNotFound = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <section className="text-center flex flex-col justify-center items-center h-screen">
      {/* Render Lottie Animation with smaller size */}
      <Lottie animationData={animation} loop={true} className="w-64 h-64" /> 

      {/* Back Button */}
      <button
        onClick={handleGoBack}
        className="text-white bg-red-500 rounded-md px-3 py-2 mt-4 hover:bg-red-600"
      >
        Go Back
      </button>
    </section>
  );KW
};

export default PageNotFound;
