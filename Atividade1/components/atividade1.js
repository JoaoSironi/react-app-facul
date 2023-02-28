import React, { useState } from "react";
import { Button, Text, TextInput, Image, View, StyleSheet, FlatList } from "react-native";


export default function () {
    const item = [
        { key: 0, desc: "Item 1"},
        { key: 1, desc: "Item 2"},
    ];

    var [itens, setItens] = useState(item);
    var [texto, setTexto] = useState("");

    function renderItem({ item }) {
        return (
            <Text style={styles.item}>{item.desc}</Text>
        );
    }

    function insertItem() {
        let newItem = {
            key: itens.length,
            desc: texto
        }

        itens.push(newItem);

        setItens(itens);
        setTexto("");
    }

    return (
        <View style={styles.container}>
            <Text>Atividade 1</Text>
            <Image
                style={styles.Image}
                source={{
                    uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
            />
            <Text style={styles.text}>Lista de Tarefas</Text>
            <FlatList style={styles.list} data={itens} renderItem={renderItem} extraData={itens} />
            <View style={styles.inputView}>
                <TextInput
                    value={texto}
                    onChangeText={(newtext) => setTexto(newtext)}
                    style={styles.input}
                    placeholder="Type here!"
                />
                <Button
                    title="Add"
                    onPress={() => insertItem()}
                />
            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#F5fcff",
        paddingTop: 40
    },
    list: {
        marginTop: 20
    },
    Image: {
        width: 100,
        height: 100,
        margin: 30,
        marginLeft: "37%",
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
    item: {
        padding: 20,
        backgroundColor: "#c5ffc4",
        fontSize: 18,
        marginBottom: 2
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    }

});