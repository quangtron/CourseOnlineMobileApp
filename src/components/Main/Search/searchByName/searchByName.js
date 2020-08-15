import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

import Styles from '../../../Common/Styles';
import DownloadItem from '../../Download/DownloadItem/downloadItem';
import AuthorsResult from '../AuthorsResult/authorsResult';
import { ScreenKey } from '../../../../global/constants';
import { CoursesContext } from '../../../../provider/courses-provider';
import { SettingCommonContext } from '../../../../provider/settingCommon-provider';

const screenHeight = Math.round(Dimensions.get('window').height);

const SearchByName = props => {
    const courseContext = useContext(CoursesContext);
    const {language, theme} = useContext(SettingCommonContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        if(courseContext.state.isSearchedCourse && courseContext.state.resultSearch.courses.data.length > 0) {
            if(props.name === ScreenKey.Authors) {
                setData(courseContext.state.resultSearch.instructors.data)
            } else {
                setData(courseContext.state.resultSearch.courses.data)
            }
        }
    }, [courseContext.state.resultSearch])

    const renderItem = () => {
        if(props.name === ScreenKey.Authors){
            return data.map((item, index) => <AuthorsResult key={index} item={item} navigation={props.navigation} />)
        }
        return data.map((item, index) => <DownloadItem key={index} item={item} navigation={props.navigation} />)
    }
    
    return(
        <View style={styles.courses}>
            <View style={styles.results}>
                <Text style={Styles.text(18, theme ? '#fff' : '#000', 'bold')}>{data.length} {language ? 'results' : 'kết quả'}</Text>
            </View>
            <ScrollView style={styles.listCourses}>
                {renderItem()}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    courses: {
        margin: 20,
        marginTop: 30,
        marginBottom: 15,
    },
    results: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listCourses: {
        marginTop: 30,
        height: (screenHeight - 320)*7.6/10,
    },
})

export default SearchByName;