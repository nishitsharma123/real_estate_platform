import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import '../styles.css'; // Ensure you have styles for the loader

const Loader = () => {
  return (
    <div className="loader-container">
      <DotLottieReact
        src="https://lottie.host/829d2e43-5a7b-4887-96c5-2e31807ad456/vRRJoMYrjL.lottie"
        loop
        autoplay
        className='h-64 '
      />    
    </div>
  );
};

export default Loader;