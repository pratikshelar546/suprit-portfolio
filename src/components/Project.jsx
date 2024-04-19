import React from 'react';
import '../styles/Project.css';

const Project = ({projectItem}) => {
    return (
        <>
            <div className="project-card">
                <div className="project-title-container">
                    <h3>{projectItem.title}</h3>
                </div>
                <div className="banner-container">
                    <a href={projectItem.demoLink}
                        target="_blank">
                        <img src={projectItem.imgSrc}
                            alt="" />
                    </a>
                </div>
                <div className="info-container">
                    <p>{projectItem.about}</p>
                </div>
            </div>
        </>
    )
}

export default Project;
