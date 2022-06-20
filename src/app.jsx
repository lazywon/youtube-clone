
import React, { useCallback, useState, useEffect } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

const App = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        fetch(
            "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBOb5mU4mqtqIFS7S0ybtLk5UhYSoxSyP4", 
            requestOptions
        )
        .then(response => response.json())
        .then(result => setVideos(result.items))
        .catch(error => console.log('error', error));
    }, []);

    return (
        <>
            <VideoList videos={videos} />
        </>
    )
};

export default App;

