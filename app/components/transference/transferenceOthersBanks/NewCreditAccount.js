/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { PureComponent } from 'react';

import {
  Text,
  View,
  StyleSheet,
  SectionList,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  Switch,
  TouchableWithoutFeedback,
  DatePickerAndroid,
  ScrollView,
  Picker
} from 'react-native';

import theme from '../../../theme/theme';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class NewCreditAccount extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      startDate: 'Seleccionar Fecha',
      transferenceType: '',
      ticket: '',

      sucursal: '',
      accountType: '',
      coin: '',
      documentType: '',
      gastosCuenta: ''
    };
    this.goNext = this.goNext.bind(this);
    this.changeTransferenceType = this.changeTransferenceType.bind(this);
    this.changeTicket = this.changeTicket.bind(this);

    this.changeSucursal = this.changeSucursal.bind(this);
    this.changeAccountType = this.changeAccountType.bind(this);
    this.changeCoin = this.changeCoin.bind(this);
    this.changeDocumentType = this.changeDocumentType.bind(this);

    this.changeGastosCuenta = this.changeGastosCuenta.bind(this);
  }

  showPicker = async (stateKey, options) => {
    try {
      let { action, year, month, day } = await DatePickerAndroid.open(
        options
      );
      if (action === DatePickerAndroid.dismissedAction) {
      } else {
        if (year && month && day) {
          var date = new Date(year, month, day);
          month = month + 1;
          let monthString, dayString;
          if (month < 10) {
            monthString = '0' + month.toString();
          } else {
            monthString = month.toString();
          }
          if (day < 10) {
            dayString = '0' + day.toString();
          } else {
            dayString = day.toString();
          }

          this.setState({
            startDate: day.toString() + '/' + month + '/' + year.toString()
          });
        }
        //this.state.formItems['dateDeposit'] = this.state.fecha;

        //this.setState({ fechaFormat: year.toString().substring(2, 4) + '/' + month + '/' + day });
      }
    } catch ({ code, message }) {}
  };

  changeTransferenceType(transferenceType) {
    this.setState({ transferenceType });
  }

  changeTicket(ticket) {
    this.setState({ ticket });
  }

  changeSucursal(sucursal) {
    this.setState({ sucursal });
  }

  changeAccountType(accountType) {
    this.setState({ accountType });
  }

  changeCoin(coin) {
    this.setState({ coin });
  }

  changeDocumentType(documentType) {
    this.setState({ documentType });
  }

  changeGastosCuenta(gastosCuenta) {
    this.setState({ gastosCuenta });
  }

  goNext() {
    this.props.navigation.navigate('TransferenciasOtrosBancos_Tercera');
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <View style={{ marginTop: 10, marginLeft: 1, marginRight: 1 }}>
              <Text
                style={styles.titleCard}
              >
                Cuenta Débito
              </Text>
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  flexDirection: 'row',
                  elevation: 2,
                  padding: 10,
                  paddingTop: 5,
                  paddingBottom: 5,
                  alignItems: 'center',
                  borderRadius: 4,
                  marginBottom: 10
                }}
              >
                <View style={{ width: 30, height: 30 }}>
                  <Image
                    source={require('../../../img/RecursosHSBC/Transferences/wallet.png')}
                    resizeMode={'stretch'}
                    style={styles.imageItem}
                  />
                </View>
                <View style={{ flex: 1, paddingLeft: 10 }}>
                  <Text />
                  <Text style={{ fontSize: theme.txtNormal }}>CC - 390006</Text>
                  <Text style={{ fontSize: theme.txtVerySmall }}>
                    $ 1.747.235,00
                  </Text>
                  <Text style={{ fontSize: theme.txtVerySmall }}>
                    Saldo Disponible
                  </Text>
                </View>
                <Text>
                  <Icon name="angle-right" size={30} color="#0C0C0C" />
                </Text>
              </View>
            </View>

            <View style={{ marginTop: 5, marginLeft: 1, marginRight: 1 }}>
              <Text
                style={styles.titleCard}
              >
                Datos del Beneficiario
              </Text>
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  elevation: 2,
                  padding: 10,
                  paddingTop: 5,
                  paddingBottom: 5,
                  alignItems: 'center',
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
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginBottom: 5
                  }}
                >
                  <View
                    style={{ flexDirection: 'column', alignSelf: 'stretch' }}
                  >
                    <Text>Nombre de Cuenta</Text>
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
                    <Text>Número de Cuenta</Text>
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
                    <Text>Importe a transferir</Text>
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
                    <Text>Dirección</Text>
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
                    <Text>Ciudad</Text>
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
                    <Text>País</Text>
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
                  <Text>Gastos por cuenta de</Text>
                  <View >
                    <View style={styles.picker}>
                      <Picker
                        style={{ bottom: 10 }}
                        selectedValue={this.state.gastosCuenta}
                        onValueChange={text => this.changeGastosCuenta(text)}
                      >
                        <Picker.Item label="Seleccionar" value="" />
                        <Picker.Item label="Compartido" value="compartido01" />
                        <Picker.Item
                          label="No compartido"
                          value="compartido02"
                        />
                      </Picker>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                    marginTop: 10
                  }}
                >
                  <View
                    style={{
                      width: '103%',
                      flexDirection: 'row',
                      justifyContent: 'flex-end'
                    }}
                  >
                    <Text style={{ color: '#C6C6C6' }}>
                      Guardar Beneficiario
                    </Text>

                    <Switch
                      onValueChange={value =>
                        this.setState({
                          agendaCuenta: value
                        })
                      }
                      onTintColor={theme.colorPrincipal}
                      thumbTintColor="#FFFFFF"
                      tintColor="#EEEEED"
                      value={this.state.agendaCuenta}
                      style={{ marginBottom: 0 }}
                    />
                  </View>
                </View>
              </View>

              <View style={{ marginTop: 5, marginLeft: 1, marginRight: 1 }}>
                <Text
                  style={styles.titleCard}
                >
                  Datos de la Operación
                </Text>
                <View
                  style={{
                    backgroundColor: '#FFFFFF',
                    elevation: 2,
                    padding: 10,
                    paddingTop: 5,
                    paddingBottom: 5,
                    alignItems: 'center',
                    borderRadius: 4,
                    marginBottom: 10
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
                    <Text>Tipo Transferencia</Text>
                    <View >
                      <View style={styles.picker}>
                        <Picker
                          style={{ bottom: 10 }}
                          selectedValue={this.state.transferenceType}
                          onValueChange={text =>
                            this.changeTransferenceType(text)
                          }
                        >
                          <Picker.Item label="Seleccionar" value="" />
                          <Picker.Item label="Linea 1" value="linea1" />
                          <Picker.Item label="Linea 2" value="linea2" />
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
                      <Text>Importe a transferir</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <View
                          style={[
                            styles.viewInputText,
                            { height: 28, width: '90%' }
                          ]}
                        >
                          <TextInput
                            keyboardType={'numeric'}
                            underlineColorAndroid={'transparent'}
                            style={{ height: 28, paddingBottom: 4 }}
                          >
                            {' '}
                          </TextInput>
                        </View>
                        <View style={{ width: '10%' }}>
                          <Text style={{ paddingTop: 4, paddingLeft: 4 }}>
                            USD
                          </Text>
                        </View>
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
                      <Text>Descripción</Text>
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
                    <Text>Boleta de Cambio</Text>
                    <View >
                      <View style={styles.picker}>
                        <Picker
                          style={{ bottom: 10 }}
                          selectedValue={this.state.ticket}
                          onValueChange={text => this.changeTicket(text)}
                        >
                          <Picker.Item label="Seleccionar" value="" />
                          <Picker.Item label="Boleta 1" value="boleta1" />
                          <Picker.Item label="Boleta 2" value="boleta2" />
                        </Picker>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginBottom: 10,
                      marginTop: 10
                    }}
                  >
                    <View
                      style={{
                        width: '103%',
                        flexDirection: 'row',
                        justifyContent: 'flex-end'
                      }}
                    >
                      <Text style={{ color: '#C6C6C6' }}>
                        Programar Transferencia
                      </Text>

                      <Switch
                        onValueChange={value =>
                          this.setState({
                            notifyUser: value
                          })
                        }
                        onTintColor={theme.colorPrincipal}
                        thumbTintColor="#FFFFFF"
                        tintColor="#EEEEED"
                        value={this.state.notifyUser}
                        style={{ marginBottom: 0 }}
                      />
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
                      <Text>Fecha</Text>
                      <View style={[{ flexDirection: 'row' }]}>
                        <View
                          style={{
                            width: '20%',
                            backgroundColor: theme.colorPrincipal,
                            borderBottomLeftRadius: 2,
                            borderTopLeftRadius: 2,
                            height: 28
                          }}
                        />
                        <TouchableWithoutFeedback
                          onPress={() =>
                            this.showPicker('simple', {
                              date: this.state.simpleDate,
                              maxDate: new Date()
                            })
                          }
                        >
                          <View
                            style={{
                              width: '20%',
                              backgroundColor: theme.colorPrincipal,
                              height: 28,
                              paddingLeft: 32
                            }}
                          >
                            <Icon
                              style={{ paddingTop: 6, paddingLeft: 10 }}
                              name="calendar-o"
                              size={15}
                              color="#FFFFFF"
                            />
                          </View>
                        </TouchableWithoutFeedback>

                        <View style={{ width: '50%' }}>
                          <TouchableWithoutFeedback
                            onPress={() =>
                              this.showPicker('simple', {
                                date: this.state.simpleDate,
                                maxDate: new Date()
                              })
                            }
                          >
                            <View
                              style={{
                                height: 28,
                                backgroundColor: theme.colorPrincipal
                              }}
                            >
                              <Text
                                style={[
                                  {
                                    height: 35,
                                    paddingTop: 4,
                                    paddingLeft: 6,
                                    color: '#FFFFFF'
                                  }
                                ]}
                              >
                                {this.state.startDate}
                              </Text>
                            </View>
                          </TouchableWithoutFeedback>
                        </View>
                        <View
                          style={{
                            width: '10%',
                            backgroundColor: theme.colorPrincipal,
                            borderBottomRightRadius: 2,
                            borderTopRightRadius: 2
                          }}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 202
                    }}
                  >
                    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                      <TouchableOpacity
                        style={[styles.continueBoton]}
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

  continueBoton: {
    backgroundColor: theme.colorPrincipal,
    justifyContent: 'center',
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

  titleCard: {
    color: 'black',
    fontWeight: 'bold'
  },

  picker: {
    width: theme.widthInput,
    backgroundColor: theme.colorInputBackground,
    borderRadius: 2,
    height: 28
  }
});
