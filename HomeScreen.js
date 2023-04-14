import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-web";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>SwipeRight</Text>
      <View style={styles.buttons}>
        <Button color="red" title="Browse Categories" />
        <Button
          color="red"
          title="Search for Tutorial"
          onPress={() => navigation.navigate("Tutorial")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default HomeScreen;