import { View, StyleSheet, Button, ScrollView } from "react-native";
import React from "react";
import CarouselCards from "../components/CarouselCards";

export default function ProductDetails({ route, navigation }) {

  const {details} = route.params;
  const handleRescan = async () => {
    await navigation.navigate("Scan");
  };
  const handleAccept = async () => {
    await navigation.navigate("Sale");
  };
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <CarouselCards details={details} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginVertical: 12,
        }}
      >
        <Button onPress={handleRescan} title="Rescan" />
        <Button onPress={handleAccept} title="Accept" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 630,
    marginTop: 10,
  },
});
