// Import React and Component
import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DeliveryTab from "./components/tabs/Delivery"
import PickUpTab from "./components/tabs/PickUp";
import DrawerNavigationRoutes from "../Navigation/DrawerNavigationRoutes";

const initialLayout = { width: Dimensions.get('window').width };
const Tab = createMaterialTopTabNavigator();


export default function WelcomeScreen() {

    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator>
                <Tab.Screen name="Delivery" component={DeliveryTab} />
                <Tab.Screen name="PickUp" component={PickUpTab} />
            </Tab.Navigator>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabContent: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        backgroundColor: "#39A6A3",
        borderColor: 'black',
    },
});

