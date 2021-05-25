import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onCLick={() => onVideoSelect(video)} className="video-item item" >
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnail.medium.url} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
} ;

export default VideoItem;