import { StyleSheet, Image, View, Text, FlatList } from "react-native";
import Colors from "@/constants/Colors";
import products from "@/data/products";
import ProductListItem from "@/components/ProductListItem";


export default function MenuScreen() {
  return (
    <View style={styles.screen}>

      <FlatList
      data={products}  renderItem={({item})=><ProductListItem product={item} />}
       numColumns={2}
       contentContainerStyle={{gap:10, padding:10}}
       columnWrapperStyle={{gap:10}}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
 
});









