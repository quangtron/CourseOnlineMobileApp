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
import { SettingCommonContext } from "../../../../provider/settingCommon-provider";

const SearchInput = (props) => {
  const {language, theme} = useContext(SettingCommonContext);
  const [search, setSearch] = useState("");
  const [opt, setOpt] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
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
          placeholder={language ? "Enter keyword ..." : "Nhập từ khoá ..."}
          value={search}
          onChangeText={(search) => setSearch(search)}
        />
        <TouchableOpacity style={styles.btnSearch} onPress={() => onSearch()}>
          <Ionicons name="md-search" size={35} color={theme ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>
      <View style={styles.sortFilterBox}>
        <RNPickerSelect
          onValueChange={(value) => onSort(value)}
          items={ArraySelect(language)}
          placeholder={{
            label: language ? "Sort" : "Sắp xếp",
            value: null,
          }}
          style={{
            inputIOS: styles.container,
            iconContainer: {
              top: 20,
            },
            placeholder: {
              color: theme ? '#fff' : '#000'
            }
          }}
          Icon={() => (
            <Ionicons name="ios-arrow-dropdown" size={24} color="#2196F3" />
          )}
        />
        <TouchableOpacity style={styles.filterStyle} onPress={() => onHandleToggleModal(!modalVisible)}>
          <Ionicons name="ios-color-filter" size={22} color="#fff" />
          <Text style={{color: '#fff', marginLeft: 10}}>{language ? 'Filter' : 'Lọc kết quả'}</Text>
        </TouchableOpacity>
      </View>
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
    height: 50,
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
