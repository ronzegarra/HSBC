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
const action = NavigationActions.reset({
  index: 0,
  key: null,
  actions: [NavigationActions.navigate({ routeName: 'Tabs' })]
});
export default class Question extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    this.login = this.login.bind(this);
  }

  login() {
    this.props.navigation.dispatch(action);
  }

  render() {
    return (
      <View style={styles.containerImage}>
        <View style={styles.container}>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
           
            <Image
              source={require('../../img/RecursosHSBC/Login/logohsbc.png')}
              resizeMode={'stretch'}
              style={styles.logo}
            />
          </View>

          <View
            style={
              { flex: 2, alignItems: 'center', justifyContent: 'flex-end' }
              //backgroundColor: 'red'
            }
          >
            <View
              style={{ flexDirection: 'row', marginBottom: 0, marginTop: 10 }}
            >
              <Text style={{ color: '#8D8D8D' }}>Bienvenido, Alfredo</Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginBottom: 10, marginTop: 10 }}
            >
              <Text style={{ textAlign: 'center', color: '#8D8D8D' }}>
                Para continuar, responde la siguiente pregunta:
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginBottom: 10, marginTop: 10 }}
            >
              <Text style={{ textAlign: 'center', color: '#7F7F7F', fontWeight: 'bold' }}>
                ¿Nombre de tu primer mascota?
              </Text>
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
                      source={require('../../img/RecursosHSBC/Login/question.png')}
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
                      placeholder={'Respuesta'}
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

            
            {/*<View
              style={{ flexDirection: 'row', marginBottom: 5, marginTop: 5 }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 10,
                  marginTop: 10
                }}
              >
                <View
                  style={{
                    width: '101%',
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                  }}
                >
                 <Text style={{ color: '#FFFFFF' }}>Recordar usuario</Text>

                <Switch
                    onValueChange={value =>
                      this.setState({
                        notifyUser: value
                      })
                    }
                    onTintColor="#F1F1F1"
                    thumbTintColor="#FFFFFF"
                    tintColor="#B2B2B2"
                    value={this.state.notifyUser}
                    style={{ marginBottom: 0 }}
                  />
                  

                </View>
              </View>
                  </View>*/}



            <TouchableOpacity style={styles.button} onPress={this.login}>
              <Text style={styles.textSmall}>CONTINUAR</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1.2,
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingTop: 15
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                marginBottom: 5,
                justifyContent: 'center',
                marginTop: 47
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
      </View>
    );
    /*</ImageBackground>*/
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

  logo: {
    height: theme.heightLogo,
    width: theme.widthLogo
  },

  iconItem: {
    width: 40,
    height: 40
  },

  iconSmall: {
    width: 25,
    height: 25
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
    color: '#A3A3A3',
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
