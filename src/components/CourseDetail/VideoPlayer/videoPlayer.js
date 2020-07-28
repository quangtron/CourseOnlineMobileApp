import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Image, View } from "react-native";
import { Video } from "expo-av";
import YoutubePlayer from "react-native-youtube-iframe";

const VideoPlayer = (props) => {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    if(props.videoLesson){
      const index = props.videoLesson.lastIndexOf(
        "embed/"
      );
      setVideoId(props.videoLesson.slice(index + 6));
    }
  }, [props.videoLesson])

  return (
    <View>
      {props.videoLesson ? (
        <YoutubePlayer
          ref={playerRef}
          height={235}
          // width={}
          videoId={videoId}
          play={playing}
          onChangeState={(event) => console.log(event)}
          onReady={() => console.log("ready")}
          onError={(e) => console.log(e)}
          onPlaybackQualityChange={(q) => console.log(q)}
          volume={50}
          playbackRate={1}
          playerParams={{
            cc_lang_pref: "us",
            showClosedCaptions: true,
          }}
        />
      ) : props.videoUrl ? (
        <Video
          source={{ uri: props.videoUrl }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          useNativeControls
          style={styles.videoBox}
        />
      ) : (
        <Image source={{ uri: props.imageUrl }} style={styles.videoBox} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  videoBox: {
    height: 250,
  },
});

export default VideoPlayer;
