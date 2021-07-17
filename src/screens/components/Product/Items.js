import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Card, Surface, IconButton, Text } from 'react-native-paper';
import CartContext from "../../../store/CartContext";

const Item = (product) => {
    const context = useContext(CartContext);
    const handleAddPressed = () => {
        context.addToCart(product.item);
    }
    const handleRemovePressed = () => {
        context.removeFromCart(product.item.id)
    }
    const price = "\u20A8" + " " + product.item.price + "/-";
    return (
        <Surface style={styles.item}>
            <Card.Title
                title={product.item.title}
                subtitle={price}
                left={(props) => <Avatar.Icon {...props} color="#231E23" size={48} style={styles.avatar} icon="food" />}
                right={(props) =>
                    <View style={{ flexDirection: "row" }}>
                        <Surface style={styles.styleSurface}>
                            <IconButton icon="plus" onPress={handleAddPressed} />
                        </Surface>
                        <Surface style={styles.styleSurface}>
                            <Text> {product.itemQuantity(product.item.id)} </Text>
                        </Surface>
                        <Surface style={styles.styleSurface}>
                            <IconButton icon="minus" onPress={handleRemovePressed} />
                        </Surface>
                    </View>}
            />
        </Surface>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#EFEFEF',
        padding: 10,
        marginVertical: 0.5,
        marginHorizontal: 0,
    },
    title: {
        fontSize: 18,
    },
    avatar: {
        backgroundColor: "#FFC93C",
    },
    styleSurface: {
        width: 35,
        height: 35,
        backgroundColor: "#EFEFEF",
        alignItems: "center",
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: "#FFC93C",
        elevation: 5,
    },
});

export default Item;