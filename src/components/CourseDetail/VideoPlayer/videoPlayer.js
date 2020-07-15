import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Video } from 'expo-av';

const VideoPlayer = (props) => {
    console.log('video', props);
    return(
        <View>
            {props.videoUrl ? 
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
            /> : <Image source={{uri: props.imageUrl}} style={styles.videoBox} />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    videoBox: {
        height: 250,
    },
})

export default VideoPlayer;