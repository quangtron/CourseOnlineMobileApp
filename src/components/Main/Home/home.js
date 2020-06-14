import React, { useContext } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import SectionCourses from './SectionCourses/sectionCourses';
import { MainContext } from '../../../provider/main-provider';
import { BookmarksContext } from '../../../provider/bookmarks-provider';

function Home(props) {
    const {main} = useContext(MainContext);
    const {bookmarks} = useContext(BookmarksContext);

    return(
        <View style={styles.home}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SectionCourses dataSection={main.Courses} navigation={props.navigation} />
                <SectionCourses dataSection={main.Paths} navigation={props.navigation} />
                <SectionCourses dataSection={main.Channels} navigation={props.navigation} />
                <SectionCourses dataSection={{title: 'Bookmarks', data: bookmarks}} navigation={props.navigation} />
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