import React, { Component } from 'react';
import WorkCard from '../WorkCard';
import vol_scrnshot from './vol_scrnshot.png';
import meals_sips from './meals_sips.png';
import weather_app from './weather_scrnshot.png';
import burgers_scrnshot from './burgers_scrnshot.png';
import wub_portfolio from './portfolio_scrnshot.png';
import './style.css'
import Wrapper from '../Wrapper';

const projects = [
    {
        "id": 1,
        "name": "Helping Hands App",
        "image": vol_scrnshot,
        "description": "A group project application to connect volunteers with potential opportunities using Node.JS, express with handlebars, and MySQL with sequelize.",
        "demo": "https://helping-hands-project-2.herokuapp.com",
        "github": "https://github.com/Bpeart90/HelpingHands"
    },
    {
        "id": 2,
        "name": "Burger App",
        "image": burgers_scrnshot,
        "description": "A burger logger app with MySQL, Node JS, Express with handlebars and custom ORM. App creates a list of burgers that can be devoured or deleted. Devoured burgers are displayed separately.",
        "demo": "https://wub-burger-app.herokuapp.com/",
        "github": "https://github.com/wayele/burgers"
    },
    {
        "id": 3,
        "name": "Meals & Sips App",
        "image": meals_sips,
        "description": "A group project application that uses html, css, bulma css framework, JavaScript, JQuery ajax technologies. Application allows user to search for meal and cocktail recipes using third-party APIs.",
        "demo": "https://wayele.github.io/meals_and_sips/",
        "github": "https://github.com/wayele/meals_and_sips"
    },
    {
        "id": 4,
        "name": "Weather App",
        "image": weather_app,
        "description": "A responsive app that renders weather information based on user input. User can search by city and be presented with current weather with UV index along with 5-day forecast.",
        "demo": "https://wayele.github.io/weatherapi",
        "github": "https://github.com/wayele/weatherAPI"
    },
    {
        "id": 5,
        "name": "Wub Portfolio",
        "image": wub_portfolio,
        "description": "A front-end react portfolio page that uses router, props and components to display basic information and highlight different projects.",
        "demo": "wub-react-portfolio.herokuapp.com/",
        "github": "https://github.com/wayele/react-portfolio"
    },
    {
        "id": 6,
        "name": "Burger App",
        "image": "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",
        "description": "A burger logger app with MySQL, Node JS, Express with handlebars and custom ORM. App creates a list of burgers that can be devoured or deleted. Devoured burgers are displayed separately.",
        "demo": "wub-burger-app.herokuapp.com/",
        "github": "https://github.com/wayele/burgers"
    },
    {
        "id": 7,
        "name": "Burger App",
        "image": "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",
        "description": "A burger logger app with MySQL, Node JS, Express with handlebars and custom ORM. App creates a list of burgers that can be devoured or deleted. Devoured burgers are displayed separately.",
        "demo": "wub-burger-app.herokuapp.com/",
        "github": "https://github.com/wayele/burgers"
    },
    {
        "id": 8,
        "name": "Burger App",
        "image": "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",
        "description": "A burger logger app with MySQL, Node JS, Express with handlebars and custom ORM. App creates a list of burgers that can be devoured or deleted. Devoured burgers are displayed separately.",
        "demo": "wub-burger-app.herokuapp.com/",
        "github": "https://github.com/wayele/burgers"
    }
]

class Works extends Component {
    render() {
        return (
            <div>
                <h2 className="works">CHECK OUT SOME OF MY PROJECTS</h2>
                <Wrapper>
                    <WorkCard
                        image={projects[0].image}
                        name={projects[0].name}
                        description={projects[0].description}
                        demo={projects[0].demo}
                        github={projects[0].github}
                    />
                    <WorkCard
                        image={projects[1].image}
                        name={projects[1].name}
                        description={projects[1].description}
                        demo={projects[1].demo}
                        github={projects[1].github}
                    />
                    <WorkCard
                        image={projects[2].image}
                        name={projects[2].name}
                        description={projects[2].description}
                        demo={projects[2].demo}
                        github={projects[2].github}
                    />
                    <WorkCard
                        image={projects[3].image}
                        name={projects[3].name}
                        description={projects[3].description}
                        demo={projects[3].demo}
                        github={projects[3].github}
                    />
                    <WorkCard
                        image={projects[4].image}
                        name={projects[4].name}
                        description={projects[4].description}
                        demo={projects[4].demo}
                        github={projects[4].github}
                    />
                </Wrapper >
            </div>
        )
    }
}

export default Works