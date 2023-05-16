import React from 'react';
import './Footer.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
const Footer = () => {
  return (
      <div className="footer">
           <div className="container-fluid">
        <div className=" foot row pt-3 pb-2">
            <div className="col-4 d-flex justify-content-around align-items-center">
                <p className="text-white">
                    &copy; 2021 &middot; Made with ❤ by Shantanu Kasana
                </p>
            </div>

            <div className="col-4 d-flex justify-content-around">
                <Link to="/termsandcondition" target="_parent" className="text-white">Terms & Conditions</Link>
            </div>

            <div className="col-4 d-flex justify-content-around">
                <a href="#" className="text-white">Back to Top</a>
            </div>
        </div>
    </div>

      </div>
  );
};

export default Footer;
