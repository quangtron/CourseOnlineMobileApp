import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import ImageButton from '../../Common/ImageButton';
import SectionPopularSkills from './SectionPopularSkills/sectionPopularSkills';
import SectionSpecialized from './SectionSpecialized/sectionSpecialized';
import SectionPaths from './SectionPaths/sectionPaths';
import SectionAuthors from './SectionAuthors/sectionAuthors';

const Browse = props => {
    const srcImageTop = require('../../../../assets/bgLogin.jpg');
    const srcImageDown = require('../../../../assets/bgLogin.jpg');
    const dataSections = {
        title: 'New Releases',
        data: [
            {
                id: 1,
                title: 'React Native 1',
                img: require('../../../../assets/bgLogin.jpg'),
                author: 'T1',
                level: 'Beginner',
                released: 'May 11, 2020',
                duration: '38h'
            },
            {
                id: 2,
                title: 'React Native 2',
                img: require('../../../../assets/bgLogin.jpg'),
                author: 'T2',
                level: 'Beginner',
                released: 'May 11, 2020',
                duration: '38h'
            },
            {
                id: 3,
                title: 'React Native 3',
                img: require('../../../../assets/bgLogin.jpg'),
                author: 'T3',
                level: 'Beginner',
                released: 'May 11, 2020',
                duration: '38h'
            },
        ],
    };

    return(
        <ScrollView style={styles.browse} showsVerticalScrollIndicator={false}>
            <View style={styles.imgBtnTop}>
                <ImageButton
                    title='NEW RELEASES'
                    img={srcImageTop}
                    navigation={props.navigation}
                    items={dataSections}
                />
            </View>
            <View style={styles.imgBtnDown}>
                <ImageButton
                    title='RECOMMENDED FOR YOU'
                    img={srcImageDown}
                    items={dataSections}
                    navigation={props.navigation}
                />
            </View>
            <SectionPopularSkills title='Popular Skills' navigation={props.navigation} />
            <SectionSpecialized navigation={props.navigation} />
            <SectionPaths title='Paths' navigation={props.navigation} items={dataSections} />
            <SectionAuthors title='Top Authors' navigation={props.navigation} items={dataSections} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    browse: {
        marginTop: 10,
    },
    imgBtnTop: {
        margin: 15,
    },
    imgBtnDown: {
        margin: 15,
        marginTop: 0,
    },
})

export default Browse;