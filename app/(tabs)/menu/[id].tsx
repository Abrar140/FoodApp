import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "@/data/products";
import { useState } from "react";
import Button from "@/components/Button";

const sizes = ["S", "M", "L", "XL"];

const ProductDetailScreens = () => {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState("M");
  const product = products.find((p) => p.id.toString() === id);

  const addtoCart=()=>{
    console.warn("add to cart" +selectedSize)
  }
  if (!product) {
    return <Text>Product not found</Text>;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image source={{ uri: product?.image }} style={styles.image} />
      <Text> select sizes</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable   onPress={() => setSelectedSize(size)}
            style={[
              styles.sizee,
              {
                backgroundColor: selectedSize === size ? "gainsboro" : "white",
              },
            ]}
            key={size}
          >
            <Text
              style={[
                styles.sizeText,
                {
                  color:
                    selectedSize === size ? "black" : "gray",
                },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>{product?.price}</Text>
      <Button  onPress={addtoCart} text="Add to cart"/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 'auto',
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  sizee: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export default ProductDetailScreens;
