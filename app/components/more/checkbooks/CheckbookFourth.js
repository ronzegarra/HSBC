import React, { PureComponent } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

import theme from '../../../theme/theme';

export default class CheckbookFourth extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { startDate: 'Seleccionar Fecha' };
    this.goNext = this.goNext.bind(this);
  }
  goNext() {
    this.props.navigation.navigate('Mas');
  }

  render() {
    return <View>
        <ScrollView>
          <View style={{ marginLeft: -5, marginRight: -5, height: 250, top: -20 }}>
            <Image source={require('../../../img/RecursosHSBC/More/Checkbooks/Arriba.png')} resizeMode={'contain'} style={{ height: 200, width: 'auto' }} />

            <View style={{ flexDirection: 'row', marginTop: -132, marginLeft: 300 }}>
            <Image source={require('../../../img/RecursosHSBC/More/Checkbooks/Share.png')} style={{ height: 25, width: 25 }} />
            </View>
            <View style={{ width: '100%', position: 'absolute' }}>
              <View style={{ width: '100%', alignItems: 'center' }}>
                {/*<View style={{ paddingTop: 15 }}>
                  <Image
                    source={require('../../../img/RecursosHSBC/Payments/Ticket_Ok.png')}
                    style={{ height: 40, width: 40 }}
                  />
              </View>*/}
                <View style={{ paddingTop: 15 }}>
                  {/*<Image source={require('../../../img/RecursosHSBC/Transferences/Ticket_Ok.png')} style={{ height: 40, width: 40 }} />*/}
                  <View style={{ height: 40 }} />
                </View>

                <View style={{ alignItems: 'center', marginTop: 12, marginBottom: 4 }}>
                  <Image source={require('../../../img/RecursosHSBC/Common/logohsbc.png')} style={{ height: 25, width: 100 }} />
                </View>

                <Text style={{ fontSize: 15, textAlign: 'center', fontWeight: '600' }}>
                  Chequera solicitada con éxito
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
          <View style={{ marginLeft: -5, marginRight: -5, height: 290, marginTop: -95.5 }}>
          <Image source={require('../../../img/RecursosHSBC/More/Checkbooks/AbajoLarge.png')} resizeMode={'stretch'} style={{ height: 290, width: 'auto' }} />

            <View style={{ marginTop: -270, paddingBottom: 10, marginBottom: 5, paddingLeft: 45 }}>
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
                Chequera
              </Text>

              <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                25 Hojas v.
              </Text>
              <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                Cantidad 10
              </Text>

              <Text
                style={{ fontSize: 14, fontWeight: '600', color: 'black' }}
              >
                Sucursal de Entrega
              </Text>

              <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                Casa Central
              </Text>

              <Text
                style={{ fontSize: 14, fontWeight: '600', color: 'black' }}
              >
                Titular 1
              </Text>

              <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                Las Lomas Development
              </Text>

              <Text
                style={{ fontSize: 14, fontWeight: '600', color: 'black' }}
              >
                Consto de Servicio
              </Text>
              <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                $4,500.75
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginBottom: 15, top: -58 }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <TouchableOpacity style={[styles.continueBoton, { borderRadius: 4 }]} onPress={() => this.goNext()}>
                <Text style={[styles.textoBoton]}>Continuar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>;
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
