import React from "react";
import '../cards/index.scss' 

function Card (title, imageUrl, body) {
    return (
        <div className="card-container"> 
            <div className="image-container"> 
                <img src={imageUrl} alt=''/> 
            </div>
            <div className="card-content">
                <div className="Card-title">
                    <h3> {title} </h3>
                </div>
                <div className="card-body">
                     <p>{body}</p> 
                </div>
            </div>
           
            <div className="btn">
                <button>
                    View More
                </button>
            </div>
        </div>
    )

}

export default Card 