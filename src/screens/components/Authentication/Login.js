// Import React and Component
import React, { useState, createRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  Text,
  Alert,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Surface } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Loader from "../Loader";

const LoginScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("ABC");
  const [userPassword, setUserPassword] = useState("ABC");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext("");
    if (!userEmail) {
      alert("Please fill Email");
      return;
    }
    if (!userPassword) {
      alert("Please fill Password");
      return;
    }
    setLoading(true);
    let dataToSend = { email: userEmail, password: userPassword };
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    setLoading(false);
    navigation.navigate("Welcome");
    /*
    fetch("http://localhost:8000/api/user/login", {
      method: "POST",
      body: formBody,
      headers: {
        //Header Defination
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === "success") {
          AsyncStorage.setItem("user_id", responseJson.data.email);
          console.log(responseJson.data.email);
          navigation.replace("DrawerNavigationRoutes");
        } else {
          setErrortext(responseJson.msg);
          console.log("Please check your email id or password");
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      }); */
  };

  return (
    <SafeAreaView style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <SafeAreaView style={styles.contentBody}>
          <KeyboardAvoidingView enabled>
            <View style={{ backgroundColor: "#383A3C" }}>
              <Image
                source={require("../../../../assets/header.png")}
                style={{
                  width: "100%",
                  height: 400,
                  resizeMode: "contain",
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="#686D76"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                placeholder="Enter Password" //12345
                placeholderTextColor="#686D76"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != "" ? (
              <Text style={styles.errorTextStyle}>{errortext}</Text>
            ) : null}

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}
            >
              <Surface style={styles.surface}>
                <Text style={styles.buttonTextStyle}>Sign In</Text>
              </Surface>
            </TouchableOpacity>

            <Text
              style={styles.forgotTextStyle}
              onPress={() => Alert.alert("Forgot Password")}
            >
              Forgot Password?
            </Text>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("RegisterScreen")}
            >
              <Surface style={styles.surface}>
                <Text style={styles.buttonTextStyle}>Sign Up</Text>
              </Surface>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#DEEEEA",
    alignContent: "center",
  },
  contentBody: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 0,
    backgroundColor: "#DEEEEA",
  },
  SectionStyle: {
    flexDirection: "row",
    height: 50,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
  },
  buttonStyle: {
    height: 50,
    alignItems: "center",
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#373A40",
    fontSize: 16,
    fontWeight: "400",
  },
  surface: {
    height: 50,
    width: "100%",
    backgroundColor: "#FFC93C",
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 5,
  },
  inputStyle: {
    flex: 1,
    color: "#686D76",
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#686D76",
  },
  forgotTextStyle: {
    textAlign: "center",
    color: "#686D76",
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});
