import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import theme from '../../theme/theme';

export default class TransferenceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.viewMore = this.viewMore.bind(this);
  }

  renderImage(type) {
    switch (type) {
      case 'TCP':
        return <Image source={require('../../img/RecursosHSBC/Transferences/propias.png')} resizeMode={'stretch'} style={{ height: 22, width: 28 , paddingLeft: 5}} />;
      case 'TT':
        return <Image source={require('../../img/RecursosHSBC/Transferences/terceros.png')} resizeMode={'stretch'} style={{ flex: 1, width: undefined }} />;
      case 'TOB':
        return <Image source={require('../../img/RecursosHSBC/Transferences/otrobanco.png')} resizeMode={'stretch'} style={{ flex: 1, width: undefined }} />;
      case 'TI':
        return <Image source={require('../../img/RecursosHSBC/Transferences/transinternacional.png')} resizeMode={'stretch'} style={{ height: 30, width: 30 }} />;
    }
  }

  viewMore(item) {
    console.warn(item.type);

    if (item.type === 'TCP')
      this.props.navigation.navigate('TransferenciasPropias', {
        data: item.data,
        lastItem: item.data[item.data.length - 1]
      });
    if (item.type === 'TT')
      this.props.navigation.navigate('TransferenciasTerceros', {
        data: item.data,
        lastItem: item.data[item.data.length - 1]
      });
    if (item.type === 'TOB')
      this.props.navigation.navigate('TransferenciasOtrosBancos', {
        data: item.cuentaAgendada,
        lastItem: item.cuentaAgendada[item.cuentaAgendada.length - 1]
      });
    if (item.type === 'TI')
      this.props.navigation.navigate('TransferenciasInternacionales', {
        data: item.data,
        lastItem: item.data[item.data.length - 1]
      });
  }

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View style={{ flex: 1 }}>
          <View
            style={[
              this.props.item.type !== 'TI'
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
