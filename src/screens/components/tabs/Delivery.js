import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput, Button, Surface } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";

function DeliveryTab({ navigation }) {
  const [showCityDown, setShowCityDown] = useState(false);
  const [showBranchDown, setShowBranchDown] = useState(false);
  const [showLocationDown, setShowLocationDown] = useState(false);

  const [city, setCity] = useState("");
  const [branch, setBranch] = useState("");
  const [location, setLocation] = useState("");

  const cityList = [
    { label: "Ahemdabad", value: "amd" },

    { label: "Pune", value: "pune" },

    { label: "Surat", value: "surat" },
  ];
  const branchList = [
    { label: "Mangalas Kitchen", value: " mgkitchen" },
    { label: "Breaktime", value: "breaktime" },
  ];
  const locationList = [
    { label: "Your Address", value: "address" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Delivery</Text>
      <View style={styles.dropdown}>
        <DropDown
          label={"City"}
          mode={"outlined"}
          value={city}
          setValue={setCity}
          list={cityList}
          visible={showCityDown}
          showDropDown={() => setShowCityDown(true)}
          onDismiss={() => setShowCityDown(false)}
          inputProps={{
            right: <TextInput.Icon name={"menu-down"} />,
          }}
        />
      </View>
      <View style={styles.dropdown}>
        <DropDown
          dropDownItemStyle={styles.dropDownItemStyle}
          label={"Branch"}
          mode={"outlined"}
          value={branch}
          setValue={setBranch}
          list={branchList}
          visible={showBranchDown}
          showDropDown={() => setShowBranchDown(true)}
          onDismiss={() => setShowBranchDown(false)}
          inputProps={{
            right: <TextInput.Icon name={"menu-down"} />,
          }}
        />
      </View>
      <View style={styles.dropdown}>
        <DropDown
          label={"Location"}
          mode={"outlined"}
          value={location}
          setValue={setLocation}
          list={locationList}
          visible={showLocationDown}
          showDropDown={() => setShowLocationDown(true)}
          onDismiss={() => setShowLocationDown(false)}
          inputProps={{
            right: <TextInput.Icon name={"menu-down"} />,
          }}
        />
      </View>
      <Surface style={styles.surface}>
        <Button labelStyle={styles.buttonLabelStyle} contentStyle={styles.orderButtonContent} icon="food" onPress={() =>
          navigation.navigate('Home')}>
          Order Now
        </Button>
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 40,
    textAlign: "center",
  },
  dropdown: {
    marginBottom: 10,
  },
  buttonLabelStyle: {
    color: "#231E23",
  },
  orderButtonContent: {
    backgroundColor: "#FFC93C",
    height: 60,
  },
  surface: {
    height: 60,
    marginTop: 15,
    elevation: 5,
    borderRadius: 5,
  },
});
export default DeliveryTab;
