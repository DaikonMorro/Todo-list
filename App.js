import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Header from "./Components/header";
import ListItem from "./Components/list";
import Form from "./Components/form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
      { text: "Доставить набор гаек в цех 705", key: "1"},
      { text: "Разгрузить контейнер под номером №53941", key: "2"},
      { text: "Очистить вентиляцию от пыли", key: "3"},
  ]);

  const addHandler = (text) => {
      setListOfItems((list) => {
        return [
              { text: text, key: Math.random().toString(36).substring(7) },
              ...list,
        ];
      });
  };

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter((listOfItems) => listOfItems.key != key);
    });
  }
  return (
    <View style={styles.header}>
      <Header />
      <Form addHandler={addHandler}/>
      <View>
        <FlatList
            data={listOfItems}
            renderItem={({ item }) => (
            <ListItem el={item} deleteHandler={deleteHandler}/>
            )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
      flex: 1,
  },
  text: {
    fontSize: 30,
  },
});
