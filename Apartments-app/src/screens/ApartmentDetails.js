// ApartmentDetails.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

const { width: screenWidth } = Dimensions.get("window");

const ApartmentDetails = ({ route }) => {
  const { apartment } = route.params;
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item, index }) => (
    <View>
      <TouchableOpacity onPress={() => setActiveIndex(index)}>
        <Image source={item} style={styles.apartmentImage} />
      </TouchableOpacity>
      {activeIndex === index && (
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{apartment.price}</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={apartment.images}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <FlatList
        data={apartment.images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => setActiveIndex(index)}>
            <Image source={item} style={styles.thumbnailImage} />
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.thumbnailsContainer}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.apartmentName}>{apartment.name}</Text>
        <Text style={styles.apartmentDetails}>{apartment.details}</Text>
      </View>
      <View style={styles.fixedFooter}>
        <TouchableOpacity style={styles.callUsButton}>
          <Icon name="phone" size={24} color="#fff" />
          <Text style={styles.buttonText}>Call Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.whatsappButton}>
          <FontAwesome5Icon name="whatsapp" size={24} color="#fff" />
          <Text style={styles.buttonText}>WhatsApp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  apartmentImage: {
    width: screenWidth,
    height: 250,
  },
  thumbnailsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  thumbnailImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 8,
  },
  detailsContainer: {
    marginBottom: 150,
  },
  apartmentName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  apartmentDetails: {
    fontSize: 18,
    color: "#666",
    paddingHorizontal: 16,
  },
  priceContainer: {
    position: "absolute",
    bottom: 16,
    left: 16,
    // backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 8,
    borderRadius: 8,
  },
  price: {
    color: "#fff",
    fontSize: 28,
  },
  fixedFooter: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    marginBottom: 20,
  },
  callUsButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#bababa",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 8,
  },
  whatsappButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#21eb5a",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    marginLeft: 8,
  },
});

export default ApartmentDetails;
