import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import HeaderInformation from './HeaderInformation/headerInformation';
import ButtonInformation from './ButtonInformation/buttonInformation';
import DescribeCourse from './DescribeCourse/describeCourse';
import Separator from '../../Common/Separator';
import { BookmarksContext } from '../../../provider/bookmarks-provider';

const Information = props => {
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
            <HeaderInformation authorInfo={authorInfo} navigation={props.navigation} info={infor} />
            <View style={styles.btn}>
                <ButtonInformation data={infor} onToggleChange={onToggleChange} />
            </View>
            <Separator />
            <DescribeCourse info={infor} />
            {/* <OthersButton /> */}
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