import React, { PureComponent } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Picker,
  ScrollView
} from 'react-native';

import theme from '../../../theme/theme';

export default class MessageBank extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      startDate: 'Seleccionar Fecha',
      messaType: '',
      contact: '',
      contactType: ''
    };
    this.goNext = this.goNext.bind(this);
    this.goBack = this.goBack.bind(this);

    this.changeMessageType = this.changeMessageType.bind(this);
    this.changeContact = this.changeContact.bind(this);
  }
  goNext() {
    this.props.navigation.navigate('TransferenciasPropias_Quinta');
  }
  goBack() {
    this.props.navigation.goBack();
  }

  changeMessageType(messageType) {
    this.setState({ messageType });
  }

  changeContact(contact) {
    this.setState({ contact });
  }

  changeContactType(contactType) {
    this.setState({ contactType });
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <Text style={{ paddingTop: 10, paddingBottom: 10, color: 'black' }}>
              Escríbanos un mensaje
            </Text>
            <View style={{ marginLeft: 1, marginRight: 1 }}>
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  elevation: 2,
                  padding: 10,
                  paddingBottom: 5,
                  borderRadius: 4,
                  marginBottom: 10
                }}
              >
                <View
                  style={{
                    marginTop: 5
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'column',
                      alignSelf: 'stretch',
                      marginBottom: 5,
                      marginTop: 7
                    }}
                  >
                    <Text>Tipo de mensaje</Text>
                    <View >
                      <View style={styles.picker}>
                        <Picker
                          style={{ bottom: 10 }}
                          selectedValue={this.state.messaType}
                          onValueChange={text => this.changeMessageType(text)}
                        >
                          <Picker.Item label="Seleccionar" value="" />
                          <Picker.Item label="Mensaje 1" value="mensaje1" />
                          <Picker.Item label="Mensaje 2" value="mensaje2" />
                        </Picker>
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
                      <Text>E-Mail</Text>
                      <View style={[styles.viewInputText, { height: 28 }]}>
                        <TextInput
                          keyboardType={'numeric'}
                          underlineColorAndroid={'transparent'}
                          style={[
                            styles.picker,
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
                      alignSelf: 'stretch',
                      marginBottom: 5
                    }}
                  >
                    <Text>Contacto</Text>
                    <View >
                      <View style={styles.picker}>
                        <Picker
                          style={{ bottom: 10 }}
                          selectedValue={this.state.contact}
                          onValueChange={text => this.changeContact(text)}
                        >
                          <Picker.Item label="Seleccionar" value="" />
                          <Picker.Item label="Contacto 1" value="contacto1" />
                          <Picker.Item label="Contacto 2" value="contacto2" />
                        </Picker>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignSelf: 'stretch',
                      marginBottom: 5,
                      marginTop: 7
                    }}
                  >
                    <Text>Tipo de Contacto</Text>
                    <View >
                      <View style={styles.picker}>
                        <Picker
                          style={{ bottom: 10 }}
                          selectedValue={this.state.contactType}
                          onValueChange={text => this.changeContactType(text)}
                        >
                          <Picker.Item label="Seleccionar" value="" />
                          <Picker.Item label="Tipo 1" value="tipo1" />
                          <Picker.Item label="Tipo 2" value="tipo2" />
                        </Picker>
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
                      <Text>Teléfono</Text>
                      <View style={[styles.viewInputText, { height: 28 }]}>
                        <TextInput
                          keyboardType={'numeric'}
                          underlineColorAndroid={'transparent'}
                          style={[
                            styles.picker,
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
                      <Text>Detalle</Text>
                      <View style={[styles.viewInputText, { height: 120 }]}>
                        <TextInput
                          keyboardType={'numeric'}
                          underlineColorAndroid={'transparent'}
                          multiline={true}
                          numberOfLines={5}
                          blurOnSubmit={false} //maxLength={40}
                          style={[
                            styles.picker,
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

  imgUser: {
    height: theme.smallDevice ? 100 : 120,
    width: theme.smallDevice ? 100 : 120,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#54CF74'
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
  },

  picker: {
    width: theme.widthInput,
    backgroundColor: theme.colorInputBackground,
    borderRadius: 2,
    height: 28
  }
});
