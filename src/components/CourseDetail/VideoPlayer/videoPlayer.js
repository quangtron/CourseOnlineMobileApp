import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Video } from 'expo-av';

const VideoPlayer = _ => {
    return(
        <Video
            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
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