import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import moment from 'moment';
import { Ionicons } from "@expo/vector-icons";

import { SettingCommonContext } from '../../../provider/settingCommon-provider';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Comment = (props) => {
    const {language, theme} = useContext(SettingCommonContext);
    const [isShowDropdown, setShowDropdown] = useState(false);

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
                    showSelection(data)
                ) : (
                    <View />
                )}
            </View>
        )
    }

    return(
        <View style={styles.container(theme)}>
            <ScrollView>
                {renderListComment(props.data.ratingList)}
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
})

export default Comment;