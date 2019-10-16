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

export default class PersonalData extends PureComponent {
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
            <View style={{ marginTop: 10, marginLeft: 1, marginRight: 1 }}>
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
                    marginTop: 10
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingBottom: 10,
                      borderBottomColor: '#EFEFEE',
                      borderBottomWidth: 1,
                      marginBottom: 10
                    }}
                  >
                    <View
                      style={{
                        width: '20%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center'
                      }}
                    >
                      <Image
                        source={require('../../../img/RecursosHSBC/More/DatosPersonales.png')}
                        resizeMode={'contain'}
                        style={{ flex: 1, width: 35, height: 35 }}
                      />
                    </View>
                    <View style={{ width: '80%' }}>
                      <Text style={{ fontSize: 12 }}>
                        De acuerdo a disposiciones de nuestro Ente Regulador
                        (Acuerdo 10-2015, modificado por el Acuerdo 1-2017), es
                        requerido mantener actualizada la información de
                        nuestros clientes. Es por lo anterior que solicitamos
                        completar el siguiente cuestionario
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      marginBottom: 5
                    }}
                  >
                    <View
                      style={{ flexDirection: 'column', alignSelf: 'stretch' }}
                    >
                      <Text>País de Residencia</Text>
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
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      marginBottom: 5
                    }}
                  >
                    <View
                      style={{ flexDirection: 'column', alignSelf: 'stretch' }}
                    >
                      <Text>Ciudad/Corregimiento</Text>
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
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      marginBottom: 5
                    }}
                  >
                    <View
                      style={{ flexDirection: 'column', alignSelf: 'stretch' }}
                    >
                      <Text>Provincia/Estado</Text>
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
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      marginBottom: 5
                    }}
                  >
                    <View
                      style={{ flexDirection: 'column', alignSelf: 'stretch' }}
                    >
                      <Text>Barrio/Colonia</Text>
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
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      marginBottom: 5
                    }}
                  >
                    <View
                      style={{ flexDirection: 'column', alignSelf: 'stretch' }}
                    >
                      <Text>Teléfono Residencial</Text>
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
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      marginBottom: 5
                    }}
                  >
                    <View
                      style={{ flexDirection: 'column', alignSelf: 'stretch' }}
                    >
                      <Text>Celular</Text>
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
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      marginBottom: 5
                    }}
                  >
                    <View
                      style={{ flexDirection: 'column', alignSelf: 'stretch' }}
                    >
                      <Text>Teléfono Trabajo</Text>
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
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      marginBottom: 5
                    }}
                  >
                    <View
                      style={{ flexDirection: 'column', alignSelf: 'stretch' }}
                    >
                      <Text>Lugar de Trabajo</Text>
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
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      marginBottom: 5
                    }}
                  >
                    <View
                      style={{ flexDirection: 'column', alignSelf: 'stretch' }}
                    >
                      <Text>Correo electrónico</Text>
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
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      marginTop: 5,
                      //marginRight: 10
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
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colorInputBackground,
    borderRadius: 4,
    height: 24,
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
    fontSize: 14,
    color: '#9C9C9B'
  }
});
