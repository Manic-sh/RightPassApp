import React from 'react';
import { View, Text } from "react-native";
import { Badge } from 'react-native-paper';

import CartContext from "../../../store/CartContext";

const Checkout = (props) => {
    
    return (
        <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
            <Text style={{ alignItems: "center" }}><Badge>Paid</Badge>  Payment using below</Text>
        </View>
    );
}

export default Checkout;