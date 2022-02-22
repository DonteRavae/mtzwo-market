import React from "react";

import AudioPlayer from "./components/AudioPlayer/AudioPlayer";

export default {
    title: "Media/AudioPlayer",
    component: AudioPlayer,
};

export const HighlightAudioPlayer = () => (
  <AudioPlayer
    source={
      "https://soundcloud.com/dreamvillerecords/big-black-truck-aka-black-air?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    }
  />
);