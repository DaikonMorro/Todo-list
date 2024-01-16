import React, { useState } from "react";
import {StyleSheet, TextInput, Text, Button, View} from "react-native";

export default function Form({ addHandler }) {
    const [text, setValue] = useState("");
    const onChange = (text) => {
        setValue(text);
    };
    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Впишите задачу...' />
            <Button color="#604746" onPress={() => addHandler(text)} title="Добавить задачу" />            
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        paddingTop: 20,
        paddingBottom: 20,
        fontSize: 20,
        textAlign: "center",
    }
});