import React from "react";
import { View, Text, Button } from "react-native";

export default function BookDetailsScreen({ route, navigation }) {
  const { book } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>{book.title}</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>Format: EPUB</Text>
      <Button
        title="Read Book"
        onPress={() => navigation.navigate("Reader", { book })}
      />
    </View>
  );
}
