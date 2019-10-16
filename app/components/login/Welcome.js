import React, { Component, PureComponent } from 'react';

import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';

//import { onSignIn } from "../../redux/auth";
import { NavigationActions } from 'react-navigation';
import theme from '../../theme/theme';
const action = NavigationActions.reset({
  index: 0,
  key: null,
  actions: [NavigationActions.navigate({ routeName: 'Tabs' })]
});

export default class Welcome extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.login = this.login.bind(this);
  }

  login() {
    this.props.navigation.navigate('Question');
  }

  render() {
    return (
      <View style={styles.containerImage}>
        {this.state.step == 'Loading' ? (
          <View />
        ) : (
          <View style={styles.container}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Image
                source={require('../../img/RecursosHSBC/Login/logohsbc.png')}
                resizeMode={'stretch'}
                style={styles.logo}
              />
            </View>

            <View
              style={{
                flex: 1.2,
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingTop: 15,
                paddingBottom: 50
              }}
            >

              <Text style={[styles.textVerySmall, {marginTop: 10, marginBottom: 10}]}>
                ¡Hola de nuevo, Alfredo!
              </Text>

              <TouchableOpacity
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: 2
                }}
              >
                <View style={styles.line} />
                <View style={{top: -2}}>
                  <Text style={styles.textVerySmall}>
                    INGRESAR CON OTRO USUARIO
                  </Text>
                </View>
                <View style={styles.line} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  marginBottom: 5,
                  marginTop: 5,
                  justifyContent: 'center'
                }}
              >
                <View style={styles.iconSmall}>
                  <Image
                    source={require('../../img/RecursosHSBC/Login/fingerprint.png')}
                    resizeMode={'contain'}
                    style={{ flex: 1, width: undefined }}
                  />
                </View>
                <Text
                  style={[styles.textVerySmall, { marginLeft: 5, paddingTop: 2 }]}
                >
                  Acceder con la huella
                </Text>
              </TouchableOpacity>

              <Text style={styles.textVerySmall}>
                O TAMBIÉN PUEDES
              </Text>

              <TouchableOpacity style={styles.button} onPress={this.login}>
                <Text style={[styles.textSmall, { color: 'white' }]}>INGRESAR CON CONTRASEÑA</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginBottom: 30,
                  marginTop: 10
                }}
              >
                <View style={styles.line} />
                <View style={{top: -2}}>
                  <Text style={styles.textVerySmall}>
                    ¿OLVIDASTE TU CONTRASEÑA?
                  </Text>
                </View>
                <View style={styles.line} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  marginBottom: 5,
                  justifyContent: 'center'
                }}
              >
                <View style={styles.iconSmall}>
                  <Image
                    source={require('../../img/RecursosHSBC/Login/pin.png')}
                    resizeMode={'contain'}
                    style={{ flex: 1, width: undefined }}
                  />
                </View>
                <Text
                  style={[styles.textNormal, { marginLeft: 5, paddingTop: 2 }]}
                >
                  Encontrar una sucursal cerca
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerImage: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#FFFFFF'
  },

  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 50
  },

  logo: {
    height: theme.heightLogo,
    width: theme.widthLogo
  },
  buttonImage: {
    width: 25,
    height: 25,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignSelf: 'center'
  },

  line: {
    top: 5,
    flex: 1,
    borderWidth: 1,
    borderColor: 'transparent',
    borderTopColor: '#A3A3A3',
    marginLeft: 10,
    marginRight: 10
  },

  textNormal: {
    color: '#A3A3A3',
    fontSize: theme.txtNormal
  },
  icon: {
    width: 40,
    height: 40
  },
  iconSmall: {
    width: 25,
    height: 25
  },
  textVerySmall: {
    color: '#A3A3A3',
    fontSize: theme.txtVerySmall
  },
  textSmall: {
    color: '#FFFFFF',
    fontSize: theme.txtSmall
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
