import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Welcome to My Library</Text>
            {/*<Button title="Go to Book Details" onPress={() => router.push("/book-details")} />
            <Button title="Go to Reader" onPress={() => router.push("/reader")} />*/}
        </View>
    );
}
