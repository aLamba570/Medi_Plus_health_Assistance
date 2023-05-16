import React from 'react';
import Footer from '../components/Footer/Footer';
import PageNavbar from '../components/Navbar/PageNavbar'
import twitterlogo from "../images/twitter-logo.png";

const twitterresources = () => {
  return (
      <div className="twitterresources">
          <PageNavbar/>
          <div className="container py-5">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center align-items-center flex-column">
                <p className="display-5 fw-bold">Twitter Resources</p>
                <img src={twitterlogo} alt="Twitter Logo" className="mb-5" width="120" height="100" />
            </div>
            <div className="col">
                <div className="list-group">
                    <a href="https://bit.ly/3o7hv27" target="_parent" className="list-group-item list-group-item-action fs-5 border border-primary border-1 rounded mb-2">
                        COVID-19 Chart for various Stages
                        <span className="badge bg-primary">Photo</span>
                    </a>
                    <a href="https://bit.ly/3eBkGfd" target="_parent" className="list-group-item list-group-item-action fs-5 border border-primary border-1 rounded mb-2">
                        What Food can I Eat in COVID-19 ?
                        <span className="badge bg-primary">Photo</span>
                    </a>
                    <a href="https://bit.ly/2Q8rFD9" target="_parent" className="list-group-item list-group-item-action fs-5 border border-primary border-1 rounded mb-2">
                        Important Websites for Beds, Oxygen Ventilators and more
                        <span className="badge bg-warning text-dark">Video</span>
                    </a>
                    <a href="https://bit.ly/3bfQZy8" target="_parent" className="list-group-item list-group-item-action fs-5 border border-primary border-1 rounded mb-2">
                        Hospital Beds Update
                        <span className="badge bg-primary">Photo</span>
                    </a>
                    <a href="https://bit.ly/3hi4hOO" target="_parent" className="list-group-item list-group-item-action fs-5 border border-primary border-1 rounded mb-2">
                        Covid Screening Centres in Chennai
                        <span className="badge bg-primary">Photo</span>
                    </a>
                    <a href="https://bit.ly/3bkx8y6" target="_parent" className="list-group-item list-group-item-action fs-5 border border-primary border-1 rounded mb-2">
                        Breathing Exercise
                        <span className="badge bg-warning text-dark">Video</span>
                    </a>
                    <a href="https://bit.ly/3bh6nuu" target="_parent" className="list-group-item list-group-item-action fs-5 border border-primary border-1 rounded mb-2">
                        Doctor Consultation Number for Jharkhand
                        <span className="badge bg-primary">Photo</span>
                    </a>
                    <a href="https://bit.ly/3uCbAEP" target="_parent" className="list-group-item list-group-item-action fs-5 border border-primary border-1 rounded mb-2">
                        How to use Oxygen Cylinder at Home
                        <span className="badge bg-warning text-dark">Video</span>
                    </a>
                    <a href="https://bit.ly/2RCxtFf" target="_parent" className="list-group-item list-group-item-action fs-5 border border-primary border-1 rounded mb-2">
                        Link for COVID-19 Resources
                        <span className="badge bg-warning text-dark">Video</span>
                    </a>
                    <a href="https://bit.ly/3bh90MJ" target="_parent" className="list-group-item list-group-item-action fs-5 border border-primary border-1 rounded mb-2">
                        Mumbai Covid Helpline
                        <span className="badge bg-primary">Photo</span>
                    </a>
                </div>
            </div>
        </div>

          <Footer/>
      </div>
  );
};

export default twitterresources;
