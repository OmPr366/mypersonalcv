import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
      <div className="footer bg-black text-white h-16 rounded-md flex justify-between items-center px-3 py-9">
        <div className="name">Om Prakash</div>
        <div className="copyright">
          © 2021 Developed By <a className="text-blue-600 cursor-pointer"> Om Prakash</a> | All Rights Reserved.
        </div>
      </div>
    );
}

export default Footer
