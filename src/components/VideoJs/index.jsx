import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoJs = React.forwardRef(({options},ref) => {
    const videoRef = React.useRef(null);

    const VideoHtml = ( props ) => (
        <div data-vjs-player>
          <video ref={videoRef} className="video-js vjs-big-play-centered" />
        </div>
    )    
    React.useEffect( () => {
        const videoElement = videoRef.current;
        let player;
        if( videoElement ) {
          player = videojs( videoElement, options, () => {
            console.log("player is ready");
          });
          ref.current = player
        }
        return () => {
          if( player ) {
            player.dispose();
          }
        }
      }, [options]);
    
      return (<VideoHtml ref={ref} />);
})
 
export default VideoJs;