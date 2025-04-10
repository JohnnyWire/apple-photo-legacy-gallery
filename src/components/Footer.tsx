
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-apple-silverGray/20 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-apple-neutralGray/60 text-sm">
          © {new Date().getFullYear()} · Made with vintage inspiration
        </p>
        <p className="text-apple-neutralGray/40 text-xs mt-2">
          Apple Garamond font · Classic design
        </p>
      </div>
    </footer>
  );
};

export default Footer;
