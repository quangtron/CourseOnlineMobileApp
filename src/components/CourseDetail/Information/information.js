import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import HeaderInformation from './HeaderInformation/headerInformation';
import ButtonInformation from './ButtonInformation/buttonInformation';
import DescribeCourse from './DescribeCourse/describeCourse';
import Separator from '../../Common/Separator';
import OthersButton from './OthersButton/othersButton';
import { BookmarksContext } from '../../../provider/bookmarks-provider';

const Information = props => {
    const buttons = [
        {
            name: 'Bookmark',
            img: require('../../../../assets/iconBookmark.png'),
            img2: require('../../../../assets/iconBookmarked.png'),
            checked: false,
        },
        {
            name: 'Add to channel',
            img: require('../../../../assets/iconPlus.png'),
            img2: require('../../../../assets/iconPlused.png'),
            checked: false,
        },
        {
            name: 'Download',
            img: require('../../../../assets/iconDownload.png'),
            img2: require('../../../../assets/iconDownloaded.png'),
            checked: false,
        },
    ];

    const [dataBtn, setDataBtn] = useState(buttons);
    const {bookmarks} = useContext(BookmarksContext);
    const { infor, authorInfo } = props;

    useEffect(() => {
        for(let item of bookmarks){
            if(item.title === infor.title){
                let arrData = [...dataBtn];

                arrData[0].checked = true;
                setDataBtn(arrData);
            }
        }
    }, [])

    const onToggleChange = checked => {
        let arrData = [...dataBtn];

        arrData[0].checked = checked;
        setDataBtn(arrData)
    }
    
    return(
        <View style={{margin: 20}}>
            <HeaderInformation authorInfo={authorInfo} info={infor} />
            <View style={styles.btn}>
                <ButtonInformation item={dataBtn[0]} data={infor} onToggleChange={onToggleChange} />
                <ButtonInformation item={dataBtn[1]} />
                <ButtonInformation item={dataBtn[2]} data={infor} />
            </View>
            <Separator />
            <DescribeCourse des={infor.description} />
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