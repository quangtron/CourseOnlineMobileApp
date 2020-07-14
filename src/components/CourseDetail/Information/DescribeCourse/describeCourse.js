import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const DescribeCourse = (props) => {
    const [heightText, setHeightText] = useState(80);
    const [heightScroll, setHeightScroll] = useState(65);
    const [imageScroll, setImageScroll] = useState(require('../../../../../assets/iconUp.png'));
    const data = 'DescribeCourse-DescribeCourse-DescribeCourse-DescribeCourse-DescribeCourse-DescribeCourse-DescribeCourse-DescribeCourse-DescribeCourse-DescribeCourse-DescribeCourse-DescribeCourse-DescribeCourse-DescribeCourse';

    const showAllText = _ => {
        if(heightText){
            setHeightText(null);
            setHeightScroll(null);
            setImageScroll(require('../../../../../assets/iconDown.png'));
        } else {
            setHeightText(80);
            setHeightScroll(65);
            setImageScroll(require('../../../../../assets/iconUp.png'));
        }
    }

    return(
        <View style={styles.box}>
            <Text style={[styles.textArea, {height: heightText}]}>
                {props.des}
            </Text>
            <TouchableOpacity style={[styles.btnScroll, {height: heightScroll}]} onPress={() => showAllText()}>
                <Image style={styles.image} source={imageScroll} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        marginRight: 20,
    },
    textArea: {
        width: '97%',
        marginBottom: 20,
        marginRight: 10,
    },
    btnScroll: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        backgroundColor: '#E0E0E0',
        borderRadius: 5,
    },
    image: {
        width: 12,
        height: 12,
    },
})
export default DescribeCourse;