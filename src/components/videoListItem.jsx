import React from 'react';

const VideoListItem = ({video, onClick}) => {
    const thumbnails = video.snippet.thumbnails;

    const clickVideoDetail = () => {
        onClick(video);
    };

    return (
        <li className="video-list">
            <a href="#" onClick={clickVideoDetail}>
                <img className="video-thumbnail" src={thumbnails.default.url} alt="thumbnails" />
                <span className="video-title">{video.snippet.title}</span>
            </a>
        </li>
    );
};

export default VideoListItem;