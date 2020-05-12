import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import SectionCourses from './SectionCourses/sectionCourses';

const Home = _ => {
    return(
        <View style={styles.home}>
            <ScrollView>
                <SectionCourses title='Continue learning' />
                <SectionCourses title='Paths' />
                <SectionCourses title='Channels' />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        marginTop: 40,
        marginLeft: 15,
    }
})

export default Home;