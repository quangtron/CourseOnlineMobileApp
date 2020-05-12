import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import Styles from '../../../Common/Styles';

const DownloadItem = props => {
    const { title, author, level, released, duration, img, courses } = props.item;

    return(
        <TouchableOpacity style={styles.item}>
            <Image
                source={img}
                style={styles.image}
            />
            <View style={{marginLeft: 10, width: '68%'}}>
                <Text style={Styles.text(16, '#000', 'normal')}>{title}</Text>
                {author ? 
                    <View>
                        <Text style={[Styles.text(14, '#9E9E9E', 'normal'), {marginTop: 10}]}>{author}</Text>
                        <Text style={Styles.text(14, '#9E9E9E', 'normal')}>{`${level} . ${released} . ${duration}`}</Text>
                    </View>
                    : <Text style={[Styles.text(13, '#9E9E9E', 'normal'), {marginTop: 15}]}>{`${courses} courses . ${duration}`}</Text>
                }
            </View>
            <TouchableOpacity>
                <Text style={{fontWeight: 'bold'}}>...</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        marginBottom: 15,
        flexDirection: 'row',
    },
    image: {
        width: 80,
        height: 60,
    },
})

export default DownloadItem;