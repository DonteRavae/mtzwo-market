import React from "react";

// Play/Pause Icon Imports
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AudioPlayer = ({className, source}) => {
    return (
      <figure className={className}>
        <span>
          <FontAwesomeIcon 
            style={{marginRight: "10px"}} 
            className="play-button" 
            icon={faPlay} 
            size="lg" 
            onClick={() => alert("clicked")}
        />
        </span>
        <span>
          <FontAwesomeIcon className="pause-button" icon={faPause} size="lg" />
        </span>
        <audio src={source}>
          {/* Audio can't be played in browser; provide download link */}
        </audio>

        <div className="waveform-viewer"></div>
      </figure>
    );
}

export default AudioPlayer;