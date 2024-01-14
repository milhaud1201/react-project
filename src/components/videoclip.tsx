import React from "react";
import YouTube from "react-youtube";
import { CardBody } from "@material-tailwind/react";
// https://www.npmjs.com/package/react-youtube


class VideoClip extends React.Component {
    render() {
        const options = {
            height: '500',
            width: '950',
            playerVars: {
                autoplay: 1,
                controls: 1,
            },
        };

        return <>
            <CardBody className="grid justify-center">
                <YouTube
                    videoId="PeoVSwjnSjE?si=Idnym4FbEAEmcBe9"
                    opts={options} onReady={this._onReady}
                    id="video" />
            </CardBody>
        </>
    }

    _onReady(event: any) {
        event.target.pauseVideo();
    }
}

export default VideoClip;


{/* <iframe width="560" height="315"
src="https://www.youtube.com/embed/PeoVSwjnSjE?si=Idnym4FbEAEmcBe9"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe> */}