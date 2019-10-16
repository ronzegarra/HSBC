import React, { PureComponent } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  DatePickerAndroid,
  ScrollView,
  Picker
} from 'react-native';

import theme from '../../../theme/theme';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoginMethod extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loginMethod: '',
      dactilar: true,
      facial: false
    };

    this.goNext = this.goNext.bind(this);
    this.changeLoginMethod = this.changeLoginMethod.bind(this);
  }

  changeLoginMethod(loginMethod) {
    console.warn(loginMethod);
    if (loginMethod === 'facial') {
      this.setState({ facial: true });
      this.setState({ dactilar: false });
    } else {
      this.setState({ facial: false });
      this.setState({ dactilar: true });
    }
    this.setState({ loginMethod });
  }

  goNext() {
    this.props.navigation.navigate('Mas');
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <View style={{ marginTop: 20, marginLeft: 1, marginRight: 1 }}>
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  elevation: 2,
                  padding: 10,
                  paddingTop: 5,
                  paddingBottom: 5,
                  borderRadius: 4,
                  marginBottom: 10
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginBottom: 5
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      marginBottom: 5
                    }}
                  />
                </View>

                <View
                  style={{
                    alignItems: 'center',
                    marginTop: 35,
                    marginBottom: 35
                  }}
                >
                  {this.state.dactilar === true ? (
                    <Image
                      source={require('../../../img/RecursosHSBC/More/LoginMethods/fingerprint.png')}
                      resizeMode={'stretch'}
                      style={{ height: 100, width: 100 }}
                    />
                  ) : (
                    <Image
                      source={require('../../../img/RecursosHSBC/More/LoginMethods/facialrecog.png')}
                      resizeMode={'stretch'}
                      style={{ height: 100, width: 100 }}
                    />
                  )}
                </View>

                <View
                  style={{
                    flexDirection: 'column',
                    alignSelf: 'stretch',
                    marginBottom: 5
                  }}
                >
                  <Text>Método de Login</Text>
                  <View >
                    <View style={styles.picker}>
                      <Picker
                        style={{ bottom: 10 }}
                        selectedValue={this.state.loginMethod}
                        onValueChange={text => this.changeLoginMethod(text)}
                      >
                        <Picker.Item label="Seleccionar" value="" />
                        <Picker.Item label="Pictograma" value="pict1" />
                        <Picker.Item label="Huella Dactilar" value="dactilar" />
                        <Picker.Item
                          label="Reconocimiento Facial"
                          value="facial"
                        />
                      </Picker>
                    </View>
                  </View>
                </View>

                {this.state.dactilar === true ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 5,
                      marginBottom: 20
                    }}
                  >
                    <Image
                      source={require('../../../img/RecursosHSBC/More/LoginMethods/circle-check.png')}
                      resizeMode={'stretch'}
                      style={{ height: 15, width: 15, top: 2, marginRight: 5 }}
                    />

                    <Text>Análisis guardado correctamente</Text>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                      }}
                    >
                      <Text>
                        <Icon name="times" size={15} color="#DEDEDE" />
                      </Text>
                    </View>
                  </View>
                ) : (
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 5,
                      marginBottom: 20,
                      justifyContent: 'center'
                    }}
                  >
                    <Text style={{color: theme.colorPrincipal}}>Comenzar análisis</Text>
                  </View>
                )}

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    //marginRight: 55,
                    marginTop: 5,
                    marginBottom: 25
                  }}
                >
                  <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                      <TouchableOpacity
                        style={[styles.cancelBoton, { borderRadius: 4 }]}
                        onPress={() => this.goNext()}
                      >
                        <Text style={[styles.textoBoton]}>Continuar</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
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

  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },

  imageItem: {
    height: 24,
    width: 30
  },

  viewMenu: {
    flex: 1,
    padding: theme.paddingList
  },

  viewInputText: {
    width: theme.widthInput,
    backgroundColor: theme.colorInputBackground,
    borderRadius: 2,
    height: 28
  },

  cancelBoton: {
    backgroundColor: theme.colorPrincipal,
    alignSelf: 'center',
    alignItems: 'center',
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

  picker: {
    width: theme.widthInput,
    backgroundColor: theme.colorInputBackground,
    borderRadius: 2,
    height: 28
  }
});
