import React, { Component, PureComponent } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

import theme from '../../../theme/theme';

export default class PayCardsNumberConfirmation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      amount: ''
    };

    this.addNumber = this.addNumber.bind(this);
    this.removeNumber = this.removeNumber.bind(this);
    this.goNext = this.goNext.bind(this);
    this.goRefuse = this.goRefuse.bind(this);
  }

  addNumber(item) {
    this.setState({ amount: this.state.amount + item });
  }

  removeNumber() {
    this.setState({ amount: this.state.amount.slice(0, -1) });
  }

  goNext() {
    this.props.navigation.navigate('PagarTarjeta_ControladorMonto');
  }

  goRefuse() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: theme.colorHeader }}>
        <ScrollView>
          <View style={styles.container}>
            <Text
              style={{
                marginTop: 15,
                marginBottom: 15,
                color: '#FFFFFF',
                fontSize: 12,
                fontWeight: 'bold'
              }}
            >
              CONFIRMAR
            </Text>

            <View style={{ flexDirection: 'row', height: 80 }}>
              <View style={{ flexDirection: 'column' }}>
                <Text
                  style={{
                    marginTop: 15,
                    color: '#FFFFFF',
                    fontSize: 12,
                    fontWeight: 'bold'
                  }}
                >
                  NÚMERO DEL PLÁSTICO
                </Text>
                <Text style={{ color: '#FFFFFF', fontSize: 24 }}>
                  1234 6545 6541 8962
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', height: 80 }}>
              <View style={{ flexDirection: 'column' }}>
                <Text
                  style={{
                    marginTop: 5,
                    color: '#FFFFFF',
                    fontSize: 12,
                    fontWeight: 'bold'
                  }}
                >
                  NOMBRE DEL PLÁSTICO
                </Text>
                <Text style={{ color: '#FFFFFF', fontSize: 24 }}>
                  Joaquín Batista
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', height: 80 }}>
              <View style={{ flexDirection: 'column' }}>
                <Text
                  style={{
                    marginTop: 5,
                    color: '#FFFFFF',
                    fontSize: 12,
                    fontWeight: 'bold'
                  }}
                >
                  AFINIDAD
                </Text>
                <Text style={{ color: '#FFFFFF', fontSize: 24 }}>
                  American Express
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 50, height: 85 }}>
              <View style={{ width: '50%', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.goRefuse()}>
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                  >
                    <Text
                      style={{
                        marginTop: 5,
                        color: '#FFFFFF',
                        fontSize: 12,
                        fontWeight: 'bold'
                      }}
                    >
                      RECHAZAR
                    </Text>
                    <View style={{ alignItems: 'center', paddingTop: 7 }}>
                      <Image
                        source={require('../../../img/RecursosHSBC/Payments/reject.png')}
                        resizeMode={'stretch'}
                        style={{ height: 55, width: 55 }}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ width: '50%', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.goNext()}>
                  <View style={{ flexDirection: 'column' }}>
                    <Text
                      style={{
                        marginTop: 5,
                        color: '#FFFFFF',
                        fontSize: 12,
                        fontWeight: 'bold'
                      }}
                    >
                      ACEPTAR
                    </Text>
                    <View style={{ alignItems: 'center', paddingTop: 7 }}>
                      <Image
                        source={require('../../../img/RecursosHSBC/Payments/circle_check.png')}
                        resizeMode={'stretch'}
                        style={{ height: 55, width: 55 }}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
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
    flex: 1,
    paddingLeft: theme.margin,
    paddingRight: theme.margin,
    paddingTop: 25,
    backgroundColor: theme.colorHeader
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
  }
});
