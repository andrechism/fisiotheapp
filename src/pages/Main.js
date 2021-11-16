import React from 'react';
import {Text, StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import PersonImage from '../assets/person.png';
import {RectButton as Button} from 'react-native-gesture-handler';

function Main({navigation}) {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={PersonImage} />
      <Text style={styles.text_1}>Hey, André!</Text>

      <Text style={styles.text_2}>Let's start your treatment? :)</Text>

      <Button
        onPress={() => {
          navigation.navigate('Exercise');
        }}
        style={styles.button}>
        <Text style={styles.button_text}>Start</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    flex: 1,
  },

  wrapper: {
    color: 'blue',
    padding: 10,
    textAlign: 'center',
    lineHeight: 20,
  },

  image: {
    alignSelf: 'center',
  },

  text_1: {
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Actor-Regular',
    fontWeight: '400',
    fontSize: 30,
    // lineHeight: 28,
    letterSpacing: -0.1,
  },

  text_2: {
    fontFamily: 'ABeeZee-Regular',
    fontWeight: '400',
    fontSize: 25,
    // lineHeight: 24,
    textAlign: 'center',
    color: '#4f4f4f',
    padding: 49,
  },

  button: {
    backgroundColor: '#5b3fff',
    height: 48,
    maxWidth: 248,
    width: '100%',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  button_text: {
    fontFamily: 'Actor-Regular',
    fontWeight: '400',
    fontSize: 25,
    // lineHeight: 30.08,
    color: '#fff',
  },
});

export default Main;
