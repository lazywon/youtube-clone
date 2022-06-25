import React from 'react';

const VideoDetail = ({videoDetail}) => {
    const baseSrcUrl = "https://www.youtube.com/embed/";
    return (
        <div className="video-detail">
            {videoDetail.id && 
                <iframe 
                    id={videoDetail.id.videoId ? videoDetail.id.videoId : videoDetail.id} 
                    type="text/html"
                    width="720" 
                    height="405"
                    src={videoDetail.id.videoId ? baseSrcUrl + videoDetail.id.videoId : baseSrcUrl + videoDetail.id}
                    frameBorder="0" 
                    allowFullScreen
                />
            }
            <h2>{videoDetail.snippet && videoDetail.snippet.title}</h2>
            <span>
                <p>{videoDetail.snippet && videoDetail.snippet.publishedAt}</p>
                <p>{videoDetail.snippet && videoDetail.snippet.description}</p>
            </span>
        </div>
    );
};

export default VideoDetail;