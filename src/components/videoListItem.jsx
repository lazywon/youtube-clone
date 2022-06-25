import React from 'react';

const VideoListItem = ({video, onClick}) => {
    const thumbnails = video.snippet.thumbnails;

    const clickVideoDetail = () => {
        onClick(video);
    };

    return (
        <li className="video-list">
            <a href="#" className="video-list-item" onClick={clickVideoDetail}>
                <img className="video-thumbnail" src={thumbnails.default.url} alt="thumbnails" />
                <div className="video-title"> 
                    <span className="video-title-span">{video.snippet.title}</span>
                    <p>{video.snippet.channelTitle}</p>
                </div>
            </a>
        </li>
    );
};

export default VideoListItem;