import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { db, collection, getDocs } from "../firebaseConfig";

export default function HomeScreen({ navigation }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let isMounted = true; // Track if the component is mounted

    const fetchBooks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "books"));
        const bookList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        if (isMounted) {
          setBooks(bookList); // Only update state if component is mounted
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();

    return () => {
      isMounted = false; // Cleanup function to prevent state updates after unmount
    };
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>
        My Library
      </Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: "#ddd",
              marginBottom: 10,
              borderRadius: 5
            }}
            onPress={() => navigation.navigate("Book Details", { book: item })}
          >
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
