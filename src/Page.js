// Page.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Page.css';
import logo from './logo.png';
import image1 from './1.png';
import image2 from './2.png';
import image3 from './3.png';

const Page = () => {
  return (
    <div className="page">
      <div className="container-fluid">
        <div className="row stl">
          <div className="col-md-6 order-md-1">
            <img src={image1} alt="Header" className="img-fluid img1"  />
          </div>
          <div className="col-md-6 order-md-2">
               <div className="header-content">
                <img src={logo} alt="Logo" className="logo img-fluid" />
                <h4>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
                <p>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</p>
                <p>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</p>
                <img src={image2} alt="Government Award" className="img-fluid img3" />
                <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
               </div>
          </div>
        </div>
      </div>

      <section>
        <p className='para1'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
        <img src={image3} alt="Product" className="img-fluid img4" />
        <p >Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
     </section>
     <>
     <hr className='red-hr'/>
     </>
     <h6>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h6>
     <p>CHEMICALS | PROCESS POWER WATER | WASTE WATER OILS | GAS PHARMA SUGARS | DISTILLERIES PAPER | PULP MARINE | DEFENCE METAL | MINING FOOD | BEVERAGE PETROCHEMICAL | REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE | RESIDENTIAL</p>
      <footer className='background-footer'>
        <div className="contact-info">
          <div>
            <i className="fa fa-phone"></i>
            <span>Toll Free 1800 200 1234</span>
          </div>
        </div>
          <div>
            <i className="fab fa-facebook"></i>
            <span>www.facebook.com/cripumps</span>
          </div>
          <div>
            <i className="fa fa-globe"></i>
            <span>www.crigroups.com</span>
          </div>
       
      </footer>
    </div>
  );
};

export default Page;
