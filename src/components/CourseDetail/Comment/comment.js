import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput } from 'react-native';
import moment from 'moment';
import { Ionicons } from "@expo/vector-icons";

import { SettingCommonContext } from '../../../provider/settingCommon-provider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthenticationContext } from '../../../provider/authentication-provider';
import { CoursesContext } from '../../../provider/courses-provider';

const Comment = (props) => {
    const {language, theme} = useContext(SettingCommonContext);
    const authenticationContext = useContext(AuthenticationContext);
    const coursesContext = useContext(CoursesContext);
    const [isShowDropdown, setShowDropdown] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [point, setPoint] = useState(0);

    useEffect(() => {
        setKeyword('');
        setPoint(0);
    }, [coursesContext.state.courseInfo])

    const renderStar = (point) => {
        return (
          <View style={{flexDirection: 'row'}}>
            { point - 1 >= 0 ? <Ionicons name="md-star" size={18} color="tomato" /> : <Ionicons name="ios-star-outline" size={18} color="tomato" />}
            { point - 2 >= 0 ? <Ionicons name="md-star" size={18} color="tomato" /> : <Ionicons name="ios-star-outline" size={18} color="tomato" />}
            { point - 3 >= 0 ? <Ionicons name="md-star" size={18} color="tomato" /> : <Ionicons name="ios-star-outline" size={18} color="tomato" />}
            { point - 4 >= 0 ? <Ionicons name="md-star" size={18} color="tomato" /> : <Ionicons name="ios-star-outline" size={18} color="tomato" />}
            { point - 5 >= 0 ? <Ionicons name="md-star" size={18} color="tomato" /> : <Ionicons name="ios-star-outline" size={18} color="tomato" />}
          </View>
        )
    }

    const renderRating = () => {
        return(
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20}}>
                <TouchableOpacity onPress={() => setPoint(1)}>
                    <Ionicons name={point >= 1 ? "md-star" : "ios-star-outline"} size={30} color="tomato" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPoint(2)}>
                    <Ionicons name={point >= 2 ? "md-star" : "ios-star-outline"} size={30} color="tomato" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPoint(3)}>
                    <Ionicons name={point >= 3 ? "md-star" : "ios-star-outline"} size={30} color="tomato" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPoint(4)}>
                    <Ionicons name={point >= 4 ? "md-star" : "ios-star-outline"} size={30} color="tomato" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPoint(5)}>
                    <Ionicons name={point >= 5 ? "md-star" : "ios-star-outline"} size={30} color="tomato" />
                </TouchableOpacity>
            </View>
        )
    }

    const showSelection = (dataCategories) =>
        dataCategories.map((item, index) => {
            return (
                <View style={styles.commentBox} key={index}>
                    <View style={styles.userBox}>
                        <Image style={styles.imageStyle} source={{uri: item.user.avatar}} />
                        <Text style={{textAlign: 'center', color: theme ? '#fff' : '#000'}}>{item.user.name}</Text>
                    </View>
                    <View style={{justifyContent: 'space-around'}}>
                        <View style={{flexDirection: 'row'}}>
                            {renderStar(item.averagePoint)}
                            <Text style={{color: '#2196F3', marginLeft: 30}}>{moment(item.updatedAt).format("DD/MM/YYYY")}</Text>
                        </View>
                        <Text style={{color: theme ? '#fff' : '#000'}}>{item.content}</Text>
                    </View>
                </View>
            );
        });

    const onHandleSave = () => {
        authenticationContext.ratingCourse(
            authenticationContext.state.access_token,
            props.courseId,
            point,
            point,
            point,
            keyword
        )

        coursesContext.getCourseInfo(props.courseId, authenticationContext.state.user.id);
    }

    const onHandleCancel = () => {
        setPoint(0);
        setKeyword('');
    }

    const renderListComment = (data) => {
        return (
            <View style={styles.box}>
                <TouchableOpacity
                    style={styles.sectionFilter}
                    onPress={() => setShowDropdown(!isShowDropdown)}
                >
                    <Text style={styles.textTitle}>{language ? 'Comments' : 'Bình luận'}</Text>
                    <Ionicons name={isShowDropdown ? "ios-arrow-dropup" : "ios-arrow-dropdown"} size={24} color="#2962FF" />
                </TouchableOpacity>
                {isShowDropdown ? (
                    <View>
                        {authenticationContext.state.checkOwnCourse.isUserOwnCourse 
                            ? <View>
                                <TextInput
                                    placeholder={language ? 'Enter your comment ...' : 'Nhập bình luận của bạn ...'}
                                    style={styles.inputStyle}
                                    placeholderTextColor='gray'
                                    value={keyword}
                                    onChangeText={(text) => {setKeyword(text)}}
                                />
                                {renderRating()}
                                <View style={styles.buttonBox}>
                                    <TouchableOpacity style={styles.btnStyle(2)} onPress={() => onHandleSave()}>
                                        <Text style={{color: '#fff'}}>{language ? 'Save' : 'Lưu'}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btnStyle(1)} onPress={() => onHandleCancel()}>
                                        <Text>{language ? 'Cancel' : 'Huỷ'}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            : <View />
                        }
                        {showSelection(data)}
                    </View>
                ) : (
                    <View />
                )}
            </View>
        )
    }

    return(
        <View style={styles.container(theme)}>
            <ScrollView>
                {coursesContext.state.courseInfo.ratingList ? renderListComment(coursesContext.state.courseInfo.ratingList) : renderListComment(props.data.ratingList)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: (bool) => {
        return {
            margin: 20,
            marginTop: 30,
            marginBottom: 0,
            backgroundColor: bool ? '#212121' : '#fff',
        }
    },
    imageStyle: {
        height: 40,
        width: 40,
        borderRadius: 100,
    },
    commentBox: {
        width: '60%',
        flexDirection: 'row',
        marginTop: 20,
    },
    userBox: {
        width: 100,
        alignItems: 'center',
        marginRight: 20,
    },
    box: {
        borderWidth: 1,
        borderColor: "#03A9F4",
        padding: 15,
        borderRadius: 10,
        marginBottom: 30,
        width: "100%",
    },
    sectionFilter: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#2962FF",
    },
    inputStyle: {
        marginTop: 20,
        marginBottom: 20,
        paddingLeft: 20,
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: '#FFA726',
    },
    buttonBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    btnStyle: (x) => {
        return {
            width: 150,
            height: 40,
            borderWidth: 1,
            borderColor: x === 1 ? "tomato" : "#2196F3",
            backgroundColor: x === 1 ? "tomato" : "#2196F3",
            borderRadius: 25,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        };
    },
})

export default Comment;