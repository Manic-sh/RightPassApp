// Import React and Component
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';

const NavigationDrawerHeader = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Feather style={{padding:5}} name="menu" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;
