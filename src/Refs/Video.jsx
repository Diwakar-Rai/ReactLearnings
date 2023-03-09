import React, { useState, useRef } from "react";
import VIDEO from "../video2.mp4";
const Video = () => {
  let videoRef = useRef();
  let [play, setPlay] = useState(true);
  let [text, setText] = useState("");

  let PlayOrPause = () => {
    setPlay(!play);
    if (play === true) {
      videoRef.current.play();
      setText("Playing");
    } else {
      videoRef.current.pause();
      setText("Pause");
    }
  };
  return (
    <div>
      <h3>{text}</h3>
      <video
        src={VIDEO}
        ref={videoRef}
        height={400}
        onClick={PlayOrPause}
      ></video>
    </div>
  );
};

export default Video;
