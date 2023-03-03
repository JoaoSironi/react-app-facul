import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native"
import itemService from "../../services/item.service";

export default function AddTaskScreen() {
  const [name, onChangeText] = useState('');
  const [desc, onChangeTextDesc] = useState('');

  function inserirItem() {
    itemService.addItem({
      name: name,
      desc: desc,
    });
    onChangeText('');
    onChangeTextDesc('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Text style={styles.title}>Nome da tarefa:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          value={name}
        />
        <Text style={styles.title}>Descrição:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeTextDesc(text)}
          value={desc}
        />
      </View>
      <Button
        title="Salvar"
        onPress={() => inserirItem()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#F5fcff",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputView: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
  },
  input: {
      backgroundColor: "#fff",
      borderColor: "#CCC",
      borderWidth: 3,
      padding: 5,
      margin: 20,
      flex: 1
  },
});
