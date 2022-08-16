import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React from "react";

import { DataContext } from "../context/DataContext";
import authStorage from "../utils/authStorage";
import { processSignIn } from "../network/apiSignIn";

export default function SignIn({ navigation }) {
  const { setLogged, setUserInfo } = React.useContext(DataContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSignIn = async () => {
    if (email === "" || password === "") {
      alert("Please enter all field.");
    } else {
      const payload = {
        email,
        password,
      };
      setIsLoading(true);
      const response = await processSignIn(payload);
      if (response?.data?.code === 401) {
        alert(response?.data?.message);
        setIsLoading(false);
      } else {
        setLogged(true);
        setIsLoading(false);

        setUserInfo(response?.data?.payload);
        await authStorage.storeAuthToken(
          JSON.stringify(response?.data?.payload)
        );
        navigation.replace("App");
      }
    }
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={require("../../assets/logo.png")} style={styles.image} />
      <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>
        Manage products from Auto Flow
      </Text>
      <View style={{ paddingHorizontal: 16, paddingVertical: 25 }}>
        <TextInput
          onChangeText={(e) => setEmail(e)}
          style={styles.inputText}
          placeholder="Input Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          onChangeText={(e) => setPassword(e)}
          style={styles.inputText}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#2A0944" />
          ) : (
            <Text style={styles.title}>Login</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    alignSelf: "center",
    width: 200,
    height: 200,
    borderRadius: 4,
    marginTop: 30,
  },
  inputText: {
    height: 48,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 25,
  },
  title: {
    fontSize: 16,
  },
  button: {
    borderRadius: 30,
    width: 165,
    height: 45,
    alignSelf: "center",
    backgroundColor: "#FFE600",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});
