/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { PureComponent } from 'react';

import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import theme from '../../theme/theme';

export default class PayHome extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      favorites: [
        { Id: 1, Desc: 'CC - PYG - 390006', Saldo: 'PYG 1.747.235,00' },
        { Id: 2, Desc: 'CC - PYG - 490012', Saldo: 'PYG 3.707.245,00' }
      ]
    };

    this.goNext = this.goNext.bind(this);
  }

  goNext() {
    this.props.navigation.navigate('Pagar_Tipo');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, padding: theme.margin }}>
          <View style={{ paddingTop: 7 }}>
            <Text style={styles.title}>NUEVO PAGO</Text>
          </View>

          <View style={styles.subContainer}>
            <TouchableOpacity
              style={{ flexDirection: 'row' }}
              onPress={() => this.goNext()}
            >
              <View style={{ width: 20, height: 20 }}>
                <Image
                  source={require('../../img/RecursosHSBC/Payments/add.png')}
                  resizeMode={'contain'}
                  style={{ flex: 1, width: undefined }}
                />
              </View>
              <Text style={styles.action}>Realizar un nuevo pago</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flex: 3,
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}
        >
          <View style={{ width: 120, height: 120 }}>
            <Image
              source={require('../../img/RecursosHSBC/Payments/notFound.png')}
              resizeMode={'contain'}
              style={{ flex: 1, width: undefined }}
            />
          </View>

          <View style={{ padding: theme.margin }}>
            <Text style={{ fontSize: theme.txtBig }}>¡Nada por aquí!</Text>
          </View>

          <View style={{ paddingLeft: 30, paddingRight: 30 }}>
            <Text style={{ fontSize: theme.txtSmall, textAlign: 'center' }}>
              A medida que efectúes pagos, los enlistaremos aquí para que te sea
              mas fácil pagarlos la próxima vez
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  subContainer: {
    flexDirection: 'row',
    borderBottomColor: '#cdcdcd',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderWidth: 0.5,
    paddingTop: theme.margin,
    paddingBottom: theme.margin
  },

  title: {
    fontSize: theme.txtSmall,
    color: theme.colorSubTitle
  },

  action: {
    fontSize: theme.txtNormal,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10
  }
});
