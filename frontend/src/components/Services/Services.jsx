import React from 'react';
import ServiceCard from './ServiceCard'


const Services = () => {
  return (
      <div className="services">
          <div className="container px-4 py-5" id="services">
          <h1 className="display-6 fw-bold lh-1 mb-2 text-center">We Help People by Providing various Services</h1>
          <hr className="solid" />
          <ServiceCard  />
          {/* <ServiceCard title="Hospital Beds" />
          <ServiceCard title="Oxygen Suppliers" />
          <ServiceCard title="Meds Suppliers" />
          <ServiceCard title="EMS Providers" />
          <ServiceCard title="Tiffin Service" /> */}

          </div>
      </div>
  );
};

export default Services;
