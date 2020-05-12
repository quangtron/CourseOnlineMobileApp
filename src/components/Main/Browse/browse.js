import React from 'react';
import { View, ScrollView } from 'react-native';

import ImageButton from '../../Common/ImageButton';
import SectionPopularSkills from './SectionPopularSkills/sectionPopularSkills';
import SectionSpecialized from './SectionSpecialized/sectionSpecialized';
import SectionPaths from './SectionPaths/sectionPaths';
import SectionAuthors from './SectionAuthors/sectionAuthors';

const Browse = _ => {
    return(
        <ScrollView style={{marginTop: 50}}>
            <View style={{margin: 15}}>
                <ImageButton title='NEW RELEASES' img={require('../../../../assets/bgLogin.jpg')} />
            </View>
            <View style={{margin: 15, marginTop: 0}}>
                <ImageButton title='RECOMMENDED FOR YOU' img={require('../../../../assets/bgLogin.jpg')} />
            </View>
            <SectionPopularSkills title='Popular Skills' />
            <SectionSpecialized />
            <SectionPaths title='Paths' />
            <SectionAuthors title='Top Authors' />
        </ScrollView>
    )
}

export default Browse;