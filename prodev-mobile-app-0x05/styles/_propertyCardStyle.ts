import { StyleSheet } from "react-native";

const propertyCardStyle = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 180,
  },
  infoContainer: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  location: {
    fontSize: 14,
    color: "gray",
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#007AFF",
    marginTop: 6,
  },
});

export default propertyCardStyle;
