import React from 'react';
import { View, FlatList } from 'react-native';

import ImageButton from '../../../Common/ImageButton';

const SectionSpecialized = _ => {
    let list = [
        {
            id: 1,
            img: require('../../../../../assets/bgLogin.jpg'),
            mainTitle: 'conferences',
            extraTitle: '',
        },
        {
            id: 2,
            img: require('../../../../../assets/bgLogin.jpg'),
            mainTitle: 'business',
            extraTitle: 'professional',
        },
        {
            id: 3,
            img: require('../../../../../assets/bgLogin.jpg'),
            mainTitle: '<software>',
            extraTitle: 'development',
        },
        {
            id: 4,
            img: require('../../../../../assets/bgLogin.jpg'),
            mainTitle: 'design',
            extraTitle: 'development',
        },
        {
            id: 5,
            img: require('../../../../../assets/bgLogin.jpg'),
            mainTitle: 'conferences',
            extraTitle: 'professional',
        },
        {
            id: 6,
            img: require('../../../../../assets/bgLogin.jpg'),
            mainTitle: 'conferences',
            extraTitle: 'professional',
        },
        {
            id: 7,
            img: require('../../../../../assets/bgLogin.jpg'),
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
                            extraTitle={item[0].extraTitle}
                            img={item[0].img}
                        />
                    </View>
                    {item.length > 1 ? 
                        <View style={{marginTop: 10}}>
                            <ImageButton
                                title={item[1].mainTitle}
                                width={170}
                                height={70}
                                extraTitle={item[1].extraTitle}
                                img={item[1].img}
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
            renderItem={({item}) => showListSpecialized(item)}
            style={{margin: 15, marginRight: 0}}
        />
    );
}

export default SectionSpecialized;