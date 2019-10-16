import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import theme from '../../theme/theme';

export default class ProdItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activateCC: false
    };
    this.viewMore = this.viewMore.bind(this);
  }

  renderImage(type) {
    switch (type) {
      case 'CC':
      case 'CA':
        return <Image source={require('../../img/RecursosHSBC/Products/Cartera.png')} resizeMode={'cover'} style={{ height: 23, width: undefined }} />;
      case 'TCREDITO':
      case 'TPREPAGA':
        return <Image source={require('../../img/RecursosHSBC/Favorites/tarjeta.png')} resizeMode={'cover'} style={{ marginTop: 4, height: 23, width: undefined }} />;
      case 'PRESTAMOS':
        return <Image source={require('../../img/RecursosHSBC/Favorites/Position_Cash.png')} resizeMode={'cover'} style={{ flex: 1, width: undefined }} />;
      case 'DPF':
        return <Image source={require('../../img/RecursosHSBC/Products/bar-chart.png')} resizeMode={'cover'} style={{ flex: 1, width: undefined }} />;
    }
  }

  viewMore(type) {
    if (type === 'CC' || type === 'CA')
      this.props.navigation.navigate('Movimientos', {
        type: type
      });
    if (type === 'TCREDITO' || type === 'TPREPAGA')
      this.props.navigation.navigate('TarjetasCredito', {
        type: type
      });
    if (type === 'DPF')
      this.props.navigation.navigate('DPF', { type: type });
    if (type === 'PRESTAMOS')
      this.props.navigation.navigate('Prestamos', { type: type });
  }

  render() {
    return (
      <View style={{ padding: 2 }}>
        <TouchableOpacity
          onPress={() => this.viewMore(this.props.item.Type)}
          style={{
            backgroundColor: '#FFFFFF',
            flex: 1,
            flexDirection: 'row',
            elevation: 2,
            padding: 10,
            paddingTop: 5,
            paddingBottom: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 4,
            marginBottom: 10
          }}
        >
          <View style={{ width: 30, height: 30 }}>
            {this.renderImage(this.props.item.Type)}
          </View>
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <Text style={styles.title}>{this.props.item.Desc}</Text>
            <Text style={{ fontSize: theme.txtNormal }}>
              {this.props.item.Saldo}
            </Text>
            <Text style={{ fontSize: theme.txtVerySmall }}>
              Saldo Disponible
            </Text>
          </View>
          <Text>
            <Icon name="angle-right" size={30} color="#0C0C0C" />
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: theme.txtNormal,
    color: 'black',
    fontWeight: 'bold'
  }
});
