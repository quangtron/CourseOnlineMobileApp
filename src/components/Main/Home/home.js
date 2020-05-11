import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import SectionCourses from './SectionCourses/sectionCourses';

const Home = _ => {
    const sections = [
        {
            title: 'Continue learning',
        },
        {
            title: 'Paths',
        },
        {
            title: 'Channels',
        },
    ];

    const showListSections = sections => {
        let result = null;

        result = sections.map((section, index) => <SectionCourses key={index} data={section} />)

        return result;
    }

    return(
        <View style={styles.home}>
            <ScrollView>
                {showListSections(sections)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        marginTop: 40,
        marginLeft: 10,
    }
})

export default Home;