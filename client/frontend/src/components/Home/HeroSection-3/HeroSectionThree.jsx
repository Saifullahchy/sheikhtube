import React from 'react'
import HeroImgFront from '../../../assets/images/section-3.jpg'
import './heroSectionThree.css'

const HeroSectionThree = () => {
    return (
        <>
            <div className="hero-three-wrapper">
                <div className="section-three-wrapper">
                    <div className="hero-three-img"
                    >
                        <img className='img' src={HeroImgFront} alt="" />
                    </div>

                    <div className="hero-three-text">
                        <h2 className='hero-three-title'>Why Choose Us </h2>
                        <span className='dash'></span>
                        <div className="hero-three-sparate-text">
                            <h1 className='hero-three-sparate-text-title'>WE</h1>
                            <h4 className='hero-three-sparate-text-subtitle'>beleive  in<br />  Quality over selling</h4>
                        </div>
                        <p className="hero-three-text-p">Our goal is to serve the best quality product in the country. Our mission is to lead the Bangladeshi pipe industry and gain the trust of people in this industry. All the raw materials are highly maintained to assure the quality and after production we assure the quality with our skilled team.
                        </p>

                    </div>

                </div>
            </div>
        </>
    )
}

export default HeroSectionThree