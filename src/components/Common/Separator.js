import React from 'react';
import { View } from 'react-native';

const Separator = _ => {
    return(
        <View
            style={{
                height: 1,
                marginRight: 10,
                marginBottom: 20,
                backgroundColor: '#9E9E9E',
            }}
        />
    );
}

export default Separator;