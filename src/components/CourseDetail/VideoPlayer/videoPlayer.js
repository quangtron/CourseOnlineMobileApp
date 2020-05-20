import React from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

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
        <View style={styles.videoBox} />
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
        backgroundColor: 'gray',
    },
})

export default VideoPlayer;