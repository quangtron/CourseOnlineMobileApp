import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ScreenKey } from '../../global/constants';

function ButtonSetting(props) {
    const onPressRight = () => {
        props.navigation.navigate(ScreenKey.Setting);
    }

    return(
        <TouchableOpacity style={{marginRight: 20}} onPress={onPressRight}>
            <Ionicons name="md-settings" size={28} color="black" />
        </TouchableOpacity>
    );
}

export default ButtonSetting;