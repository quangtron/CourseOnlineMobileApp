import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Video } from 'expo-av';

const VideoPlayer = _ => {
    return(
        // <Video
        //     source={{uri: 'https://www.youtube.com/watch?v=aRvEge92YWQ&t=1740s'}}
        //     ref={ref => {
        //         this.player = ref
        //     }}
        //     // onBuffer={this.onBuffer}
        //     // onError={this.videoError}
        //     style={styles.bgVideo}
        // />
        <Video
            source={{ uri: 'https://www.youtube.com/watch?v=aRvEge92YWQ&t=1740s' }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={styles.videoBox}
        />
    );
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    videoBox: {
        height: 250,
    },
})

export default VideoPlayer;