import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#604746",
        alignItems: "center",
        justifyContent: "center",
        height: 100,
    },
    text: {
        color: "#ffffff",
        fontSize: 40,
    },
})