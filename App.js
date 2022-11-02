import React, {Component} from 'react'; // to call in classes
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';


class App extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>Hello, World!</Text>
        <Text>My first App</Text>
        <StatusBar />  
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
