import React, { useState, useEffect } from 'react'
import YoutubeEmbed from './youtubeDetail';
import { appToast } from '../../utils';

let api_Key_Google = "ApiKey"


export const YoutubeVideos = ({ city, searchKeyIndex = "Tanıtım" }) => {
    const [video, setVideo] = useState("");
    const [videoDetail, setVideoDetail] = useState("");

    const searchKey = ` ${searchKeyIndex}`
    let encodedSearchTerm =
        encodeURI(searchKey);
    const searchTerm = `${city}${encodedSearchTerm}`;
    let maxResults = 1;
    let part = "snippet"
    let order = "relevance"
    let urlYoutube = `https://youtube.googleapis.com/youtube/v3/search?part=${part}&maxResults=${maxResults}&order=${order}&q=${searchTerm}&key=${api_Key_Google}`
    useEffect(() => {
        appToast.showToast(true);
        fetch(urlYoutube)
            .then(res => res.json())
            .then((data) => {
                // console.log("video data", data.items[0].snippet.thumbnails.high.url)
                setVideo(data.items[0].id.videoId);
                setVideoDetail(data.items[0].snippet.thumbnails.high.url);
                setTimeout(() => {
                    appToast.showToast(false)
                }, 1500);
                // console.log(`youtube videos - https://www.youtube.com/watch?v=${video}`)
            }).catch(err => {
                appToast.showToast(false);
            })
    }, [city])
    return (
        <div>
        <YoutubeEmbed embedId={video} width={"100%"} height={"454x"} />
    </div>
    )
}


