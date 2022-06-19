import React from 'react';

const VideoDetail = ({videoDetail}) => {
    const srcUrl = "https://www.youtube.com/embed/" + videoDetail.id;
    return (
        <div className="video-detail">
            <iframe 
                id={videoDetail.id} 
                type="text/html"
                width="720" 
                height="405"
                src={srcUrl}
                frameBorder="0" 
                allowFullScreen
            />
            <h2>{videoDetail.snippet.title}</h2>
            <span>
                <p>{videoDetail.snippet.publishedAt}</p>
                <p>{videoDetail.snippet.description}</p>
            </span>
        </div>
    );
};

export default VideoDetail;