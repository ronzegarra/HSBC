import React, { PureComponent } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView
} from 'react-native';

import theme from '../../../theme/theme';

export default class ChangeProfile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { startDate: 'Seleccionar Fecha' };
    this.goBack = this.goBack.bind(this);
  }
 
  goBack() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <View style={{ marginTop: 35, marginLeft: 1, marginRight: 1 }}>

              <View
                style={{
                  top: theme.smallDevice ? 10 : 20,
                  alignSelf: 'center',
                  alignItems: 'center'
                }}
              >
                <View
                  style={{
                    borderRadius: 100,
                    borderWidth: 5,
                    borderColor: '#D5D5D5'
                  }}
                >
                  <Image
                    source={require('../../../img/RecursosHSBC/More/FotoUsuario.png')}
                    style={styles.imgUser}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 7,
                    paddingBottom: 7
                  }}
                >
                  <View
                    style={{
                      position: 'absolute',
                      zIndex: 99,
                      top: -45
                    }}
                  >
                    <Image
                      source={require('../../../img/RecursosHSBC/More/photoCamera.png')}
                      style={{ height: 35, width: 35, marginLeft: 85 }}
                    />
                  </View>

                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: 'black'
                    }}
                  >
                    Alfredo Batista
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '25%' }} />
                    <View style={{ width: '50%' }}>
                      <Text
                        style={{
                          fontSize: theme.txtVerySmall,
                          color: 'black',
                          textAlign: 'center'
                        }}
                      >
                        Ingresa tu alias y agrega una foto de perfil (opcional)
                      </Text>
                    </View>
                    <View style={{ width: '25%' }} />
                  </View>
                </View>
              </View>
              <View
                style={{
                  marginTop: 30
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    //justifyContent: 'flex-start',
                    marginBottom: 5
                    //backgroundColor: 'blue'
                  }}
                >
                  <View style={{ flexDirection: 'column' }}>
                    <Text>Alias</Text>
                    <View style={[styles.viewInputText, { height: 28 }]}>
                      <TextInput
                        keyboardType={'numeric'}
                        underlineColorAndroid={'transparent'}
                        style={[
                          { height: 28, paddingBottom: 4 }
                        ]}
                      >
                        {' '}
                      </TextInput>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 30
                  }}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 5,
                        marginRight: 10
                      }}
                    >
                      <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                        <View>
                          <TouchableOpacity
                            style={[styles.cancelBoton, { borderRadius: 4 }]}
                            onPress={() => this.goBack()}
                          >
                            <Text style={[styles.textoCancelBoton]}>
                              Volver
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        marginTop: 5,
                        marginRight: 10
                      }}
                    >
                      <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                        <View>
                          <TouchableOpacity
                            style={[styles.continueBoton, { borderRadius: 4 }]}
                            onPress={() => this.goBack()}
                          >
                            <Text style={[styles.textoBoton]}>Confirmar</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              {/*</View>*/}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: theme.margin,
    paddingRight: theme.margin
  },

  sectionHeader: {
    fontSize: theme.txtNormal,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5
  },

  imgUser: {
    height: theme.smallDevice ? 100 : 120,
    width: theme.smallDevice ? 100 : 120,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#FF1022'
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },

  viewMenu: {
    flex: 1,
    padding: theme.paddingList
  },

  viewInputText: {
    width: theme.widthInput + 20,
    //width: '100%',
    backgroundColor: theme.colorInputBackground,
    borderRadius: 2,
    height: 28
  },

  cancelBoton: {
    backgroundColor: theme.colorInputBackground,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colorInputBackground,
    borderRadius: 4,
    height: 28,
    width: 115
  },

  continueBoton: {
    backgroundColor: theme.colorPrincipal,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colorPrincipal,
    borderRadius: 4,
    height: 28,
    width: 115
  },

  textoBoton: {
    top:-1,
    textAlign: 'center',
    fontSize: 14,
    color: '#FFFFFF'
  },

  textoCancelBoton: {
    top: -1,
    textAlign: 'center',
    fontSize: 14,
    color: '#9C9C9B'
  }
});
