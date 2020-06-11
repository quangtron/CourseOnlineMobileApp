import React, { useContext } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import SectionCourses from './SectionCourses/sectionCourses';
import { MainContext } from '../../../provider/main-provider';

function Home(props) {
    const {main} = useContext(MainContext);

    return(
        <View style={styles.home}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SectionCourses dataSection={main.Courses} navigation={props.navigation} />
                <SectionCourses dataSection={main.Paths} navigation={props.navigation} />
                <SectionCourses dataSection={main.Channels} navigation={props.navigation} />
                <SectionCourses dataSection={main.Bookmarks} navigation={props.navigation} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        marginLeft: 15,
    },
})

export default Home;