import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './Footer.css';


const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-content-1">
            <div className="content-element-1">
              <img className='LogoImg' src={Logo} alt="" />
              <p className="footer-text">Efficiently unleash cross-media information  without cross-media value. Quickly maximize timely deliverables for real-time schemas.</p>
              <Link to='/'><button className='footer-btn btn-style-two '><span class="txt">Read More</span></button></Link>
            </div>
            <div className="content-element-2">
              <div className="footer-title">
                <h3 className="footer-content-title">Useful Links</h3>
                <span className="dash"></span>
              </div>
            </div>
            <div className="content-element-3">3</div>
          </div>
          <div className="footer-content-2">content2</div>
          <div className="footer-bottom">Bottom</div>
        </div>
      </div>
    </>
  )
}

export default Footer