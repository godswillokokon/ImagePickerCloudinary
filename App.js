import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


const App = () => {
  return (
    <View>
      <Text style={styles.appText}>ImagePicker App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appText: {
    alignSelf: 'center',
  }
});

export default App;
