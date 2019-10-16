import React, { Component, PureComponent } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  DatePickerAndroid,
  ScrollView
} from 'react-native';

import theme from '../../../theme/theme';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class PayLoansFourth extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      startDate: 'Seleccionar Fecha',
      payType: '',
      notifyUser: false
    };
    this.changePayType = this.changePayType.bind(this);
    this.goNext = this.goNext.bind(this);
  }

  changePayType({ payType }) {
    this.setState(payType);
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

  goNext() {
    this.props.navigation.navigate('PagarPrestamo_Quinta');
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <View style={{ marginTop: 10, marginLeft: 1, marginRight: 1 }}>
              <Text style={styles.titleCard}>Cuenta Débito</Text>
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
                    source={require('../../../img/RecursosHSBC/Payments/Cartera.png')}
                    resizeMode={'contain'}
                    style={{ flex: 1, width: undefined }}
                  />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: -10 }}>
                  <Text
                    style={{
                      fontSize: theme.txtNormal,
                      color: 'black',
                      fontWeight: 'bold'
                    }}
                  >
                    CC - 390006
                  </Text>
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
              <Text style={styles.titleCard}>Préstamo a Pagar</Text>
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
                    source={require('../../../img/RecursosHSBC/Payments/prestamo.png')}
                    resizeMode={'contain'}
                    style={{ flex: 1, width: undefined }}
                  />
                </View>
                <View style={{ flex: 1, paddingLeft: 10 }}>
                  <Text
                    style={{
                      fontSize: theme.txtNormal,
                      color: 'black',
                      fontWeight: 'bold'
                    }}
                  >
                    PT - Préstamo Vivienda{' '}
                  </Text>
                  <Text style={{ fontSize: theme.txtVerySmall }}>
                    $ 50,000.00 en 5 Cuotas
                  </Text>
                  <Text style={{ fontSize: theme.txtVerySmall }}>
                    Cuota 1: $10,000
                  </Text>
                </View>
                <Text>
                  <Icon name="angle-right" size={30} color="#0C0C0C" />
                </Text>
              </View>

              <View style={{ marginTop: 5, marginLeft: 1, marginRight: 1 }}>
                <Text style={styles.titleCard}>Datos de la Operación</Text>

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
                  <View style={{ flexDirection: 'column' }}>
                    <View style={{ paddingBottom: 5 }}>
                      <Text>Monto total a la fecha</Text>
                      <View>
                        <Text
                          style={{
                            color: 'black',
                            paddingLeft: 6,
                            fontWeight: 'bold'
                          }}
                        >
                          $35,000.00
                        </Text>
                      </View>
                    </View>
                    <View style={{ paddingBottom: 5 }}>
                      <Text>Monto</Text>
                      <View>
                        <Text
                          style={{
                            color: 'black',
                            paddingLeft: 6,
                            fontWeight: 'bold'
                          }}
                        >
                          Cuota 1: $10,000.00
                        </Text>
                        <Text style={{ color: 'black', paddingLeft: 6, fontWeight: 'bold' }}>
                          Cuota 2: $10,000.00
                        </Text>
                        <Text style={{ color: 'black', paddingLeft: 6, fontWeight: 'bold' }}>
                          Cuota 3: $10,000.00
                        </Text>
                        <Text style={{ color: 'black', paddingLeft: 6, fontWeight: 'bold' }}>
                          Cuota 4: $10,000.00
                        </Text>
                      </View>
                    </View>
                    <View style={{ paddingBottom: 5 }}>
                      <Text>Recargo por atraso</Text>
                      <View style={{ height: 28 }}>
                        <Text style={{ color: 'black', paddingLeft: 6, fontWeight: 'bold' }}>
                          $1,000.00
                        </Text>
                      </View>
                    </View>

                    <View style={{ paddingBottom: 5 }}>
                      <Text>Total a pagar</Text>
                      <View>
                        <Text style={{ color: 'black', paddingLeft: 6, fontWeight: 'bold' }}>
                          $36,000.00
                        </Text>
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

  titleCard: {
    color: 'black',
    fontWeight: 'bold'
  },

  textoBoton: {
    top: -1,
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
