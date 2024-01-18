import React from "react";
import {SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import FeedBack from "./src/components/FeedBack";


const App = () =>{
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FeedBack />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})