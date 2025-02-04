import React from 'react'; 
import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen name="book-details" options={{ title: "Book Details" }} />
            <Stack.Screen name="reader" options={{ title: "Reader" }} />
        </Stack>
    );
}
