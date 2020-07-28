import React from 'react';
import { View, StyleSheet } from 'react-native';

import HeaderInformation from './HeaderInformation/headerInformation';
import ButtonInformation from './ButtonInformation/buttonInformation';
import DescribeCourse from './DescribeCourse/describeCourse';
import Separator from '../../Common/Separator';

const Information = props => {
    const { infor, authorInfo } = props;
    
    return(
        <View style={{margin: 20}}>
            <HeaderInformation authorInfo={authorInfo} navigation={props.navigation} info={infor} />
            <View style={styles.btn}>
                <ButtonInformation data={infor} />
            </View>
            <Separator />
            <DescribeCourse info={infor} />
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