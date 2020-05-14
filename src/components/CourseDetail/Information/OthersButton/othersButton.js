import React from 'react';
import { View } from 'react-native';

import OthersButtonItem from '../OthersButtonItem/othersButtonItem';

const OthersButton = _ => {
    const buttons = [
        {
            name: 'Related paths & courses',
            img: require('../../../../../assets/iconPlus.png'),
        },
        {
            name: 'Take a learning check',
            img: require('../../../../../assets/iconPlus.png'),
        },
    ];

    return(
        <View>
            <OthersButtonItem data={buttons[0]} />
            <OthersButtonItem data={buttons[1]} />
        </View>
    );
}

export default OthersButton;