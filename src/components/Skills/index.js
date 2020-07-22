import React from 'react';


function Skills() {
    return (
        <section>
            <h2>Skills</h2>
            <div className="skills-list">
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">HTML</li>
                    <li className="list-group-item">CSS</li>
                    <li className="list-group-item">JavaScript</li>
                </ul>
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">jQuery</li>
                    <li className="list-group-item">BootStrap</li>
                    <li className="list-group-item">React.js</li>
                </ul>
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">Handlebars</li>
                    <li className="list-group-item">Expres.js</li>
                </ul>
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">MySQL</li>
                    <li className="list-group-item">MongoDB</li>
                    <li className="list-group-item">NodeJS</li>
                </ul>
            </div>
        </section>
    )
}

export default Skills;