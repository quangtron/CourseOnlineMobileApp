import React from 'react';
import { View, FlatList } from 'react-native';

import ImageButton from '../../../Common/ImageButton';

const SectionSpecialized = props => {
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
    const dataSections = {
        title: 'New Releases',
        data: [
            {
                id: 1,
                title: 'React Native 1',
                img: require('../../../../../assets/bgLogin.jpg'),
                author: 'T1',
                level: 'Beginner',
                released: 'May 11, 2020',
                duration: '38h'
            },
            {
                id: 2,
                title: 'React Native 2',
                img: require('../../../../../assets/bgLogin.jpg'),
                author: 'T2',
                level: 'Beginner',
                released: 'May 11, 2020',
                duration: '38h'
            },
            {
                id: 3,
                title: 'React Native 3',
                img: require('../../../../../assets/bgLogin.jpg'),
                author: 'T3',
                level: 'Beginner',
                released: 'May 11, 2020',
                duration: '38h'
            },
        ],
    };

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
                            navigation={props.navigation}
                            items={dataSections}
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
                                navigation={props.navigation}
                                items={dataSections}
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