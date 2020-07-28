import React, { useContext, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import Styles from "../../Common/Styles";
import Separator from "../../Common/Separator";
import { AuthenticationContext } from "../../../provider/authentication-provider";

const Profile = (props) => {
  const authenticationContext = useContext(AuthenticationContext);
  const { avatar, name, email, phone } = authenticationContext.state.user;
  const [nameEdit, setNameEdit] = useState('');
  const [phoneEdit, setPhoneEdit] = useState('');
  const [isEdit, setEdit] = useState(false);

  useEffect(() => {
    setNameEdit(name);
    setPhoneEdit(phone);
  }, [])

  const onChangeInfo = () => {
    setEdit(!isEdit);
    authenticationContext.changeInfoUser(
      nameEdit,
      avatar,
      phoneEdit,
      authenticationContext.state.access_token
    );
  };

  const onCancelChange = () => {
    setEdit(!isEdit);
  }

  return (
    <ScrollView style={{ margin: 20 }}>
      <View style={styles.userInfor}>
        <Image style={styles.image} source={{ uri: avatar }} />
        <View style={{ marginLeft: 10 }}>
          <Text style={Styles.text(18, "#000", "normal")}>{name}</Text>
          <Text style={Styles.text(16, "#9E9E9E", "normal")}>{email}</Text>
        </View>
      </View>

      <Separator />

      <Text style={styles.textSection}>Email:</Text>
      <TextInput
        style={styles.sectionInfo(false)}
        editable={false}
        onChangeText={(text) => setNameEdit(text)}
      >{email}</TextInput>

      <Text style={styles.textSection}>Name:</Text>
      <TextInput
        style={styles.sectionInfo(isEdit)}
        editable={isEdit}
        onChangeText={(text) => setNameEdit(text)}
      >{nameEdit}</TextInput>
      
      <Text style={styles.textSection}>Phone number:</Text>
      <TextInput
        style={styles.sectionInfo(isEdit)}
        editable={isEdit}
        onChangeText={(text) => setPhoneEdit(text)}
      >{phoneEdit}</TextInput>

      {isEdit
        ? <TouchableOpacity style={styles.btnLayout(1)} onPress={() => onChangeInfo()}>
          <Text style={Styles.text(18, "#00B0FF", "normal")}>
            Lưu thay đổi
          </Text>
        </TouchableOpacity>
        : <View />
      }
      <TouchableOpacity style={styles.btnLayout(2)} onPress={() => onCancelChange()}>
        <Text style={Styles.text(18, "tomato", "normal")}>
          {isEdit ? 'Huỷ thay đổi' : 'Thay đổi thông tin'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  userInfor: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  btnLayout: (x) => {
    return {
      marginTop: 50,
      justifyContent: "center",
      alignItems: "center",
  
      height: 50,
      backgroundColor: "#fff",
      borderWidth: 2,
      borderColor: x === 1 ? "#00B0FF" : "tomato",
      borderRadius: 10,
    }
  },
  sectionInfo: (bool) => {
    return {
      fontSize: 18,
      margin: 20,
      marginTop: 10,
      paddingRight: 20,
      paddingLeft: 20,
      borderWidth: bool ? 1 : 0,
      borderRadius: 20,
      borderColor: '#ff5252',
      backgroundColor: bool ? '#fff' : '#E0E0E0',
      height: 40,
      color: '#304FFE',
    }
  },
  textSection: {
    marginLeft: 20,
    fontSize: 16,
    fontStyle: 'italic',
  }
});

export default Profile;
