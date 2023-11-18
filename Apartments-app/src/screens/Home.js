import React from "react";
import { ScrollView, View } from "react-native";

import ApartmentsList from "../components/ApartmentsList";
import SearchBar from "../components/Searchbar";

function Home() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <SearchBar />
      <ApartmentsList />
    </ScrollView>
  );
}

export default Home;
