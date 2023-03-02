import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

import firebase from 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyDxH5PBYkaSovFc6LwYA1qRlfKZoXrsYFk",
  authDomain: "tasklist-un.firebaseapp.com",
  databaseURL: "https://tasklist-un-default-rtdb.firebaseio.com",
  projectId: "tasklist-un",
  storageBucket: "tasklist-un.appspot.com",
  messagingSenderId: "1093057204533",
  appId: "1:1093057204533:web:1909e903c3934e27647c7c",
  measurementId: "G-7SCM85PB2X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default function AddTaskScreen() {
  const [value, onChangeText] = useState('');

  function inserirItem() {
    database.ref('tarefas').push({
      nome: value,
      concluido: false
    });
    alert(value);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Text style={styles.title}>Nome da tarefa:</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          value={value}
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
