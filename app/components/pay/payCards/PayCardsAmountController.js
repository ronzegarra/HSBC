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

import format from '../../../tools/format';

export default class PayCardsAmountController extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      amount: ''
    };

    this.addNumber = this.addNumber.bind(this);
    this.removeNumber = this.removeNumber.bind(this);
    this.goNext = this.goNext.bind(this);
  }

  addNumber(item) {
    this.setState({ amount: this.state.amount + item });
  }

  removeNumber() {
    this.setState({ amount: this.state.amount.slice(0, -1) });
  }

  goNext() {
    this.props.navigation.navigate('PagarTarjeta_Cuarta', {
      amount: this.state.amount
    });
  }

  render() {
    return <View style={{ flex: 1, backgroundColor: theme.colorHeader }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ marginTop: 15, marginBottom: 15, color: '#FFFFFF', fontSize: 12, fontWeight: 'bold' }}>
            INGRESA EL MONTO
            </Text>

          <View style={{ flexDirection: 'row', height: 90 }}>
            <View style={{ width: '85%', height: 45, paddingLeft: 10 }}>
              <Text numberOfLines={1} style={{ fontSize: 55, color: '#2B2B2B', textAlign: 'right', paddingRight: 5 }}>
                {format.money(this.state.amount)}
              </Text>
            </View>
            <View style={{ width: '15%', height: 45 }}>
              <Text style={{ fontSize: 18, color: '#2B2B2B', textAlign: 'left', paddingTop: 36 }}>
                USD
                </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', height: 80 }}>
            <View style={{ width: '33%', height: 80, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.addNumber('1')}>
                <View style={{ height: 80, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 36, color: '#2B2B2B' }}>
                    1
                    </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ width: '33%', height: 80, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.addNumber('2')}>
                <View style={{ height: 80, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 36, color: '#2B2B2B' }}>
                    2
                    </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ width: '33%', height: 80, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.addNumber('3')}>
                <View style={{ height: 80, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 36, color: '#2B2B2B' }}>
                    3
                    </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', height: 80 }}>
            <View style={{ width: '33%', height: 80, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.addNumber('4')}>
                <View style={{ height: 80, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 36, color: '#2B2B2B' }}>
                    4
                    </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ width: '33%', height: 80, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.addNumber('5')}>
                <View style={{ height: 80, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 36, color: '#2B2B2B' }}>
                    5
                    </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ width: '33%', height: 80, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.addNumber('6')}>
                <View style={{ height: 80, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 36, color: '#2B2B2B' }}>
                    6
                    </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', height: 80 }}>
            <View style={{ width: '33%', height: 80, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.addNumber('7')}>
                <View style={{ height: 80, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 36, color: '#2B2B2B' }}>
                    7
                    </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ width: '33%', height: 80, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.addNumber('8')}>
                <View style={{ height: 80, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 36, color: '#2B2B2B' }}>
                    8
                    </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ width: '33%', height: 80, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.addNumber('9')}>
                <View style={{ height: 80, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 36, color: '#2B2B2B' }}>
                    9
                    </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', height: 80 }}>
            <View style={{ width: '33%', height: 80, alignItems: 'center' }}>
              <View style={{ height: 80, justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => this.removeNumber()}>
                  <Image source={require('../../../img/RecursosHSBC/Transferences/backspace.png')} resizeMode={'stretch'} style={{ paddingTop: 5, paddingBottom: 5, height: 20, width: 30 }} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: '33%', height: 80, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.addNumber('0')}>
                <View style={{ height: 80, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 36, color: '#2B2B2B' }}>
                    0
                    </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ width: '33%', height: 80, alignItems: 'center' }}>
              <View style={{ height: 80, justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => this.goNext()}>
                  <Image source={require('../../../img/RecursosHSBC/Transferences/check.png')} resizeMode={'stretch'} style={{ paddingTop: 5, paddingBottom: 5, height: 20, width: 30 }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>;
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
