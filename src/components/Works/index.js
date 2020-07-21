import React, { Component } from 'react'
import vol_scrnshot from './vol_scrnshot.png';
import meals_sips from './meals_sips.png';
import weather_app from './weather_scrnshot.png';
import burgers_scrnshot from './burgers_scrnshot.png';
import './style.css'

class Works extends Component {
    render() {
        return (
            <div className="works">
                <h1>CHECK OUT SOME OF MY PROJECTS</h1>
                <section>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <img src={vol_scrnshot} className="card-img-top" alt="vol" />
                                <div className="card-body">
                                    <h5 className="card-title">Helping Hands App</h5>
                                    <p className="card-text">A group project application to connect volunteers with potential opportunities using Node.JS, express with handlebars, and MySQL with sequelize</p>
                                    <a href="https://helping-hands-project-2.herokuapp.com" target="_blank" className="btn btn-primary">Demo</a>
                                    <a href="https://github.com/Bpeart90/HelpingHands" target="_blank" className="btn btn-primary">Github Repo</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img src={burgers_scrnshot} className="card-img-top" alt="burger-app" />
                                <div className="card-body">
                                    <h5 className="card-title">Burger App</h5>
                                    <p className="card-text">A burger logger app with MySQL, Node JS, Express with handlebars and custom ORM. App creates a list of burgers that can be devoured or deleted. Devoured burgers are displayed separately.</p>
                                    <a href="https://wub-burger-app.herokuapp.com/" target="_blank" className="btn btn-primary">Demo</a>
                                    <a href="https://github.com/wayele/burgers" target="_blank" className="btn btn-primary">Github Repo</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img src={meals_sips} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Meals & Sips App</h5>
                                    <p className="card-text">A group project application that uses html, css, bulma css framework, JavaScript, JQuery ajax technologies. Application allows user to search for meal and cocktail recipes using third-party APIs.</p>
                                    <a href="https://wayele.github.io/meals_and_sips/" target="_blank" className="btn btn-primary">Demo</a>
                                    <a href="https://github.com/wayele/meals_and_sips" target="_blank" className="btn btn-primary">Github Repo</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <img src={weather_app} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Weather App</h5>
                                    <p className="card-text">A responsive app that renders weather information based on user input. User can search by city and be presented with current weather with UV index along with 5-day forecast.</p>
                                    <a href="https://wayele.github.io/weatherapi" target="_blank" className="btn btn-primary">Demo</a>
                                    <a href="https://github.com/wayele/weatherAPI" target="_blank" className="btn btn-primary">Github Repo</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        )
    }
}

export default Works
