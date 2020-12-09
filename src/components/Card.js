import React from 'react'
import ReactHtmlParser from 'react-html-parser';

export const Card = ({title, link, image, description, author, dateTaken, tags}) => {
    const bgStyle = {
        backgroundImage: `url(${image})`
    };

    return (
        <div className="col-sm-6 col-md-4 col-lg-3 mt-3">
            <div className="card">
                <div className="card-photo" style={bgStyle}></div>
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    {/* Not worth to show the description, it has no useful information */}
                    {/* <p className="card-text">{ ReactHtmlParser (description) }</p> */}
                    <p className="card-text card-tags">{ tags.split(" ").map((tag) => { return <span>{tag}</span>}) }</p>
                    <p className="card-text card-author">By: { author }</p>
                    <a href={link} rel="noreferrer" target="_blank" className="btn btn-primary btn-block">View full size</a>
                </div>
            </div>
        </div>
    )
}
