import React from 'react';
import { View, FlatList } from 'react-native';

import ImageButton from '../../../Common/ImageButton';

const SectionSpecialized = _ => {
    let list = [
        {
            mainTitle: 'conferences',
            extraTitle: '',
        },
        {
            mainTitle: 'business',
            extraTitle: 'professional',
        },
        {
            mainTitle: '<software>',
            extraTitle: 'development',
        },
        {
            mainTitle: 'design',
            extraTitle: 'development',
        },
        {
            mainTitle: 'conferences',
            extraTitle: 'professional',
        },
        {
            mainTitle: 'conferences',
            extraTitle: 'professional',
        },
        {
            mainTitle: 'conferences',
            extraTitle: 'professional',
        },
    ];

    let arrays = [], size = 2;
    while (list.length > 0)
        arrays.push(list.splice(0, size));

    const showListSpecialized = item => {
        let result = null;

        result =<View>
                    <View>
                        <ImageButton
                            title={item[0].mainTitle}
                            width={170}
                            height={70}
                            txt={item[0].extraTitle}
                        />
                    </View>
                    {item.length > 1 ? 
                        <View style={{marginTop: 10}}>
                            <ImageButton
                                title={item[1].mainTitle}
                                width={170}
                                height={70}
                                txt={item[1].extraTitle}
                            />
                        </View> : null
                    }
                </View>

        return result;
    }

    return(
        <FlatList
            data={arrays}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => showListSpecialized(item)}
            style={{margin: 15, marginRight: 0}}
        />
    );
}

export default SectionSpecialized;