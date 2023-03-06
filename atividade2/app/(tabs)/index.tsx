import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, TextInput, Button } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import itemService from "../../services/item.service";

export default function () {

    var [itens, setItens] = useState<Item[]>([]);
    var [editingItem, setEditingItem] = useState<Item | null>(null);
    var [newItem, setNewItem] = useState('');

    useEffect(() => {
        async function getItens() {
            var lista = await itemService.getItens();
            setItens(lista);
        }
        getItens();
    }, [editingItem, newItem]);

    function renderItem({ item }: { item: Item }) {
        const isEditing = item.key === editingItem?.key;

        return (
            <View style={styles.item}>
                <View style={styles.itemDiv}>
                    {isEditing ? (
                        <View>
                            <TextInput
                                style={styles.itemNameInput}
                                onChangeText={(text) => {
                                    setEditingItem({
                                        ...editingItem!,
                                        name: text
                                    });
                                }}
                                value={editingItem?.name}
                            />
                        </View>
                    ) : (
                        <View>
                            <Text style={styles.itemName}>{item.name}</Text>
                        </View>
                    )}
                    {isEditing ? (
                        <View>
                            <TextInput
                                style={styles.itemDescInput}
                                onChangeText={(text) => {
                                    setEditingItem({
                                        ...editingItem!,
                                        desc: text
                                    });
                                }}
                                value={editingItem?.desc}
                            />
                        </View>
                    ) : (
                        <View>
                            <Text style={styles.itemDesc}>{item.desc}</Text>
                        </View>
                    )}
                </View>
                <View style={styles.edit}>
                    {isEditing ? (
                        <FontAwesome
                            name="save"
                            size={24}
                            color="black"
                            onPress={() => {
                                if (editingItem?.name != null) {
                                    itemService.updateItem(editingItem);
                                    setEditingItem(null);
                                }
                                setNewItem(newItem + 'a');
                            }}
                        />
                    ) : (
                        <FontAwesome
                            name="pencil"
                            size={24}
                            color="black"
                            onPress={() => {
                                setEditingItem(item);
                            }}
                        />
                    )}
                </View>
                <View >
                    <Entypo
                        name="trash"
                        size={24}
                        color="black"
                        onPress={() => {
                            itemService.deleteItem(item.key);
                            setItens((prevItems) =>
                                prevItems.filter((prevItem) => prevItem.key !== item.key)
                            );
                        }}
                    />
                </View>
            </View>
        );
    }

return (
    <View style={styles.container}>
        <Button
            title="Atualizar"
            onPress={() => {
                setNewItem(newItem + 'a');
            }}
        />
        {itens.length > 0 ? (
            <FlatList 
                style={styles.list}
                data={itens}
                renderItem={renderItem}
                extraData={[ itens, editingItem ]} />
        ) : (
            <Text style={{ alignItems: "center" }}>Nenhum item encontrado</Text>
        )}
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
        backgroundColor: "#94ff91",
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
    },
    itemNameInput: {
        backgroundColor: "#c5ffc4",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#C4C4C4",
        padding: 8,
        marginBottom: 16,
        fontSize: 16,
      },
    
      itemDescInput: {
        backgroundColor: "#c5ffc4",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#C4C4C4",
        padding: 8,
        height: 80,
        textAlignVertical: "top",
        fontSize: 16,
      },
});