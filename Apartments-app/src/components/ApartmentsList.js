// ApartmentsList.js
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

const apartmentsData = [
  {
    id: "1",
    name: "Modern Apartment",
    images: [
      require("../../images/apartment1.jpg"),
      require("../../images/apartment2.jpeg"),
      require("../../images/apartment3.jpg"),
    ],
    details: "2 beds | 2 baths | 1200 sqft",
    price: "5,000,00 EGP",
  },
  {
    id: "2",
    name: "Modern Apartment",
    images: [
      require("../../images/apartment4.webp"),
      require("../../images/apartment5.jpg"),
      require("../../images/apartment6.jpg"),
    ],
    details: "2 beds | 2 baths | 1200 sqft",
    price: "15,000,000 EGP",
  },
  {
    id: "3",
    name: "Modern Apartment",
    images: [
      require("../../images/apartment7.jpg"),
      require("../../images/apartment8.jpg"),
      require("../../images/apartment9.avif"),
    ],
    details: "2 beds | 2 baths | 1200 sqft",
    price: "2,000,00 EGP",
  },
  {
    id: "4",
    name: "Modern Apartment",
    images: [
      require("../../images/apartment1.jpg"),
      require("../../images/apartment2.jpeg"),
      require("../../images/apartment3.jpg"),
    ],
    details: "2 beds | 2 baths | 1200 sqft",
    price: "15,000,000 EGP",
  },
  {
    id: "5",
    name: "Modern Apartment",
    images: [
      require("../../images/apartment4.webp"),
      require("../../images/apartment5.jpg"),
      require("../../images/apartment6.jpg"),
    ],
    details: "2 beds | 2 baths | 1200 sqft",
    price: "15,000,000 EGP",
  },
  // Add more apartments as needed
];

const ApartmentsList = () => {
  const navigation = useNavigation();

  const handleApartmentPress = (apartment) => {
    navigation.navigate("ApartmentDetails", { apartment });
  };

  const renderApartment = ({ item }) => (
    <TouchableOpacity onPress={() => handleApartmentPress(item)}>
      <View style={styles.apartmentContainer}>
        <Image source={item.images[0]} style={styles.apartmentImage} />
        <Text style={styles.apartmentName}>{item.name}</Text>
        <Text style={styles.apartmentDetails}>{item.details}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <FlatList
        data={apartmentsData}
        keyExtractor={(item) => item.id}
        renderItem={renderApartment}
        style={styles.container}
      />
      <View style={{ marginTop: 10 }}></View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginBottom: 20,
  },
  apartmentContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 16,
    marginTop: 30,
  },
  apartmentImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  apartmentName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  apartmentDetails: {
    fontSize: 14,
    color: "#666",
  },
});
export default ApartmentsList;
