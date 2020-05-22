import React from 'react';
import { View, StyleSheet } from 'react-native';

import HeaderInformation from './HeaderInformation/headerInformation';
import ButtonInformation from './ButtonInformation/buttonInformation';
import DescribeCourse from './DescribeCourse/describeCourse';
import Separator from '../../Common/Separator';
import OthersButton from './OthersButton/othersButton';

const Information = props => {
    const buttons = [
        {
            name: 'Bookmark',
            img: require('../../../../assets/iconBookmark.png'),
        },
        {
            name: 'Add to channel',
            img: require('../../../../assets/iconPlus.png'),
        },
        {
            name: 'Download',
            img: require('../../../../assets/iconDownload.png'),
        },
    ];

    const showBtnInfor = buttons => {
        return buttons.map((item, index) => <ButtonInformation key={index} item={item} />)
    }
    
    return(
        <View style={{margin: 20}}>
            <HeaderInformation infor={props.infor} />
            <View style={styles.btn}>
                {showBtnInfor(buttons)}
            </View>
            <Separator />
            <DescribeCourse />
            <OthersButton />
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        marginTop: 30,
        marginBottom: 20,
        flexDirection: 'row',
    },
})

export default Information;