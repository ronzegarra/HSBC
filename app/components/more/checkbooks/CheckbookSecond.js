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

export default class CheckbookSecond extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      startDate: 'Seleccionar Fecha',
      transferenceType: '',
      ticket: '',
      sucursal: '',
      accountType: '',
      coin: '',
      formType: '',
      checkbookType: ''
    };

    this.goNext = this.goNext.bind(this);
    this.changeTransferenceType = this.changeTransferenceType.bind(this);
    this.changeTicket = this.changeTicket.bind(this);

    this.changeSucursal = this.changeSucursal.bind(this);
    this.changeAccountType = this.changeAccountType.bind(this);
    this.changeCoin = this.changeCoin.bind(this);

    this.changeFormType = this.changeFormType.bind(this);
    this.changeCheckBookType = this.changeCheckBookType.bind(this);
  }

  showPicker = async (stateKey, options) => {
    try {
      let { action, year, month, day } = await DatePickerAndroid.open(options);
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

  changeFormType(formType) {
    this.setState({ formType });
  }

  changeCheckBookType(checkbookType) {
    this.setState({ checkbookType });
  }

  goNext() {
    this.props.navigation.navigate('Chequera_Tercera');
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <View style={{ marginTop: 10, marginLeft: 1, marginRight: 1 }}>
              <Text style={styles.titleCard}>Cuenta</Text>
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  flexDirection: 'row',
                  elevation: 2,
                  padding: 10,
                  paddingTop: 5,
                  paddingBottom: 5,
                  borderRadius: 4,
                  marginBottom: 10
                }}
              >
                <View
                  style={{ width: 30, height: 30, top: 15, marginBottom: 5 }}
                >
                  <Image
                    source={require('../../../img/RecursosHSBC/More/Checkbooks/wallet.png')}
                    resizeMode={'stretch'}
                    style={styles.imageItem}
                  />
                </View>
                <View style={{ flex: 1, paddingLeft: 10 }}>
                  <Text /* style={styles.title} */ />
                  <Text
                    style={{
                      fontSize: theme.txtNormal,
                      color: 'black',
                      fontWeight: 'bold'
                    }}
                  >
                    CC - PYG - 390006
                  </Text>
                  <Text style={{ fontSize: theme.txtVerySmall }}>
                    PYG 1.747.235,00
                  </Text>
                  <Text style={{ fontSize: theme.txtVerySmall }}>
                    Saldo Disponible
                  </Text>
                </View>
                <Text style={{ paddingTop: 10 }}>
                  <Icon name="angle-right" size={30} color="#0C0C0C" />
                </Text>
              </View>
            </View>

            <View style={{ marginTop: 5, marginLeft: 1, marginRight: 1 }}>
              <Text style={styles.titleCard}>Datos de la Chequera</Text>
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
                    flexDirection: 'column',
                    alignSelf: 'stretch',
                    marginBottom: 5
                  }}
                >
                  <View style={{ flexDirection: 'row', width: '100%' }}>
                    <View style={{ width: '50%', height: 50 }}>
                      <Text>Tipo de Chequera</Text>
                      <View>
                        <View style={[styles.picker, { width: '90%' }]}>
                          <Picker
                            style={{ bottom: 10 }}
                            selectedValue={this.state.checkbookType}
                            onValueChange={text =>
                              this.changeCheckBookType(text)
                            }
                          >
                            <Picker.Item label="Seleccionar" value="" />
                            <Picker.Item label="Chequera 1" value="chequera1" />
                            <Picker.Item label="Chequera 2" value="chequera2" />
                          </Picker>
                        </View>
                      </View>
                    </View>
                    <View style={{ width: '50%', height: 50 }}>
                      <Text style={{ paddingLeft: 15 }}>Cantidad</Text>
                      <View style={{ paddingLeft: 15 }}>
                        <View style={[styles.picker, { width: '100%' }]}>
                          <TextInput
                            keyboardType={'numeric'}
                            underlineColorAndroid={'transparent'}
                            style={[{ height: 28, paddingBottom: 4 }]}
                          >
                            {' '}
                          </TextInput>
                        </View>
                      </View>
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
                  <Text>Sucursal de Entrega</Text>
                  <View>
                    <View style={styles.picker}>
                      <Picker
                        style={{ bottom: 10 }}
                        selectedValue={this.state.sucursal}
                        onValueChange={text => this.changeSucursal(text)}
                      >
                        <Picker.Item label="Seleccionar" value="" />
                        <Picker.Item label="Casa Central" value="sucursal1" />
                        <Picker.Item label="Sucursal 2" value="sucursal2" />
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
                    <Text>Titular 1 (Nombre y Apellido)</Text>
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
                    <Text>Titular 2 (Nombre y Apellido)</Text>
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
                    <Text>Persona Autorizada a Retirar</Text>
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
                    <Text>Identificación Persona Autorizada</Text>
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
                    marginBottom: 5
                  }}
                >
                  <Text style={{ textAlign: 'left' }}>Costo de Servicio</Text>
                  <Text
                    style={{
                      textAlign: 'left',
                      fontWeight: 'bold',
                      color: 'black'
                    }}
                  >
                    $40.75
                  </Text>
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
