import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Separator from '../../Common/Separator';
import Styles from '../../Common/Styles';

const Subscription = _ => {
    return(
        <View style={styles.total}>
            <Text style={Styles.text(18, '#000', 'normal')}>
                You have access to the following limited subscription:{'\n'}
                {'\t'}+ Free Courses Online IQ(Limited Library){'\n'}
                {'\t'}   (expires may 14, 2021){'\n\n\n'}
                Click upgrade to subscribe to our full library.
            </Text>
            <TouchableOpacity style={Styles.btnLayout(160, 45, '#00B0FF')}>
                <Text style={Styles.text(18, '#fff', 'bold')}>Upgrade now</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    total: {
        margin: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
})

export default Subscription;