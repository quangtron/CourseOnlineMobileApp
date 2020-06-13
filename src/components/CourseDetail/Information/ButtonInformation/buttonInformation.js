import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

import ShareScreen from '../../../Others/Share/share';
import { DownloadsContext } from '../../../../provider/downloads-provider';

const ButtonInformation = props => {
    const { downloads, setDownloads } = useContext(DownloadsContext);

    const onHandlePress = name => {
        if(name === 'Download'){
            const listDownloads = downloads;

            listDownloads.push(props.data);
            setDownloads(listDownloads);
        }
    }

    const {img, name} = props.item;

    return(
        <View>
            <TouchableOpacity style={styles.itemCenter} onPress={_ => onHandlePress(name)}>
                <View style={styles.circleBtn}>
                    <Image source={img} style={styles.image} />
                </View>
                <Text style={styles.textLayout}>{name}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    itemCenter: {
        marginRight: '15%',
        alignItems: 'center',
    },
    image: {
        alignSelf: 'center',
        width: 30,
        height: 30,
        borderRadius: 50,
    },
    textLayout: {
        marginTop: 10,
        textAlign: 'center',
    },
    circleBtn: {
        width: 60,
        height: 60,
        backgroundColor: '#E0E0E0',
        borderRadius: 50,
        justifyContent: 'center',
    },
})

export default ButtonInformation;