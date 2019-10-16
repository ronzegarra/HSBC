/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Navigator from './app/components/common/Navigator'
import { Provider } from 'react-redux';
import createStore from './app/redux/store';

import {isSignedIn, onSignOut} from './app/redux/auth';
const store = createStore();

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    }

    
  }

  /*componentWillMount() {
    this.setState({ signedIn: isSignedIn(), checkedSignIn: true })

    /*isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));*/
 /* }

  componentWillUnmount(){
    onSignOut()
  }*/


  render() {

    //const { checkedSignIn, signedIn } = this.state;
    //var Navigator = createRootNavigator()
    return <Navigator/>
    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    /*if (!checkedSignIn) {
      return null;
    }

    const Navigator = createRootNavigator(signedIn);
    return <Navigator />;*/
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

