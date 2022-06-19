
import React, { useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import './app.css';
import SearchHeader from './components/searchHeader';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const App = () => {
    const [videoList, setVideoList] = useState([]);
    const [videoDetail, setVideoDetail] = useState({});

    useEffect(() => {
        async function showPoupularList() {
            try {
                const response = await axios.get(
                    'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyBOb5mU4mqtqIFS7S0ybtLk5UhYSoxSyP4'
                );
                const popularVideoList = response.data.items;
                // setVideoList(videoList => [...videoList, popularVideoList]);
                setVideoList(popularVideoList);
            } catch (e) {
                console.log(e);
            }
        }
        showPoupularList();
    }, []);

    const searchVideoList = useCallback(async keyword => {
        try {
            const baseUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=AIzaSyBOb5mU4mqtqIFS7S0ybtLk5UhYSoxSyP4'
            const searchApiUrl = baseUrl + '&q=' + keyword;
            const response = await axios.get(
                searchApiUrl
            );
            const searchVideoList = response.data.items;
            setVideoList(searchVideoList);
        } catch (e) {
            console.log(e);
        }
    }, []);

    const handleVideoDetail = useCallback((video) => {
        setVideoDetail(video);
    }, []) ;

    return (
        <>
            <SearchHeader
                onSearch={searchVideoList} 
            />
            <VideoDetail videoDetail={videoDetail}/>
            <VideoList 
                videoList={videoList}
                onClick={handleVideoDetail}
            />
        </>
    );
};

export default App;

