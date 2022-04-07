import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './Footer.css';
import FooterBottom from './FooterBottom/FooterBottom';
import FooterContentTwo from './FooterContentTwo/FooterContentTwo';


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
                <div className="footer-title-content">
                  <h3 className="footer-content-title">Useful Links</h3>
                  <span className="dash-footer"></span>
                </div>
                <div className="footer-list-section">
                  <div className="f-s-1">
                    <ul className="footer-item">
                      <li className="footer-item-list">
                        <Link className='footer-item-link' to='/'>FAQ</Link>
                      </li>
                      <li className="footer-item-list">
                        <Link className='footer-item-link' to='/'>Delivery Tracking</Link>
                      </li>
                      <li className="footer-item-list">
                        <Link className='footer-item-link' to='/'>Truck Rent </Link>
                      </li>
                      <li className="footer-item-list">
                        <Link className='footer-item-link' to='/'>Pdf Download</Link>
                      </li>

                    </ul>
                  </div>
                  <div className="f-s-2">
                    <ul className="footer-item">
                      <li className="footer-item-list">
                        <Link className='footer-item-link' to='/'>Career</Link>
                      </li>
                      <li className="footer-item-list">
                        <Link className='footer-item-link' to='/'>Testimonials</Link>
                      </li>
                      <li className="footer-item-list">
                        <Link className='footer-item-link' to='/'>Free Consultation </Link>
                      </li>
                      <li className="footer-item-list">
                        <Link className='footer-item-link' to='/'>Become Our Agent</Link>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-element-3">
              <div className="footer-title-content">
                <h3 className="footer-content-title">Latest News</h3>
                <span className="dash-footer"></span>
              </div>
              <div className="news-widget-block">
                <div className="content-element-inner">

                  <div className="post-date">February 14, 2019</div>
                  <div className="text"><Link className='footer-item-link' to="/">Seminar for improve  business profit & loss</Link></div>
                </div>
              </div>

              <div className="news-widget-block">
                <div className="content-element-inner">

                  <div className="post-date">January 21, 2019</div>
                  <div className="text"><Link className='footer-item-link' to="/">Experts Openion for save money for your future.</Link></div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content-2">
            <FooterContentTwo />
          </div>
          <div className="footer-bottom">
            <FooterBottom />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer