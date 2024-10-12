import { StyleSheet, Image, View, Text, Pressable } from "react-native";
import Colors from "@/constants/Colors";
import { Product } from "../types";
import { Link } from "expo-router";

export const defaultpizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png";

type ProductListItemprops = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemprops) => {
  return (
    <Link  href={`/menu/${product.id}`} asChild>
    <Pressable style={styles.container}>
      <Image
        source={{ uri: product.image || defaultpizzaImage }}
        style={styles.pimage}
        resizeMode="contain"
      />
      <Text style={styles.ptitle}>{product.name}</Text>
      <Text style={styles.pprice}>${product.price}</Text>
    
    </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding: 10,
    borderRadius: 20,
    flex:1,
    maxWidth:"50%"
  },
  ptitle: { fontSize: 20, fontWeight: "700", marginVertical: 10 },
  pprice: {
    color: Colors.light.tint,
  },
  pimage: {
    width: "100%",
    aspectRatio: 1,
  },
});
