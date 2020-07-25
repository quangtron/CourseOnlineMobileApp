import React, { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';

import SectionAuthorsItem from '../SectionAuthorsItem/sectionAuthorsItem';
import Styles from '../../../Common/Styles';

const SectionAuthors = props => {
    const showAuthorsItem = authors => {
        let result = null;

        result = authors.map((item, index) => <SectionAuthorsItem key={index} item={item} navigation={props.navigation} />)

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
                {showAuthorsItem(props.items)}
            </ScrollView>
        </View>
    );
}

export default SectionAuthors;