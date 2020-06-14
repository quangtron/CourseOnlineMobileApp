import React, { useContext, useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import SearchInput from './SearchInput/searchInput';
import SearchTabResults from './SearchTabResults/searchTabResults';
import { MainContext } from '../../../provider/main-provider';
import { ScreenKey } from '../../../global/constants';
import { SearchContext } from '../../../provider/search-provider';

const Search = props => {
    // const result = [
    //     {
    //         title: 'Courses',
    //         data: [
    //             {
    //                 id: 1,
    //                 title: 'React Native 1',
    //                 img: require('../../../../assets/bgLogin.jpg'),
    //                 author: 'T1',
    //                 level: 'Beginner',
    //                 released: 'May 11, 2020',
    //                 duration: '38h'
    //             },
    //             {
    //                 id: 2,
    //                 title: 'React Native 2',
    //                 img: require('../../../../assets/bgLogin.jpg'),
    //                 author: 'T2',
    //                 level: 'Beginner',
    //                 released: 'May 11, 2020',
    //                 duration: '38h'
    //             },
    //             {
    //                 id: 3,
    //                 title: 'React Native 3',
    //                 img: require('../../../../assets/bgLogin.jpg'),
    //                 author: 'T3',
    //                 level: 'Beginner',
    //                 released: 'May 11, 2020',
    //                 duration: '38h'
    //             },
    //         ],
    //     },
    //     {
    //         title: 'Paths',
    //         data: [
    //             {
    //                 id: 1,
    //                 title: 'React',
    //                 img: require('../../../../assets/bgLogin.jpg'),
    //                 courses: 5,
    //                 data: [
    //                     {
    //                         id: 1,
    //                         title: 'React Native 1',
    //                         img: require('../../../../assets/bgLogin.jpg'),
    //                         author: 'T1',
    //                         level: 'Beginner',
    //                         released: 'May 11, 2020',
    //                         duration: '38h'
    //                     },
    //                     {
    //                         id: 1,
    //                         title: 'React Native 1',
    //                         img: require('../../../../assets/bgLogin.jpg'),
    //                         author: 'T1',
    //                         level: 'Beginner',
    //                         released: 'May 11, 2020',
    //                         duration: '38h'
    //                     },
    //                     {
    //                         id: 1,
    //                         title: 'React Native 1',
    //                         img: require('../../../../assets/bgLogin.jpg'),
    //                         author: 'T1',
    //                         level: 'Beginner',
    //                         released: 'May 11, 2020',
    //                         duration: '38h'
    //                     },
    //                 ]
    //             },
    //             {
    //                 id: 2,
    //                 title: 'React Native 2',
    //                 img: require('../../../../assets/bgLogin.jpg'),
    //                 courses: 6,
    //             },
    //         ],
    //     },
    //     {
    //         title: 'Authors',
    //         data: [
    //             {
    //                 id: 1,
    //                 img: require('../../../../assets/bgLogin.jpg'),
    //                 author: 'T1',
    //                 courses: 5,
    //                 data:[
    //                     {
    //                         id: 1,
    //                         title: 'React Native 1',
    //                         img: require('../../../../assets/bgLogin.jpg'),
    //                         author: 'T1',
    //                         level: 'Beginner',
    //                         released: 'May 11, 2020',
    //                         duration: '38h'
    //                     },
    //                     {
    //                         id: 1,
    //                         title: 'React Native 1',
    //                         img: require('../../../../assets/bgLogin.jpg'),
    //                         author: 'T1',
    //                         level: 'Beginner',
    //                         released: 'May 11, 2020',
    //                         duration: '38h'
    //                     },
    //                 ]
    //             },
    //             {
    //                 id: 2,
    //                 img: require('../../../../assets/bgLogin.jpg'),
    //                 author: 'T2',
    //                 courses: 6,
    //             },
    //             {
    //                 id: 3,
    //                 img: require('../../../../assets/bgLogin.jpg'),
    //                 author: 'T3',
    //                 courses: 7,
    //             },
    //         ],
    //     },
    // ];

    const {main} = useContext(MainContext);
    const {search} = useContext(SearchContext);
    const [results, setResults] = useState([]);

    // useEffect(() => {
    //     console.log(search);
    //     // const result = main.Courses.data.filter((item) => {
    //     //     return item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    //     // })

    //     // setResults([
    //     //     {title: ScreenKey.Courses, data: result},
    //     //     {title: ScreenKey.Paths, data: result},
    //     //     {title: ScreenKey.Authors, data: []},
    //     // ])
    // })


    // const onSearch = (text) => {
    //     // results = results.filter((item) => {
    //     //     return item.title.toLowerCase().indexOf(text.toLowerCase()) !== -1;
    //     // })
    //     const result = main.Courses.data.filter((item) => {
    //         return item.title.toLowerCase().indexOf(text.toLowerCase()) !== -1;
    //     })

    //     setResults([
    //         {title: ScreenKey.Courses, data: results},
    //         {title: ScreenKey.Paths, data: results},
    //         {title: ScreenKey.Authors, data: []},
    //     ])
    // }

    return(
        <ScrollView scrollEnabled={false}>
            <SearchInput />
            <SearchTabResults navigation={props.navigation} />
        </ScrollView>
    );
}

export default Search;