import React from "react";
import { View, Text, Button } from "react-native";

export default function Index({ navigation }) {
  const book = {
    title: "Introducing Bootstrap 4",
    file: "Introducing_Bootstrap_4.epub", // Assuming you have the EPUB file
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>{book.title}</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>Format: EPUB</Text>
      <Button
        title="Read Book"
        onPress={() => navigation.navigate('ReaderScreen', { book })}
      />
    </View>
  );
}