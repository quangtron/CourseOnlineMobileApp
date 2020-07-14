import React from 'react';
import { StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const VideoPlayer = (props) => {
    return(
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
    );
}

const styles = StyleSheet.create({
    videoBox: {
        height: 250,
    },
})

export default VideoPlayer;