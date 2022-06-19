import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = ({videoList, onClick}) => {
    return (
        <div>
            <ul>
                {videoList.map(video => (
                    <VideoListItem 
                        key={video.id}
                        video={video}
                        onClick={onClick}
                    />
                ))}
            </ul>
        </div>
    );
};

export default VideoList;