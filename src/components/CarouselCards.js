import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";

const CarouselCards = ({ details }) => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{details?.name}</Text>
      <Carousel
        layout="stack"
        layoutCardOffset={9}
        ref={isCarousel}
        data={details?.images}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={details?.images?.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "rgba(6,17,253,0.94)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
      <View style={styles.button}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 0.8,
            borderBottomColor: "white",
            paddingBottom: 8,
            paddingTop: 5,
          }}
        >
          <Text style={styles.title}>LOCATION :</Text>
          <Text style={styles.title}>{details?.location?.name}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 0.8,
            borderBottomColor: "white",
            paddingBottom: 8,
            paddingTop: 5,
          }}
        >
          <Text style={styles.title}>AREA :</Text>
          <Text style={styles.title}>{details?.area?.name}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 0.8,
            borderBottomColor: "white",
            paddingBottom: 8,
            paddingTop: 5,
          }}
        >
          <Text style={styles.title}>PRICE :</Text>
          <Text style={styles.title}>{details?.price}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 0.8,
            borderBottomColor: "white",
            paddingBottom: 8,
            paddingTop: 5,
          }}
        >
          <Text style={styles.title}>PART NUMBER :</Text>
          <Text style={styles.title}>{details?.no}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 0.8,
            borderBottomColor: "white",
            paddingBottom: 8,
            paddingTop: 5,
          }}
        >
          <Text style={styles.title}>STOCK :</Text>
          <Text style={styles.title}>{details?.quantity}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 0.8,
            borderBottomColor: "white",
            paddingBottom: 8,
            paddingTop: 5,
          }}
        >
          <Text style={styles.title}>DEFECT :</Text>
          <Text style={styles.title}>
            {details?.defect !== undefined ? details?.defect : "NO"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 5,
          }}
        >
          <Text style={styles.title}>For : {details?.name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#ffffff",
    fontWeight: "bold",
    flex: 1,
    paddingLeft: 30,
  },
  button: {
    borderRadius: 12,
    width: 310,
    height: 280,
    alignSelf: "center",
    backgroundColor: "#895ca0",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  header: {
    color: "#222",
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 12,
    marginBottom: 10,
  },
});

export default CarouselCards;
