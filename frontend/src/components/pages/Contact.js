import React, { useState, useRef } from 'react';
import Video from '../images/Video.mp4';
import PlayButton from '../images/play.png';
import './ContactUs.css'; // Zaimportuj plik stylów

function ContactUs() {
    const [play, setPlay] = useState(false);
    const [ended, setEnded] = useState(false);
    const videoRef = useRef(null);

    const handlePlayButton = () => {
        setPlay(true);
        setEnded(false);
        videoRef.current.play();
    };

    const handleVideoPause = () => {
        if (!ended) {
            setPlay(false);
        }
    };

    const handleVideoEnd = () => {
        setEnded(true);
        videoRef.current.play();
    };

    return (
        <div className='container-fluid'>
            <div className='card mt-4'> 
                <div className='card-body'>
                    <h2>Contact Page</h2>
                    <div className="video-container">
                        <video ref={videoRef} src={Video} className="object-fit-contain" controls onEnded={handleVideoEnd} onPause={handleVideoPause}></video>
                        {!play && (
                            <div className="video-thumbnail" onClick={handlePlayButton}>
                                <img src={PlayButton} alt="Play button" width="50" height="50" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;