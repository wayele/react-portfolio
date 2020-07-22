import React from 'react'
import './style.css'

function WorkCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img className="images" alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <h5>{props.name}</h5>
                <p>{props.description}</p>
                <a href={props.demo} target="_blank" className="btn btn-primary">Demo</a>
                <a href={props.github} target="_blank" className="btn btn-primary">Github Repo</a>
            </div>
        </div>
    )
}

export default WorkCard
