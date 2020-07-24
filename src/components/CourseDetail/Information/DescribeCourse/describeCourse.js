import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Styles from "../../../Common/Styles";

const DescribeCourse = (props) => {
  const [heightText, setHeightText] = useState(80);
  const [heightScroll, setHeightScroll] = useState(65);
  const [imageScroll, setImageScroll] = useState(
    require("../../../../../assets/iconDown.png")
  );
  const { info } = props;

  const showAllText = () => {
    if (heightText) {
      setHeightText(null);
      setHeightScroll(null);
      setImageScroll(require("../../../../../assets/iconUp.png"));
    } else {
      setHeightText(80);
      setHeightScroll(65);
      setImageScroll(require("../../../../../assets/iconDown.png"));
    }
  };

  const showLearnWhat = (data) => {
    return data.map((item, index) => (
      <Text key={index}>
        <Ionicons name="md-checkmark-circle-outline" size={14} color="tomato" />{" "}
        {item}
      </Text>
    ));
  };

  const showRequirement = (data) => {
    return data.map((item, index) => (
      <Text key={index}>
        <Ionicons name="ios-snow" size={14} color="tomato" /> {item}
      </Text>
    ));
  };

  return (
    <View>
      <View style={styles.section}>
        <Text style={Styles.text(16, "#000", "bold")}>Bạn sẽ học được</Text>
        <View style={{ flexDirection: "column" }}>
          {info.learnWhat.length > 0 ? (
            showLearnWhat(info.learnWhat)
          ) : (
            <Text style={styles.textItalic}>(Chưa có thông tin)</Text>
          )}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={Styles.text(16, "#000", "bold")}>Yêu cầu</Text>
        <View style={{ flexDirection: "column" }}>
          {info.requirement.length > 0 ? (
            showRequirement(info.requirement)
          ) : (
            <Text style={styles.textItalic}>(Không có yêu cầu)</Text>
          )}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={Styles.text(16, "#000", "bold")}>Mô tả</Text>
        <View style={styles.box}>
          <Text style={[styles.textArea, { height: heightText }]}>
            {info.description}
          </Text>
          <TouchableOpacity
            style={[styles.btnScroll, { height: heightScroll }]}
            onPress={() => showAllText()}
          >
            <Image style={styles.image} source={imageScroll} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    marginRight: 20,
  },
  textArea: {
    width: "97%",
    marginRight: 10,
  },
  btnScroll: {
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    backgroundColor: "#EEEEEE",
    borderRadius: 5,
  },
  image: {
    width: 12,
    height: 12,
  },
  section: {
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  textItalic: {
    fontStyle: "italic",
    color: "#424242",
    marginTop: 10,
    marginBottom: 10,
  },
});
export default DescribeCourse;
