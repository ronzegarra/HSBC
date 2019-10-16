import React, { Component, PureComponent } from 'react';

import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Switch
} from 'react-native';

//import { onSignIn } from "../../redux/auth";
import { NavigationActions } from 'react-navigation';
import theme from '../../theme/theme';

/*
const action = NavigationActions.reset({
  index: 0,
  key: null,
  actions: [NavigationActions.navigate({ routeName: 'Tabs' })]
});
*/
const action = NavigationActions.reset({
  index: 0,
  key: null,
  actions: [NavigationActions.navigate({ routeName: 'Question' })]
});

export default class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      notifyUser: false
    };

    this.login = this.login.bind(this);
  }

  login() {
    //onSignIn()

    this.props.navigation.dispatch(action);

    /*NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ 'Tabs'})
      ]
    })*/
    /*
    onSignIn().then(() => this.props.navigation.navigate("Tabs"));*/

    //this.props.navigation.navigate('Welcome');
    
  }

  render() {
    return (
      <View
        style={{ flex: 2, alignItems: 'center', justifyContent: 'flex-end' }}
      >
        <View style={{ flexDirection: 'row', width: '100%', marginBottom: 7 }}>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: '100%',
                paddingTop: 2,
                flexDirection: 'row',
                height: 35
              }}
            >
              <View
                style={{
                  width: '10%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomLeftRadius: 4,
                  borderTopLeftRadius: 4,
                  borderColor: '#C1C1C1',
                  borderWidth: 1,
                  borderRightWidth: 0
                }}
              >
                <Image
                  source={require('../../img/RecursosHSBC/Login/user.png')}
                  style={{ height: 20, width: 20 }}
                />
              </View>

              <View
                style={{
                  width: '90%',
                  borderBottomRightRadius: 4,
                  borderTopRightRadius: 4,
                  borderColor: '#C1C1C1',
                  borderWidth: 1,
                  borderLeftWidth: 0
                }}
              >
                <TextInput
                  placeholder={'Usuario'}
                  placeholderTextColor={'#8E8E8E'}
                  underlineColorAndroid={'transparent'}
                  style={{
                    color: '#8E8E8E',
                    width: '80%',
                    height: 35,
                    paddingLeft: 2
                  }}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', width: '100%', marginBottom: 7 }}>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: '100%',
                paddingTop: 2,
                flexDirection: 'row',
                height: 35
              }}
            >
              <View
                style={{
                  width: '10%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomLeftRadius: 4,
                  borderTopLeftRadius: 4,
                  borderColor: '#C1C1C1',
                  borderWidth: 1,
                  borderRightWidth: 0
                }}
              >
                <Image
                  source={require('../../img/RecursosHSBC/Login/password.png')}
                  style={{ height: 20, width: 20 }}
                />
              </View>

              <View
                style={{
                  width: '90%',
                  borderBottomRightRadius: 4,
                  borderTopRightRadius: 4,
                  borderColor: '#C1C1C1',
                  borderWidth: 1,
                  borderLeftWidth: 0
                }}
              >
                <TextInput
                  placeholder={'Contraseña'}
                  placeholderTextColor={'#8E8E8E'}
                  underlineColorAndroid={'transparent'}
                  style={{
                    color: '#8E8E8E',
                    width: '80%',
                    height: 35,
                    paddingLeft: 2
                  }}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 5, marginTop: 5 }} />
        
        <TouchableOpacity style={styles.button} onPress={this.login}>
          <Text style={[styles.textSmall, { color: 'white' }]}>CONTINUAR</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },

  line: {
    top: 5,
    flex: 1,
    borderWidth: 1,
    borderColor: 'transparent',
    borderTopColor: '#FFFFFF',
    marginLeft: 10,
    marginRight: 10
  },

  textVerySmall: {
    color: '#FFFFFF',
    fontSize: theme.txtVerySmall
  },

  textInput: {
    height: theme.inputHeight,
    color: '#FFFFFF',
    fontSize: theme.txtNormal,
    marginLeft: 5,
    marginBottom: 0,
    top: 2,
    width: 50
  },

  textSmall: {
    color: '#FFFFFF',
    fontSize: theme.txtSmall
  },

  textNormal: {
    color: '#FFFFFF',
    fontSize: theme.txtNormal
  },

  icon: {
    width: 20,
    height: 20
  },

  button: {
    justifyContent: 'center',
    height: 33,
    backgroundColor: '#DB0011',
    borderRadius: 2,
    alignSelf: 'stretch',
    alignItems: 'center'
  }
});
