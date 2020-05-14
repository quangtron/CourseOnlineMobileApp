import React from 'react';
import { View } from 'react-native';

const Separator = _ => {
    return(
        <View
            style={{
                height: 1,
                marginRight: 10,
                marginBottom: 20,
                backgroundColor: '#E0E0E0',
            }}
        />
    );
}

export default Separator;