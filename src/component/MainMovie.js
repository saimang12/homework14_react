import React from 'react';
import YouTube from 'react-youtube';

const MainMovie = () => {
    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    return (
        <section className="MainMovie">
            <div className="inner">
                <YouTube videoId="vDXAF9HAISs" opts={opts} />
            </div>
        </section>
    )
}

export default MainMovie;