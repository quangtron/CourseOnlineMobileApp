import React, { useContext } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import SectionAuthors from '../../SectionAuthors/sectionAuthors';
import SectionCourses from '../../../Home/SectionCourses/sectionCourses';
import { MainContext } from '../../../../../provider/main-provider';

function SkillDetail(props) {
    const {main} = useContext(MainContext);

    return(
        <View style={styles.home}>
            <ScrollView>
                <SectionCourses dataSection={main.Paths} navigation={props.navigation} />
                <SectionCourses dataSection={main.Courses} title='New' navigation={props.navigation} />
                <SectionCourses dataSection={main.Courses} title='Trending' navigation={props.navigation} />
                <SectionAuthors  navigation={props.navigation} title='Top Authors' />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        marginLeft: 15,
    },
})

export default SkillDetail;