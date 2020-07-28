import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";

import { CoursesContext } from "../../../../provider/courses-provider";
import ModalFilterCourse from "../../../Common/ModalFilter";
import { ArraySelect } from "../../../../global/constants";

const SearchInput = (props) => {
  const [search, setSearch] = useState("");
  const [opt, setOpt] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [nameCategory, setNameCategory] = useState([]);
  const [nameTime, setNameTime] = useState([]);
  const [namePrice, setNamePrice] = useState([]);
  const courseContext = useContext(CoursesContext);

  useEffect(() => {
    courseContext.searchCourse(search, opt, 0, 11);
  }, [opt])

  const onSearch = () => {
    courseContext.searchCourse(search, opt, 0, 11);
    props.onSearchKeyword(search);
  };

  const onSort = (value) => {
    if(value) {
      setOpt({...opt, sort: {attribute: value.name, rule: value.rule}})
    } else {
      setOpt({});
    }
  }

  const onHandleToggleModal = (bool, data) => {
    setModalVisible(bool);
    if(data){
      setNameCategory(data.category);
      setNameTime(data.time);
      setNamePrice(data.price);
      setOpt({
        ...opt,
        category: data.category.map((item) => item.id),
        time: data.time.map((item) => item.condition),
        price: data.price.map((item) => item.condition)
      });
    }
  }

  const onHandleCancel = () => {
    setModalVisible(false);
  };

  const onHandleDelete = (index, flag) => {
    if(flag === 1) {
      const newArr = [...nameCategory];
      newArr.splice(index, 1);
  
      setNameCategory([...newArr]);
      setOpt({
        ...opt,
        category: newArr.map((item) => item.id),
      });
    } else if (flag === 2) {
      const newArr = [...nameTime];
      newArr.splice(index, 1);
  
      setNameTime([...newArr]);
      setOpt({
        ...opt,
        time: newArr.map((item) => item.condition),
      });
    } else {
      const newArr = [...namePrice];
      newArr.splice(index, 1);
  
      setNamePrice([...newArr]);
      setOpt({
        ...opt,
        price: newArr.map((item) => item.condition),
      });
    }
  }

  const showCategoriesFiltered = (data, flag) => data.map((item, index) => 
    <TouchableOpacity onPress={() => onHandleDelete(index, flag)} key={index}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  )

  return (
    <View>
      <ModalFilterCourse
        visibleCheck={modalVisible}
        onHandleCloseModal={onHandleToggleModal}
        onHandleCancel={onHandleCancel}
      />
      <View style={styles.search}>
        <TextInput
          style={styles.inputSearch}
          autoFocus={true}
          clearButtonMode="always"
          placeholder="Nhập từ khoá ..."
          value={search}
          onChangeText={(search) => setSearch(search)}
        />
        <TouchableOpacity style={styles.btnSearch} onPress={() => onSearch()}>
          <Ionicons name="md-search" size={35} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.sortFilterBox}>
        <RNPickerSelect
          onValueChange={(value) => onSort(value)}
          items={ArraySelect}
          placeholder={{
            label: "Chọn kiểu sắp xếp",
            value: null,
          }}
          style={{
            inputIOS: styles.container,
            iconContainer: {
              top: 20,
            },
            placeholder: {
              color: '#000'
            }
          }}
          Icon={() => (
            <Ionicons name="ios-arrow-dropdown" size={24} color="#2196F3" />
          )}
        />
        <TouchableOpacity style={styles.filterStyle} onPress={() => onHandleToggleModal(!modalVisible)}>
          <Ionicons name="ios-color-filter" size={22} color="#fff" />
          <Text style={{color: '#fff', marginLeft: 10}}>Lọc kết quả</Text>
        </TouchableOpacity>
      </View>
      {showCategoriesFiltered(nameCategory, 1)}
      {showCategoriesFiltered(nameTime, 2)}
      {showCategoriesFiltered(namePrice, 3)}
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    margin: 20,
    marginTop: 40,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  inputSearch: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    borderRadius: 6,
    padding: 10,
    fontSize: 20,
  },
  btnSearch: {
    width: "15%",
    alignItems: "center",
  },
  container: {
    height: 45,
    width: "100%",
    margin: 20,
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: "#2196F3",
    borderRadius: 10,
  },
  selectStyle: {
    textAlign: "center",
  },
  sortFilterBox: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  filterStyle: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#2196F3",
    backgroundColor: '#2196F3',
  }
});

export default SearchInput;
