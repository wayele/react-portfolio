import React from 'react'
import './style.css'

function About() {
    return (
        <section className="about">
            <div className="row">
                <div className="col-md-3">
                    <img className="profile" src="https://wayele.github.io/portfolio/assets/pic_wub.jpg" alt="profile pic" />
                </div>
                <div className="col-md-9">
                    <h2>About Me</h2>
                    <p>
                        Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.
                    </p>
                    <div className="row">
                        <div className="col-md-8">
                            <h2>Contact Details</h2>
                            <p>Please contact me using the social media platforms and using my email</p>
                        </div>
                        <div className="col-md-4">
                            <h2>Resume</h2>
                            <p>Please click here for a pdf of my resme</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About
