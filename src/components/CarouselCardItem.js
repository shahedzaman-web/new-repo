import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ item, index }) => {
  return (
    <View>
      <View style={styles.container} key={index}>
        <Image source={{ uri: item }} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 10,
    paddingTop: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 200,
  },
  header: {
    color: "#222",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
  },
  title: {
    color: "#ffffff",
    fontWeight: "bold",
    flex: 1,
    paddingLeft: 30,
  },
  button: {
    borderRadius: 30,
    width: 310,
    height: 280,
    alignSelf: "center",
    backgroundColor: "#895ca0",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

export default CarouselCardItem;
