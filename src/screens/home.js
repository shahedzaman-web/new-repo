import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import React from "react";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Scan")}
          style={styles.card}
        >
          <Text style={styles.title}>Scan</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.title}>Return</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {

    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  card: {
    borderRadius: 10,
    width: 150,
    height: 150,
    alignSelf: "center",
    backgroundColor: "#2f91ce",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  title2: {
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
    marginTop: 300,
  },
});
