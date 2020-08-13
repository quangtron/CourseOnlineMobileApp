import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ScreenKey } from '../../global/constants';
import { SettingCommonContext } from '../../provider/settingCommon-provider';

function ButtonSetting(props) {
    const {theme} = useContext(SettingCommonContext);

    const onPressRight = () => {
        props.navigation.navigate(ScreenKey.Setting);
    }

    return(
        <TouchableOpacity style={{marginRight: 20}} onPress={onPressRight}>
            <Ionicons name="md-settings" size={28} color={theme ? '#fff' : '#000'} />
        </TouchableOpacity>
    );
}

export default ButtonSetting;