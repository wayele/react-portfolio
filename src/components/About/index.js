import React from 'react'
import './style.css'
import Skills from '../Skills'


function About() {
    return (
        <section className="about">
            <div className="row">
                <div className="col-md-4">
                    <img className="profile" src="https://wayele.github.io/portfolio/assets/pic_wub.jpg" alt="profile pic" />
                    <Skills />
                </div>
                <div className="col-md-8">
                    <h2>About Me</h2>
                    <p>
                        Growing up I was always intrigued by how things work. As a kid, I often find myself disassembling watches,games,and broken radios to see how they work and what the components inside look like. After taking everything apart, I would try to put everything back together again and see if it still works. This curiosity still exists to this day and it is one of the main reasons for me to venture into programming and learning to code!
                    </p>
                    <p>
                        The possibilities are now limitless at this time as coding can be applied to different parts of our day to day life from video games for enjoyment to life saving scenarios in hospitals and healthcare industry and everthing in between. I am very excited to use my new found skills and apply it to my every day life but also to new possibilities.
                    </p>
                    <p>
                        Stay tuned and follow my progress as I embark on the joys of coding!
                    </p>
                    <div className="row">
                        <div className="col-md-8">
                            <h2>Hobbies</h2>
                            <p>Community organizing, coding, sports, and nature. Talk to me about Philly sports!!</p>
                        </div>
                        <div className="col-md-4">
                            <h2>Resume</h2>
                            <p>Please click <a href="https://drive.google.com/file/d/16eGAgrRZlZBOLxTAG64195XzV8TBbcZD/view" target="_blank">here</a> for a pdf of my resme</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
