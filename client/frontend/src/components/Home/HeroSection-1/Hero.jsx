import React from 'react'
import { Link } from 'react-router-dom'
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import img1 from '../../../assets/images/hero-2.jpg'
import img3 from '../../../assets/images/hero-3.jpg'
import img2 from '../../../assets/images/hero-4.jpg'
import './hero.css'



const Hero = () => {
    return (
        <div className='Hero-Main'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className="wrapper"
                        style={{ backgroundImage: `url(${img1})` }}

                    >
                        <div className="text-wrapper">
                            <h3 className="title">Welcome to </h3>
                            <h2 className='hero-section'>Sheikh tube Mills LTD.</h2>
                            <p className="hero-text">Sheikh Tube Mills LTD. is one of the leading pipe manufacturers in Bangladesh. <br /> From 2017 to till this date we have been in the whole country with pride and confidence.</p>
                            <Link to='/about-us'> <button className='hero-btn'> Learn More</button></Link>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="wrapper"
                        style={{ backgroundImage: `url(${img2})` }}

                    >
                        <div className="text-wrapper">
                            <h3 className="title">Welcome to </h3>
                            <h2 className='hero-section'>Sheikh tube Mills LTD.</h2>
                            <p className="hero-text">Sheikh Tube Mills LTD. is one of the leading pipe manufacturers in Bangladesh. <br /> From 2017 to till this date we have been in the whole country with pride and confidence.</p>
                            <Link to='/about-us'> <button className='hero-btn'> Learn More</button></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wrapper"
                        style={{ backgroundImage: `url(${img3})` }}

                    >
                        <div className="text-wrapper">
                            <h3 className="title">Welcome to </h3>
                            <h2 className='hero-section'>Sheikh tube Mills LTD.</h2>
                            <p className="hero-text">Sheikh Tube Mills LTD. is one of the leading pipe manufacturers in Bangladesh. <br /> From 2017 to till this date we have been in the whole country with pride and confidence.</p>
                            <Link to='/about-us'> <button className='hero-btn'> Learn More</button></Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Hero