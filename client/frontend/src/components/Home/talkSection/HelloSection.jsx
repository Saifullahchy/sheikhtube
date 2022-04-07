import React from 'react';
import './HelloSection.css';


const HelloSection = () => {
    return (
        <div>

            <section>
                <div className="hello-wrapper">
                    <div className="map-section">
                        <div ><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1570.8773005255648!2d91.84364845855787!3d22.308288434004545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad21ee3306a5df%3A0x3a9b2c10d3fcb065!2sSHEIKH%20TUBE%20MILLS%20LTD!5e0!3m2!1sen!2sus!4v1649184669084!5m2!1sen!2sus"></iframe></div>
                    </div>
                    <div className="hello-form-section"  >
                        <div className="hello-content">
                            <h3 className='hello-qoute'>Request for quote</h3>

                            <div className="hello-text">The argument in favor of using filler text goes something like this: If you use real content in the design process.</div>
                            {/* Quote Form */}
                            <div className="quote-form">
                                {/*Contact Form*/}
                                <form method="post" action="contact.html">
                                    <div className="hello-row">
                                        <div className="hello-form-item">
                                            <div className="form-group ">
                                                <input className='hello-input' type="text" name="username" placeholder="How to assist you:*" required />
                                            </div>
                                            <div className="form-group ">
                                                <input className='hello-input' type="text" name="phone" placeholder="Phone number:*" required />
                                            </div>
                                        </div>
                                        <div className="hello-form-item">
                                            <div className="form-group">
                                                <input className='hello-input' type="text" name="text" placeholder="Your name:*" required />
                                            </div>
                                            <div className="form-group">
                                                <button className='hello-btn' type="submit" ><span className="">Submit request</span> <span className="icon flaticon-share-option" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section >

        </div >
    )
}

export default HelloSection