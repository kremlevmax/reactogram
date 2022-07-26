import React from "react";
import "./Logo.css";

const Logo = ({ children }) => {
  return (
    <div className='logo__container'>
      <svg viewBox='-126 -126 252 252' xmlns='http://www.w3.org/2000/svg'>
        <path
          id='path'
          d='M-125 0a125 125 0 10250 0 125 125 0 10-250 0'
          fill='none'
        />

        <text y='40'>
          <textPath href='#path' startOffset='20'>
            WELCOME TO MY REACTOGRAM GALLERY, STRANGER
          </textPath>
        </text>
      </svg>
      {children}
    </div>
  );
};

export default Logo;
