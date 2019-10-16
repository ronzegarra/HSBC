import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import theme from '../../theme/theme';

export default class PayTypeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.viewMore = this.viewMore.bind(this);
  }

  renderImage(type) {
    switch (type) {
      case 'PT':
        return (
          <Image
            source={require('../../img/RecursosHSBC/Payments/tarjeta.png')}
            resizeMode={'contain'}
            style={{ flex: 1, width: undefined }}
          />
        );
      case 'PP':
        return (
          <Image
            source={require('../../img/RecursosHSBC/Payments/prestamo.png')}
            resizeMode={'contain'}
            style={{ flex: 1, width: undefined }}
          />
        );
      case 'PS':
        return <Image source={require('../../img/RecursosHSBC/Payments/servicio.png')} resizeMode={'contain'} style={{ flex: 1, width: undefined }} />;
    }
  }

  viewMore(item) {
    if (item.type === 'PT')
      this.props.navigation.navigate('PagarTarjeta_Primera', {
        data: item.data,
        lastItem: item.data[item.data.length - 1]
      });

    if (item.type === 'PP')
      this.props.navigation.navigate('PagarPrestamo_Primera', {
        data: item.data,
        lastItem: item.data[item.data.length - 1]
      });

    if (item.type === 'PS') {
      this.props.navigation.navigate('PagarServicios_Primera', {
        dataPublicServices: item.publicServices,
        dataTaxes: item.taxesServices,
        dataOthers: item.otherServices
      });
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={[
              this.props.item.type !== 'PS'
                ? styles.movement
                : styles.movementNoBorder
            ]}
          >
            <TouchableOpacity onPress={() => this.viewMore(this.props.item)}>
              <View style={{ width: 30, height: 30 }}>
                {this.renderImage(this.props.item.type)}
              </View>
            </TouchableOpacity>
            <View style={{ flex: 1, paddingLeft: 5 }}>
              <TouchableOpacity onPress={() => this.viewMore(this.props.item)}>
                <Text style={styles.title}>{this.props.item.title}</Text>
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
    paddingTop: 5
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
