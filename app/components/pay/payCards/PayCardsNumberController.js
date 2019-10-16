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

export default class PayCardsNumberController extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      numberCard: ''
    };

    this.addNumber = this.addNumber.bind(this);
    this.removeNumber = this.removeNumber.bind(this);
    this.goNext = this.goNext.bind(this);
  }

  addNumber(item) {
    this.setState({ numberCard: this.state.numberCard + item });
  }

  removeNumber() {
    this.setState({ numberCard: this.state.numberCard.slice(0, -1) });
  }

  goNext() {
    this.props.navigation.navigate('PagarTarjeta_ConfirmacionNumero', {
      numberCard: this.state.numberCard
    });
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
              INGRESA EL NÚMERO
            </Text>

            <View
              style={{
                flexDirection: 'row',
                height: 70,
                paddingTop: 15,
                marginLeft: 20,
                marginRight: 10
              }}
            >
              <View style={{ width: '90%', height: 45 }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 30,
                    color: '#FFFFFF',
                    textAlign: 'right'
                    //paddingRight: 5
                    //paddingLeft: 5
                  }}
                >
                  {this.state.numberCard}
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', height: 80 }}>
              <View
                style={{
                  width: '33%',
                  height: 80,
                  alignItems: 'center'
                }}
              >
                <TouchableOpacity onPress={() => this.addNumber('1')}>
                  <View style={{ height: 80, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 36, color: '#FFFFFF' }}>1</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '33%',
                  height: 80,
                  alignItems: 'center'
                }}
              >
                <TouchableOpacity onPress={() => this.addNumber('2')}>
                  <View style={{ height: 80, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 36, color: '#FFFFFF' }}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '33%',
                  height: 80,
                  alignItems: 'center'
                }}
              >
                <TouchableOpacity onPress={() => this.addNumber('3')}>
                  <View style={{ height: 80, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 36, color: '#FFFFFF' }}>3</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flexDirection: 'row', height: 80 }}>
              <View
                style={{
                  width: '33%',
                  height: 80,
                  alignItems: 'center'
                }}
              >
                <TouchableOpacity onPress={() => this.addNumber('4')}>
                  <View style={{ height: 80, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 36, color: '#FFFFFF' }}>4</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '33%',
                  height: 80,
                  alignItems: 'center'
                }}
              >
                <TouchableOpacity onPress={() => this.addNumber('5')}>
                  <View style={{ height: 80, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 36, color: '#FFFFFF' }}>5</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '33%',
                  height: 80,
                  alignItems: 'center'
                }}
              >
                <TouchableOpacity onPress={() => this.addNumber('6')}>
                  <View style={{ height: 80, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 36, color: '#FFFFFF' }}>6</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flexDirection: 'row', height: 80 }}>
              <View
                style={{
                  width: '33%',
                  height: 80,
                  alignItems: 'center'
                }}
              >
                <TouchableOpacity onPress={() => this.addNumber('7')}>
                  <View style={{ height: 80, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 36, color: '#FFFFFF' }}>7</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '33%',
                  height: 80,
                  alignItems: 'center'
                }}
              >
                <TouchableOpacity onPress={() => this.addNumber('8')}>
                  <View style={{ height: 80, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 36, color: '#FFFFFF' }}>8</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '33%',
                  height: 80,
                  alignItems: 'center'
                }}
              >
                <TouchableOpacity onPress={() => this.addNumber('9')}>
                  <View style={{ height: 80, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 36, color: '#FFFFFF' }}>9</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flexDirection: 'row', height: 80 }}>
              <View
                style={{
                  width: '33%',
                  height: 80,
                  alignItems: 'center'
                }}
              >
                <View style={{ height: 80, justifyContent: 'center' }}>
                  <TouchableOpacity onPress={() => this.removeNumber()}>
                    <Image
                      source={require('../../../img/RecursosHSBC/Payments/backspace.png')}
                      resizeMode={'stretch'}
                      style={{
                        paddingTop: 5,
                        paddingBottom: 5,
                        height: 20,
                        width: 30
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  width: '33%',
                  height: 80,
                  alignItems: 'center'
                }}
              >
                <TouchableOpacity onPress={() => this.addNumber('0')}>
                  <View style={{ height: 80, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 36, color: '#FFFFFF' }}>0</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '33%',
                  height: 80,
                  alignItems: 'center'
                }}
              >
                <View style={{ height: 80, justifyContent: 'center' }}>
                  <TouchableOpacity onPress={() => this.goNext()}>
                    <Image
                      source={require('../../../img/RecursosHSBC/Payments/check.png')}
                      resizeMode={'stretch'}
                      style={{
                        paddingTop: 5,
                        paddingBottom: 5,
                        height: 20,
                        width: 30
                      }}
                    />
                  </TouchableOpacity>
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
