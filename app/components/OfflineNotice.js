import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "./Text";
import colors from "../config/colors";
import Constants from 'expo-constants';
import { useNetInfo } from "@react-native-community/netinfo";

function OfflineNotice(props){
    const netInfo = useNetInfo();

    if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>No Internet Connection</Text>
        </View>
    )

    return null;
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.primary,
    width: "100%",
    position: "absolute",
    top: Constants.statusBarHeight,
    zIndex: 9
  },
  text: {
      color: colors.white
  }
});


export default OfflineNotice