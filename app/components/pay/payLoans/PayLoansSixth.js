import React, { Component, PureComponent } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground
} from 'react-native';

import theme from '../../../theme/theme';

const confirmData = [
  {
    id: 1,
    account: 'Cuota 1: $ 10, 000.00'
  },
  {
    id: 2,
    account: 'Cuota 2: $ 10, 000.00'
  },
  {
    id: 3,
    account: 'Cuota 3: $ 10, 000.00'
  },
  {
    id: 4,
    account: 'Cuota 4: $ 10, 000.00'
  },
  {
    id: 5,
    account: 'Cuota 5: $ 10, 000.00'
  },
  {
    id: 6,
    account: 'Cuota 6: $ 10, 000.00'
  },
  {
    id: 7,
    account: 'Cuota 7: $ 10, 000.00'
  },
  {
    id: 8,
    account: 'Cuota 8: $ 10, 000.00'
  },
  {
    id: 9,
    account: 'Cuota 9: $ 10, 000.00'
  },
  {
    id: 10,
    account: 'Cuota 6: $ 10, 000.00'
  },
  {
    id: 11,
    account: 'Cuota 7: $ 10, 000.00'
  },
  {
    id: 12,
    account: 'Cuota 8: $ 10, 000.00'
  },
  {
    id: 13,
    account: 'Cuota 9: $ 10, 000.00'
  },
  {
    id: 14,
    account: 'Cuota 14: $ 10, 000.00'
  },
  {
    id: 15,
    account: 'Cuota 15: $ 10, 000.00'
  },
  {
    id: 16,
    account: 'Cuota 16: $ 10, 000.00'
  },
  {
    id: 17,
    account: 'Cuota 17: $ 10, 000.00'
  },
  {
    id: 18,
    account: 'Cuota 18: $ 10, 000.00'
  },
  {
    id: 19,
    account: 'Cuota 19: $ 10, 000.00'
  },
  {
    id: 20,
    account: 'Cuota 20: $ 10, 000.00'
  }
];

export default class PayLoansSixth extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { startDate: 'Seleccionar Fecha' };
    this.goNext = this.goNext.bind(this);
  }
  goNext() {
    this.props.navigation.navigate('Pagar_Resumen');
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View
            style={{ marginLeft: -5, marginRight: -5, height: 250, top: -20 }}
          >
            <Image
              source={require('../../../img/RecursosHSBC/Transferences/Arriba.png')}
              resizeMode={'contain'}
              style={{ height: 200, width: 'auto' }}
            />

            <View
              style={{ flexDirection: 'row', marginTop: -132, marginLeft: 300 }}
            >
              <Image
                source={require('../../../img/RecursosHSBC/Transferences/Share.png')}
                style={{ height: 25, width: 25 }}
              />
            </View>
            <View style={{ width: '100%', position: 'absolute' }}>
              <View style={{ width: '100%', alignItems: 'center' }}>
                <View style={{ paddingTop: 15 }}>
                  {/*<Image source={require('../../../img/RecursosHSBC/Transferences/Ticket_Ok.png')} style={{ height: 40, width: 40 }} />*/}
                  <View style={{ height: 40 }} />
                </View>

                <View
                  style={{
                    alignItems: 'center',
                    marginTop: 12,
                    marginBottom: 4
                  }}
                >
                  <Image
                    source={require('../../../img/RecursosHSBC/Common/logohsbc.png')}
                    style={{ height: 25, width: 100 }}
                  />
                </View>

                <Text
                  style={{
                    fontSize: 15,
                    textAlign: 'center',
                    fontWeight: '600'
                  }}
                >
                  Operación realizada con éxito
                </Text>
                <Text style={{ fontSize: 12, textAlign: 'center' }}>
                  Fecha 21/02/2018 Hora 02:17 PM
                </Text>
                <Text style={{ fontSize: 12, textAlign: 'center' }}>
                  Oper. 001/250/03256
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginLeft: -5,
              marginRight: -5,
              height: 280,
              marginTop: -89.5
            }}
          >
            <Image
              source={require('../../../img/RecursosHSBC/Payments/Medio.png')}
              resizeMode={'stretch'}
              style={{ height: 140, width: 'auto' }}
            />

            <View
              style={{ marginTop: -135, paddingBottom: 6.3, paddingLeft: 45 }}
            >
              <Text style={{ fontSize: 14, fontWeight: '600', color: 'black' }}>
                Cuenta Débito
              </Text>

              <Text style={{ fontSize: 13, paddingLeft: 10 }}>CC - 390006</Text>

              <Text style={{ fontSize: 14, fontWeight: '600', color: 'black' }}>
                Préstamo a Pagar
              </Text>

              <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                PT - Préstamo Vivienda
              </Text>
              <Text style={{ fontSize: 14, fontWeight: '600', color: 'black' }}>
                Monto total a la fecha
              </Text>
              <Text style={{ fontSize: 13, paddingLeft: 10 }}>$36,000.00</Text>
              <Text style={{ fontSize: 14, fontWeight: '600', color: 'black' }}>
                Monto total a la fecha
              </Text>
            </View>
          </View>
          <View style={{ marginLeft: -5, marginRight: -5, top: -137 }}>
            {confirmData.map(item => {
              return (
                <ImageBackground
                  source={require('../../../img/RecursosHSBC/Payments/Medio.png')}
                  style={{ height: 15, top: -3.0 }}
                  resizeMode={'stretch'}
                >
                  <View
                    style={{
                      paddingBottom: 10,
                      marginBottom: 0,
                      paddingLeft: 45,
                      top: -1.5
                    }}
                  >
                    <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                      {item.account}
                    </Text>
                  </View>
                </ImageBackground>
              );
            })}
          </View>
          <View
            style={{
              marginLeft: -5,
              marginRight: -5,
              height: 180, //marginTop: -50.5
              top: -138
            }}
          >
            <Image
              source={require('../../../img/RecursosHSBC/Payments/Medio.png')}
              resizeMode={'stretch'}
              style={{ height: 80, width: 'auto', top: -2.8 }}
            />
            <View style={{ marginTop: -75, paddingLeft: 45 }}>
              <Text style={{ fontSize: 14, fontWeight: '600', color: 'black' }}>
                Recargo por atraso
              </Text>

              <Text style={{ fontSize: 13, paddingLeft: 10 }}>$1,000.00</Text>
              <Text style={{ fontSize: 14, fontWeight: '600', color: 'black' }}>
                Total a pagar
              </Text>

              <Text style={{ fontSize: 13, paddingLeft: 10 }}>$36,000.00</Text>
            </View>
          </View>

          <View
            style={{ marginLeft: -5, marginRight: -5, height: 100, top: -240 }}
          >
            <Image
              source={require('../../../img/RecursosHSBC/Payments/Abajo.png')}
              resizeMode={'stretch'}
              style={{ height: 80, width: 'auto', top: -3.0 }}
            />
            <View style={{ marginTop: -32, paddingLeft: 45 }}>
              <Text style={{ fontSize: 12, paddingTop: 5 }}> </Text>
            </View>
          </View>

          <View
            style={{ flexDirection: 'row', marginBottom: 15, marginTop: -325 }}
          >
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <TouchableOpacity
                style={[styles.continueBoton, { borderRadius: 4 }]}
                onPress={() => this.goNext()}
              >
                <Text style={[styles.textoBoton]}>Continuar</Text>
              </TouchableOpacity>
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

  containerImage: {
    flex: 1,
    marginTop: 20,
    height: 500,
    width: 'auto',
    marginBottom: -25
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
    top: -1,
    textAlign: 'center',
    fontSize: 14,
    color: '#FFFFFF'
  }
  
});
