import React from 'react'
import './newsTeller.css'

const Newsteller = () => {
    return (
        <section className="subscribe-style-one">
            <div className="newsteller-container">
                <div className="newsteller-content">
                    <div className="newsteller-content-1">
                        <h2>Newsletter Subscribe</h2>
                        <div className="text">Sign up today for hints, tips and the latest Updates.</div>
                    </div>
                    <div className="">
                        <form method="post" action="contact.html">
                            <div className="form-group">
                                <input className='newsteller-input' type="email" name="email" placeholder="Enter Email Address" required />
                                <button className='newsteller-btn' type="submit" ><span className="newsteller-txt">Subscribe</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Newsteller