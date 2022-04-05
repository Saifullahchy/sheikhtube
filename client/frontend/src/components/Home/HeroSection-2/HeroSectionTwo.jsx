import React from 'react'
import HeroImgFront from '../../../assets/images/hero-section-2.jpg'
import './heroSectionTwo.css'

const HeroSectionTwo = () => {
    return (
        <>
            <div className="hero-two-wrapper">
                <div className="section-two-wrapper">
                    <div className="hero-two-text">
                        <h2 className='hero-two-title'>About our company</h2>
                        <span className='dash'></span>
                        <div className="hero-two-sparate-text">
                            <h1 className='hero-two-sparate-text-title'>10</h1>
                            <h4 className='hero-two-sparate-text-subtitle'>years of exelence in slaes traning <br /> solutions</h4>
                        </div>
                        <p className="hero-two-text-p">Sheikh Tube Mills LTD. is one of the leading pipe manufacturers in Bangladesh. From 2017 to this date we have been in the whole country with pride and confidence. We have a talented and multitasking team to design, develop and manufacture pipes to serve our customers with the best quality materials. It has a wide range of construction, manufacturer, and industries to households where STM(Sheikh Tube Mills LTD.) pipes have all the solutions.</p>

                    </div>
                    <div className="hero-two-img"
                    >
                        <img className='img' src={HeroImgFront} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSectionTwo