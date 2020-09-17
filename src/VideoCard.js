import React from 'react';
import './VideoCard.css';
import Avatar from "@material-ui/core/Avatar";


function VideoCard({image,title,channel,views,timeStamp,channel_img}) {
    return (
        <div className="videoCard">
            <img className="video__image" src={image} alt="video_thumbnail" />
            <div className="video__info">
                <Avatar className="videoCard__avatar" alt={channel} src={channel_img}  />
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timeStamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;
