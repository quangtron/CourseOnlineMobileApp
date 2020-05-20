import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import ImageButton from '../../Common/ImageButton';
import SectionPopularSkills from './SectionPopularSkills/sectionPopularSkills';
import SectionSpecialized from './SectionSpecialized/sectionSpecialized';
import SectionPaths from './SectionPaths/sectionPaths';
import SectionAuthors from './SectionAuthors/sectionAuthors';

const Browse = _ => {
    const srcImageTop = require('../../../../assets/bgLogin.jpg');
    const srcImageDown = require('../../../../assets/bgLogin.jpg');

    return(
        <ScrollView style={styles.browse}>
            <View style={styles.imgBtnTop}>
                <ImageButton title='NEW RELEASES' img={srcImageTop} />
            </View>
            <View style={styles.imgBtnDown}>
                <ImageButton title='RECOMMENDED FOR YOU' img={srcImageDown} />
            </View>
            <SectionPopularSkills title='Popular Skills' />
            <SectionSpecialized />
            <SectionPaths title='Paths' />
            <SectionAuthors title='Top Authors' />
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