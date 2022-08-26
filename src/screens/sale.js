import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import { postSale } from "../network/apiSale";
import { DataContext } from "../context/DataContext";

export default function Sale({ navigation, route }) {
  const { price, id } = route?.params;
  //   const [controlledValue, setControlledValue] = useState(false);
  const [discount, setDiscount] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [saveCashLoading, setSaveCashLoading] = useState(false);
  const [mpeasLoading, setMpeasLoading] = useState(false);
  const { userInfo } = React.useContext(DataContext);
  const handleSaveCash = async () => {
    try {
      setSaveCashLoading(true);
      const payload = {
        type: "Cash",
        amount: price,
        discount: discount,
      };
      const res = await postSale(id, userInfo?.jwt_token, payload);
      alert(res);
      setDiscount("");
      setSaveCashLoading(false);
      navigation.navigate("Scan");
    } catch (error) {
    //   console.log({ error });
      alert(error.message);
      setSaveCashLoading(false);
    }
  };
  const handleSaveMpeas = async () => {
    try {
      setMpeasLoading(true);
      const payload = {
        type: "MPESA",
        amount: price,
        discount: discount,
        confirmationCode: confirmationCode,
      };
      const res = await postSale(id, userInfo?.jwt_token, payload);
      alert(res);
      setDiscount("");
      setConfirmationCode("");
      setMpeasLoading(false);
      navigation.navigate("Scan");
    } catch (error) {
    //   console.log({ error });
      alert(error.message);
      setMpeasLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* <View style={{flexDirection:"row",justifyContent:"center"}}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.title}>
                        Payment
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.title}>
                        Replacement
                    </Text>
                </TouchableOpacity>
            </View> */}
      <View style={{ justifyContent: "center", marginTop: 12 }}>
        <CollapsibleView title="Cash" unmountOnCollapse>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderWidth: 0.5,
              padding: 5,
              height: 30,
            }}
          >
            <Text>Amount</Text>
            <Text>Kshs. {price}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderWidth: 0.5,
              padding: 5,
              height: 60,
              alignItems: "center",
            }}
          >
            <Text>Discount</Text>
            <TextInput
              value={discount}
              keyboardType="numeric"
              onChangeText={(text) => setDiscount(text)}
              style={styles.inputText}
              placeholderTextColor="white"
              placeholder="Discount"
            />
          </View>
          <View style={{ justifyContent: "flex-end", marginBottom: 15 }}>
            <TouchableOpacity onPress={handleSaveCash} style={styles.button2}>
              {saveCashLoading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text style={styles.title2}>Save</Text>
              )}
            </TouchableOpacity>
          </View>
        </CollapsibleView>
      </View>
      <View style={{ justifyContent: "center" }}>
        <CollapsibleView title="MPEASP" unmountOnCollapse>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderWidth: 0.5,
              padding: 5,
              height: 30,
            }}
          >
            <Text>Amount</Text>
            <Text>Kshs. {price}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderWidth: 0.5,
              padding: 5,
              height: 60,
              alignItems: "center",
            }}
          >
            <Text>Discount</Text>
            <TextInput
              value={discount}
              keyboardType="numeric"
              onChangeText={(text) => setDiscount(text)}
              style={styles.inputText}
              placeholderTextColor="white"
              placeholder="Discount"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderWidth: 0.5,
              padding: 5,
              height: 60,
              alignItems: "center",
            }}
          >
            <Text>Confirmation Code</Text>
            <TextInput
              value={confirmationCode}
              onChangeText={(text) => setConfirmationCode(text)}
              style={styles.inputText}
              placeholderTextColor="white"
              placeholder="Confirmation Code"
            />
          </View>
          <View style={{ justifyContent: "flex-end", marginBottom: 15 }}>
            <TouchableOpacity onPress={handleSaveMpeas} style={styles.button2}>
              {mpeasLoading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text style={styles.title2}>Save</Text>
              )}
            </TouchableOpacity>
          </View>
        </CollapsibleView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: "white",
  },
  button: {
    borderRadius: 5,
    width: 165,
    height: 45,
    alignSelf: "center",
    backgroundColor: "#3261d8",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  descriptionText: { textAlign: "center" },
  inputText: {
    backgroundColor: "#1166be",
    color: "white",
    width: 150,
    height: 50,
    borderWidth: 0.8,
    padding: 10,
    borderRadius: 5,
  },
  title2: {
    fontSize: 16,
  },
  button2: {
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
