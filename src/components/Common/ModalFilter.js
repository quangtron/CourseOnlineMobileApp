import React, { useState, useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Checkbox } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import Styles from "./Styles";
import { CategoriesContext } from "../../provider/categories-provider";
import { ArrayTimes, ArrayPrices } from "../../global/constants";
import { SettingCommonContext } from "../../provider/settingCommon-provider";

const ModalFilterCourse = (props) => {
  const categoriesContext = useContext(CategoriesContext);
  const {language, setLanguage} = useContext(SettingCommonContext);
  const [isShowDropdown, setShowDropdown] = useState(false);
  const [isShowDropdownTime, setShowDropdownTime] = useState(false);
  const [isShowDropdownPrice, setShowDropdownPrice] = useState(false);
  const [categories, setCategories] = useState({});
  const [times, setTimes] = useState({});
  const [prices, setPrices] = useState({});

  useEffect(() => {
    if (!categoriesContext.state.isGetted) {
      categoriesContext.getAllCategories();
    }
  }, []);

  const onHandleCloseModal = () => {
    const category = categoriesContext.state.categories.filter((item)  => categories[item.name] === true);
    const time = ArrayTimes.filter((item) => times[item.name] === true);
    const price = ArrayPrices.filter((item) => prices[item.name] === true);
    props.onHandleCloseModal(false, {category, time, price});
  };

  const onHandleCancel = () => {
    onDeleteAll();
    props.onHandleCancel();
  };

  const onDeleteAll = () => {
    setCategories({});
    setPrices({});
    setTimes({});
  }

  const showSelection = (dataCategories) =>
    dataCategories.map((item, index) => {
      return (
        <View style={styles.checkbox} key={index}>
          <Checkbox.Item
            label={item.name}
            status={categories[item.name] ? "checked" : "unchecked"}
            onPress={() =>
              setCategories({
                ...categories,
                [item.name]: !categories[item.name]
              })
            }
          />
        </View>
      );
    });

  const showSelectionTime = (dataTimes) => dataTimes.map((item, index) => {
    return (
      <View style={styles.checkbox} key={index}>
        <Checkbox.Item
          label={item.name}
          status={times[item.name] ? "checked" : "unchecked"}
          onPress={() =>
            setTimes({
              ...times,
              [item.name]: !times[item.name]
            })
          }
        />
      </View>
    )
  })
  
  const showSelectionPrice = (dataTimes) => dataTimes.map((item, index) => {
    return (
      <View style={styles.checkbox} key={index}>
        <Checkbox.Item
          label={item.name}
          status={prices[item.name] ? "checked" : "unchecked"}
          onPress={() =>
            setPrices({
              ...prices,
              [item.name]: !prices[item.name]
            })
          }
        />
      </View>
    )
  })

  return (
    <Modal
      animationType="slide"
      visible={props.visibleCheck}
      presentationStyle="formSheet"
    >
      <ScrollView>
        {categoriesContext.state.isGetted ? (
          <View style={styles.modalStyle}>
            <Text style={styles.textHead}>- {language ? 'Filter' : 'Lọc kết quả'} -</Text>
            <View style={styles.box}>
              <TouchableOpacity
                style={styles.sectionFilter}
                onPress={() => setShowDropdown(!isShowDropdown)}
              >
                <Text style={styles.textTitle}>{language ? 'Categories' : 'Chủ đề'}</Text>
                <Ionicons name={isShowDropdown ? "ios-arrow-dropup" : "ios-arrow-dropdown"} size={24} color="#2962FF" />
              </TouchableOpacity>
              {isShowDropdown ? (
                showSelection(categoriesContext.state.categories)
              ) : (
                <View />
              )}
            </View>
            <View style={styles.box}>
              <TouchableOpacity
                style={styles.sectionFilter}
                onPress={() => setShowDropdownTime(!isShowDropdownTime)}
              >
                <Text style={styles.textTitle}>{language ? 'Times' : 'Thời lượng'}</Text>
                <Ionicons name={isShowDropdownTime ? "ios-arrow-dropup" : "ios-arrow-dropdown"} size={24} color="#2962FF" />
              </TouchableOpacity>
              {isShowDropdownTime ? (
                showSelectionTime(ArrayTimes)
              ) : (
                <View />
              )}
            </View>
            <View style={styles.box}>
              <TouchableOpacity
                style={styles.sectionFilter}
                onPress={() => setShowDropdownPrice(!isShowDropdownPrice)}
              >
                <Text style={styles.textTitle}>{language ? 'Price' : 'Học phí'}</Text>
                <Ionicons name={isShowDropdownPrice ? "ios-arrow-dropup" : "ios-arrow-dropdown"} size={24} color="#2962FF" />
              </TouchableOpacity>
              {isShowDropdownPrice ? (
                showSelectionPrice(ArrayPrices)
              ) : (
                <View />
              )}
            </View>
            <TouchableOpacity
              onPress={() => {onDeleteAll()}}
              style={styles.btnStyle(1)}
            >
              <Ionicons name="ios-trash" size={24} color="#fff" style={{marginRight: 5}} />
              <Text style={Styles.text(16, "#fff", "normal")}>{language ? 'Delete all' : 'Xoá tất cả'}</Text>
            </TouchableOpacity>
            <View style={styles.btnBox}>
              <TouchableOpacity
                onPress={() => {onHandleCloseModal()}}
                style={styles.btnStyle(2)}
              >
                <Text style={Styles.text(16, "#fff", "normal")}>{language ? 'Filter' : 'Lọc'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {onHandleCancel()}}
                style={styles.btnStyle(1)}
              >
                <Text style={Styles.text(16, "#fff", "normal")}>{language ? 'Cancel' : 'Huỷ lọc'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <ActivityIndicator />
        )}
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    position: "relative",
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  textHead: {
    marginTop: 10,
    marginBottom: 50,
    fontSize: 20,
    fontWeight: "bold",
    color: "#03A9F4",
    textTransform: "uppercase",
  },
  textTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2962FF",
  },
  box: {
    borderWidth: 1,
    borderColor: "#03A9F4",
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
    width: "100%",
  },
  btnStyle: (x) => {
    return {
      width: 150,
      height: 40,
      borderWidth: 1,
      borderColor: x === 1 ? "tomato" : "#2196F3",
      backgroundColor: x === 1 ? "tomato" : "#2196F3",
      borderRadius: 25,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    };
  },
  btnBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 100,
    marginBottom: 50,
  },
  checkbox: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#00E676",
    marginBottom: 15,
    marginTop: 10,
  },
  sectionFilter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ModalFilterCourse;
