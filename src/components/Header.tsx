
import React from 'react';

const Header = () => {
  return (
    <header className="py-6 px-4 border-b border-apple-silverGray/20">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-light tracking-wider text-apple-neutralGray mb-2">
          photo gallery
        </h1>
        <p className="text-base md:text-lg text-apple-neutralGray/80 italic font-light">
          a vintage apple collection
        </p>
      </div>
    </header>
  );
};

export default Header;
