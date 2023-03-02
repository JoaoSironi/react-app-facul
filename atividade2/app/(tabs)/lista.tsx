import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import Colors from '../../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';


export default function () {
    const item = [
        { key: 0, name: "Item 1", desc: "lorem ipsum ", checked: false },
        { key: 1, name: "Item 2", desc: "lorem ipsum ", checked: false },
    ];

    var [itens, setItens] = useState(item);

    function renderItem({ item }) {
        return (
            <View style={styles.item}>
                <View style={styles.itemDiv}>
                    <View>
                        <Text style={styles.itemName}>{item.name}</Text>
                    </View>
                    <View >
                        <Text style={styles.itemDesc}>{item.desc}</Text>
                    </View>
                </View>
                <View style={styles.edit}>
                    <Link href="/addTask" asChild>
                    <Pressable>
                        {({ pressed }) => (
                        <FontAwesome
                            name="edit"
                            size={25}
                            style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                        />
                        )}
                    </Pressable>
                    </Link>
                </View>
                <View >  
                    <Entypo name="trash" size={24} color="black" 
                    onPress={
                        () => {
                            var newItens = itens.filter((i) => i.key != item.key);
                            setItens(newItens);
                        }
                    }/>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList style={styles.list} data={itens} renderItem={renderItem} extraData={itens} />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#F5fcff",
    },
    list: {
        marginTop: 5
    },
    item: {
        padding: 20,
        backgroundColor: "#c5ffc4",
        marginBottom: 2,
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    itemDiv: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start"
        
    },
    itemName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    itemDesc: {
        fontSize: 12,
        color: "#808080"
    },
    edit: {
        marginRight: 10
    }
});