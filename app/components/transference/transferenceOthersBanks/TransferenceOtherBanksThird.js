import React, { PureComponent } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';

import theme from '../../../theme/theme';

export default class TransferenceOtherBanksThird extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { startDate: 'Seleccionar Fecha' };
    this.goNext = this.goNext.bind(this);
    this.goBack = this.goBack.bind(this);
  }
  goNext() {
    this.props.navigation.navigate('TransferenciasOtrosBancos_Cuarta');
  }
  goBack() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ marginTop: 10, marginLeft: 1, marginRight: 1 }}>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                elevation: 2,
                padding: 10,
                paddingTop: 5,
                paddingBottom: 5,
                justifyContent: 'center',
                borderRadius: 4,
                marginBottom: 10
              }}
            >
              <View
                style={{
                  justifyContent: 'center',
                  marginTop: 10,
                  marginBottom: 15
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: 'black',
                    textAlign: 'center'
                  }}
                >
                  Confirmación
                </Text>

                <Text style={{ fontSize: 11, textAlign: 'center' }}>
                  Fecha 21/02/2018 Hora 02:17 PM
                </Text>
              </View>
              <View
                style={{
                  marginTop: 10,
                  paddingBottom: 10,
                  marginBottom: 5,
                  borderBottomColor: '#F7F7F7',
                  borderBottomWidth: 1,
                  marginLeft: 20,
                  marginRight: 20
                }}
              >
                <Text
                  style={{ fontSize: 14, fontWeight: '600', color: 'black' }}
                >
                  Cuenta Débito
                </Text>

                <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                  CC - 390006
                </Text>
                <Text
                  style={{ fontSize: 14, fontWeight: '600', color: 'black' }}
                >
                  Cuenta Crédito
                </Text>

                <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                  CC - 390008
                </Text>
                <Text
                  style={{ fontSize: 14, fontWeight: '600', color: 'black' }}
                >
                  Monto
                </Text>

                <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                  1.000,00 USD
                </Text>

                <Text
                  style={{ fontSize: 14, fontWeight: '600', color: 'black' }}
                >
                  Descripción
                </Text>

                <Text style={{ fontSize: 13, paddingLeft: 10 }}>Ropa</Text>

                <Text
                  style={{ fontSize: 14, fontWeight: '600', color: 'black' }}
                >
                  Boleta de Cambio
                </Text>

                <Text style={{ fontSize: 13, paddingLeft: 10 }}>Activa</Text>

                <Text
                  style={{ fontSize: 14, fontWeight: '600', color: 'black' }}
                >
                  Programado
                </Text>

                <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                  Lunes 21/02/2018
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginBottom: 5,
                    width: 90
                  }}
                />
              </View>
              <View style={{ justifyContent: 'center', marginTop: 10 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: 'black',
                    textAlign: 'center'
                  }}
                >
                  Autorización
                </Text>

                <Text
                  style={{
                    fontSize: 11,
                    paddingTop: 5,
                    paddingBottom: 5,
                    textAlign: 'center'
                  }}
                >
                  Ingrese su código de seguridad
                </Text>

                <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                  <View
                    style={[styles.viewInputText, { height: 28, width: 125 }]}
                  >
                    <TextInput
                      keyboardType={'numeric'}
                      underlineColorAndroid={'transparent'}
                      secureTextEntry={true}
                      style={[{ height: 28, paddingBottom: 4 }]}
                    >
                      {' '}
                    </TextInput>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 15
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
                              Cancelar
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
                            onPress={() => this.goNext()}
                          >
                            <Text style={[styles.textoBoton]}>Confirmar</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
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
    top: -1,
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
