import React from 'react';
import { Link } from 'react-router-dom';
import './FooterBottom.css';

const FooterBottom = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <div>
            <div className="footer-bottom">
                <div className="">
                    <div className="footer-bottom-div">
                        <div className="footer-bottom-item-1">
                            <div className="copyright" >Copyrights © <span>{year}</span> Sheikh Tube Mill LTD.</div>
                        </div>
                        {/* <div className="footer-bottom-item-1">
                            <div className="copyright" >Developed By <Link className='copyright' to='/'>Saifullah Chowdhury</Link></div>
                        </div> */}
                        <div className="footer-bottom-item-2">
                            <ul className="footer-nav">
                                <li><Link to='/'>Customer Registration</Link></li>
                                <li><Link to='/legal'>Privacy Policy</Link></li>
                                <li><Link to='/legal'>Terms &amp; Condition</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FooterBottom