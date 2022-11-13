
import React, { useState, useEffect } from 'react'
import { appToast } from '../../utils';
import YoutubeEmbed from './youtubeDetail';

let api_Key_Google = "YoutubeApiKey"

export const YoutubeVideos = ({ city }) => {
    const [video, setVideo] = useState("");
    const searchKey = " Tanıtım"
    let encodedSearchTerm =
        encodeURI(searchKey);
    const searchTerm = `${city}${encodedSearchTerm}`;

    let maxResults = 20;
    let part = "snippet"
    let order = "viewcount"
    let urlYoutube = `https://youtube.googleapis.com/youtube/v3/search?part=${part}&maxResults=${maxResults}&order=${order}&q=${searchTerm}&key=${api_Key_Google}`


    useEffect(() => {
        appToast.showToast(true);
        fetch(urlYoutube)
            .then(res => res.json())
            .then((data) => {
                console.log("video Id", data.items[0])
                setVideo(data.items[0].id.videoId);
                setTimeout(() => {
                    appToast.showToast(false)
                }, 1500);
                // console.log(`https://www.youtube.com/watch?v=${video}`)
            }).catch(err => {
                appToast.showToast(false);
            })
    }, [city])

    return (
        <div>
            <YoutubeEmbed embedId={video} width={"100%"} height={"354x"} />
        </div>
    )
}


