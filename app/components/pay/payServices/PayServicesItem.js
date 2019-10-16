import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import theme from '../../../theme/theme';

export default class PayServicesItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.viewMore = this.viewMore.bind(this);
  }

  renderImage(type) {
    return (
      <Image
        source={require('../../../img/RecursosHSBC/Payments/servicio.png')}
        resizeMode={'contain'}
        style={{ flex: 1, width: undefined }}
      />
    );
  }

  viewMore(item) {
    this.props.navigation.navigate('PagarServicios_Segunda', {
      data: item.debitAccounts,
      lastItem: item.debitAccounts[item.debitAccounts.length - 1]
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
            <TouchableOpacity onPress={() => this.viewMore(this.props.item)}>
              <View style={{ width: 30, height: 30 }}>
                {this.renderImage()}
              </View>
            </TouchableOpacity>
            <View style={{ flex: 1, paddingLeft: 5 }}>
              <TouchableOpacity onPress={() => this.viewMore(this.props.item)}>
                <Text style={styles.title}>{this.props.item.Desc}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: theme.txtNormal,
    color: 'black',
    paddingLeft: 10,
    paddingTop: 5,
    //fontWeight: 'bold'
  },

  subTitle: {
    fontSize: theme.txtNormal,
    color: '#B8B8B8',
    paddingLeft: 10,
    paddingTop: 5
  },

  imageItem: {
    height: 24,
    width: 30
  },

  movement: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderBottomColor: '#cdcdcd',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent'
  },

  movementNoBorder: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent'
  }
});
