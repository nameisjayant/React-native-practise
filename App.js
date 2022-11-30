/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from 'react';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App: () => Node = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      {text30_500("Login")}
      <View style={styles.input_view}>
        <TextInput style={styles.text_input}
          placeholder="Enter Username"
          onChangeText={(username) => setUsername(username)} />

        <TextInput style={styles.text_input}
          placeholder="Enter Password"
          onChangeText={(password) => setPassword(password)} secureTextEntry={true} />
      </View>

      <TouchableOpacity style={styles.forget_password}>
        <Text>
          Forget Password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.login_btn}>
      <Text style = {{color : "black"}}>
          Login
        </Text>
      </TouchableOpacity>

    </View>
  )

};


const text30_500 = (text) => {
  return (
    <Text style={styles.text30_500}>
      {text}
    </Text>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text30_500: {
    color: "black",
    fontSize: 30,
    fontWeight: "500"
  },
  text_input: {
    borderColor: "red",
    marginStart: 10
  },
  input_view: {
    height: 100,
    width: "70%",
    borderRadius: 8,
    backgroundColor: "#FFC0CB",
    marginTop: 20

  },
  forget_password: {
    alignItems: 'center',
    display: 'flex',
    marginTop: 10
  },
  login_btn : {
    marginTop : 30,
    backgroundColor : "#FFC0CB",
    width : 200,
    height : 50,
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 8

  }

});

export default App;
