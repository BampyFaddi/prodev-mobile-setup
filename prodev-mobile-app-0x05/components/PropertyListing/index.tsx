import { View, FlatList } from "react-native";
import PropertyListingCard from "../common/PropertyListingCard";

const properties = [
  {
    id: 1,
    title: "Modern Apartment in Westlands",
    location: "Nairobi, Kenya",
    price: "$120 / night",
    image: require("../../assets/images/hero-icon.png"),
  },
  {
    id: 2,
    title: "Luxury Beach House",
    location: "Diani, Kenya",
    price: "$250 / night",
    image: require("../../assets/images/hero-icon.png"),
  },
];

export default function PropertyListing() {
  return (
    <View style={{ padding: 16 }}>
      <FlatList
        data={properties}
        renderItem={({ item }) => <PropertyListingCard property={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
