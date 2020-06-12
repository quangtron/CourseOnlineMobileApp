import React, { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';

import SectionAuthorsItem from '../SectionAuthorsItem/sectionAuthorsItem';
import Styles from '../../../Common/Styles';
import { AuthorsContext } from '../../../../provider/authors-provider';

const SectionAuthors = props => {
    const {authors} = useContext(AuthorsContext);

    const showAuthorsItem = authors => {
        let result = null;

        result = authors.map((item, index) => <SectionAuthorsItem key={index} item={item} items={props.items} navigation={props.navigation} />)

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