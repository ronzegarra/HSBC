import React, { Component, PureComponent } from 'react';

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';

import theme from '../../../theme/theme';
import PayCardsSubItem from './PayCardsSubItem';

export default class PayCardsSecond extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.state.params.data,
      lastItem: {}
    };

    this.renderChoosePayCards = this.renderChoosePayCards.bind(this);

    this.goNext = this.goNext.bind(this);
  }

  goNext() {
    this.props.navigation.navigate('PagarTarjeta_ControladorNumero');
  }

  renderChoosePayCards({ item }) {
    let lastItem = item.Data[item.Data.length - 1];

    return (
      <View>
        <Text style={styles.sectionHeader}>{item.Title}</Text>
        {item.Data.map(item => {
          return (
            <View>
              <PayCardsSubItem
                key={item.Id}
                item={item}
                lastItem={lastItem}
                navigation={this.props.navigation}
              />
            </View>
          );
        })}
      </View>
    );
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <FlatList
              style={styles.viewMenu}
              data={this.state.data}
              renderItem={
                this.renderChoosePayCards //keyExtractor={(item) => item.IdOperacion}
              }
            />
            <TouchableOpacity
              style={{ flexDirection: 'row' }}
              onPress={() => this.goNext()}
            >
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  paddingBottom: 20,
                  paddingTop: 20,
                  borderTopColor: '#F2F2F2',
                  borderTopWidth: 1
                }}
              >
                <View style={{ width: 20, height: 20 }}>
                  <Image
                    source={require('../../../img/RecursosHSBC/Payments/add.png')}
                    resizeMode={'contain'}
                    style={{ flex: 1, width: undefined }}
                  />
                </View>
                <Text style={styles.action}>Agregar una tarjeta</Text>
              </View>
            </TouchableOpacity>
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
    paddingRight: theme.margin
  },

  sectionHeader: {
    fontSize: theme.txtNormal,
    color: theme.colorSubTitle,
    marginBottom: 5,
    marginTop: 15
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

  action: {
    fontSize: theme.txtNormal,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10
  }
});
