import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import theme from '../../../theme/theme';

export default class TransferenceThirdItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.viewMore = this.viewMore.bind(this);
  }

  renderImage(type) {
    switch (type) {
      case 'CC':
        return (
          <Image
            source={require('../../../img/RecursosHSBC/Transferences/wallet.png')}
            resizeMode={'stretch'}
            style={styles.imageItem}
          />
        );
      case 'CA':
        return (
          <Image
            source={require('../../../img/RecursosHSBC/Transferences/wallet.png')}
            resizeMode={'stretch'}
            style={styles.imageItem}
          />
        );
    }
  }

  viewMore(item) {
    if (item.Type === 'CC')
      this.props.navigation.navigate('TransferenciasTerceros_Segunda', {
        data: item.cuentaAgendada,
        lastItem: item.cuentaAgendada[item.cuentaAgendada.length - 1]
      });

    if (item.Type === 'CA')
      this.props.navigation.navigate('TransferenciasTerceros_Segunda', {
        type: item.cuentaAgendada,
        lastItem: item.cuentaAgendada[item.cuentaAgendada.length - 1]
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
              this.props.item.Id === this.props.lastItem.Id
                ? styles.movementNoBorder
                : styles.movement
            ]}
          >
            <TouchableOpacity onPress={() => this.viewMore(this.props.item)}>
              <View style={{ width: 30, height: 30 }}>
                {this.renderImage(this.props.item.Type)}
              </View>
            </TouchableOpacity>
            <View style={{ flex: 1, paddingLeft: 5, top: -2 }}>
              <TouchableOpacity onPress={() => this.viewMore(this.props.item)}>
                <Text style={styles.title}>{this.props.item.Desc}</Text>
                <Text style={styles.subTitle}>{this.props.item.Saldo}</Text>
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
    fontWeight: 'bold'
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
