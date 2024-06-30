import React from 'react'
import './Contact.css'
import {Md10K, MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
            <span className='orangeText'>Our Contacts</span>
            <span className='primaryText'> Easy to Contact Us</span>
            <span className='secondaryText'> We are always available 24 x 7</span>

            <div className="flexColStart contactModes">
                {/* first row */}
                <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Call</span>
                                <span className='secondaryText'>1800 45698 789</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Call Now</div>
                    </div>

                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Chat</span>
                                <span className='secondaryText'>1800 45698 789</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Chat Now</div>
                    </div>

                </div>
                {/* second row */}
                <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Video Call</span>
                                <span className='secondaryText'>1800 45698 789</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Video Call Now</div>
                    </div>

                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <HiChatBubbleBottomCenter size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Message</span>
                                <span className='secondaryText'>1800 45698 789</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Message Now</div>
                    </div>

                </div>

            </div>
            </div>
            <div className="c-right">
                <img src='./contact.jpg' alt=''/>
                
            </div>
        </div>
    </section>
  )
}

export default Contact