import React from 'react'
import './footerContent.css'

const FooterContentTwo = () => {
    return (
        <>
            <div div className="footer-info-section">
                <div className="clearfix">
                    {/*Info Block*/}
                    <div className="info-block ">
                        <div className="inner">
                            <div className="fas fa-map-marked" />
                            <div className='inner-item'>
                                <h6>Address</h6>
                                <div className="text">Factory: Karnafuly thana road ,Ward No:3 charlakkah, Chittagong.</div>
                            </div>
                        </div>
                    </div>
                    {/*Info Block*/}
                    <div className="info-block">
                        <div className="inner">
                            <div className="fas fa-phone-alt" />
                            <div className='inner-item'>
                                <h6>Call Us On</h6>
                                <div className="text">Front Desk: +880-184-3507 243</div>
                            </div>
                        </div>
                    </div>
                    {/*Info Block*/}
                    <div className="info-block">
                        <div className="inner">
                            <div className="fas fa-envelope-open" />
                            <div className='inner-item'>
                                <h6>Email at</h6>
                                <div className="text">info@sheikhtubemills.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterContentTwo