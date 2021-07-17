import React, { useContext } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet } from "react-native";
import { Divider, Text, Surface, Button } from 'react-native-paper';

import CartContext from "../../../store/CartContext";

import Item from "../Product/Items";

const CartScreen = ({ navigation }) => {
    const { cart } = useContext(CartContext);
    const cartTotal = cart.reduce((total, curItem) => total + (curItem.quantity * curItem.price), 0);

    const itemQuantity = (id) => {
        const itemIndex = cart.findIndex(item => item.id === id);
        if (itemIndex < 0) {
            return 0;
        } else {
            return cart[itemIndex].quantity;
        }
    };

    const renderItem = ({ item }) => (
        <Item item={item} itemQuantity={itemQuantity} />
    );
    const renderItemSeparator = () => <Divider style={styles.divider} />

    return (
        <CartContext.Consumer>
            {context => (
                <SafeAreaView style={{ flex: 1, height: "100%" }}>
                    <View style={styles.container}>
                        <FlatList
                            data={cart}
                            renderItem={renderItem}
                            ItemSeparatorComponent={renderItemSeparator}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <View style={styles.bottomContent}>
                        <View style={{ flex: 2, color: "#DEEEEA", padding: 15 }}>
                            <Text style={{ fontSize: 12 }}>{cart.length} ITEM</Text>
                            <Text style={{ fontSize: 14, fontWeight: "bold" }}>{'\u20A8'} {cartTotal}</Text>
                        </View>
                        <View>
                            <Surface style={styles.buttonSurface}>
                                <Button labelStyle={styles.buttonLabelStyle}
                                    icon="arrow-right" onPress={() => navigation.navigate("Checkout")} >
                                    Place Order
                            </Button>
                            </Surface>
                        </View>
                    </View>
                </SafeAreaView>
            )}
        </CartContext.Consumer>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        backgroundColor: "#DEEEEA",
    },
    divider: {
        backgroundColor: "#231E23",
    },
    bottomContent: {
        flexDirection: "row",
        backgroundColor: "white",
    },
    buttonSurface: {
        height: 70,
        width: 160,
        backgroundColor: "#FFC93C",
        alignItems: "center",
        justifyContent: 'center',
    },
    buttonLabelStyle: {
        color: "#231E23",
        fontSize: 12,
    },
});
export default CartScreen;