import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import SectionAuthorsItem from '../SectionAuthorsItem/sectionAuthorsItem';
import Styles from '../../../Common/Styles';

const SectionAuthors = props => {
    const authors = [
        {
            id: 1,
            img: require('../../../../../assets/bgLogin.jpg'),
            name: 'Trong 1',
        },
        {
            id: 2,
            img: require('../../../../../assets/bgLogin.jpg'),
            name: 'Trong 2',
        },
        {
            id: 3,
            img: require('../../../../../assets/bgLogin.jpg'),
            name: 'Trong 3',
        },
        {
            id: 4,
            img: require('../../../../../assets/bgLogin.jpg'),
            name: 'Trong 4',
        },
        {
            id: 5,
            img: require('../../../../../assets/bgLogin.jpg'),
            name: 'Trong 5',
        },
        {
            id: 6,
            img: require('../../../../../assets/bgLogin.jpg'),
            name: 'Trong 6',
        },
        {
            id: 7,
            img: require('../../../../../assets/bgLogin.jpg'),
            name: 'Trong 7',
        },
    ];

    const showAuthorsItem = authors => {
        let result = null;

        result = authors.map((item, index) => <SectionAuthorsItem key={index} item={item} />)

        return result;
    }

    return(
        <View style={{margin: 15, marginRight: 0}}>
            <View>
                <Text style={[Styles.text(16, '#000', 'bold'), {marginBottom: 10}]}>{props.title}</Text>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {showAuthorsItem(authors)}
            </ScrollView>
        </View>
    );
}

export default SectionAuthors;