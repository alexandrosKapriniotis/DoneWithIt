import React, { useState} from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";
import NetInfo from '@react-native-community/netinfo';
import OfflineNotice from "./OfflineNotice";

function Screen({ children, style }) {
  const [isConnected,setIsConnected] = useState(true)

  NetInfo.fetch().then(state => {
    setIsConnected(state.isConnected)
  });
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
