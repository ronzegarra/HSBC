import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import theme from '../../../theme/theme';

export default class TransferenceInternationalSubItem extends Component {
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
            source={require('../../../img/RecursosHSBC/Transferences/Position_Wallet.png')}
            resizeMode={'cover'}
            style={{ flex: 1, width: undefined }}
          />
        );
      case 'CA':
        return <Image source={require('../../../img/RecursosHSBC/Transferences/Position_Wallet.png')} resizeMode={'cover'} style={{ flex: 1, width: undefined }} />;
    }
  }

  viewMore() {
    /*
   if (type === 'CC')
      this.props.navigation.navigate('TransferenciasPropias', {
        type: type
      });
    if (type === 'CA')
      this.props.navigation.navigate('TransferenciasTerceros', {
        type: type
      });
    if (type === 'TOB')
      this.props.navigation.navigate('TransferenciasOtros', {
        type: type
      });
  */
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={[
              this.props.item.Id === this.props.lastItem.Id
                ? styles.movementNoBorder
                : styles.movement
            ]}
          >
            <TouchableOpacity
              onPress={() => this.viewMore()}
            >
              <View style={{ width: 30, height: 30 }}>
                {this.renderImage(this.props.item.Type)}
              </View>
            </TouchableOpacity>
            <View style={{ flex: 1, paddingLeft: 5 }}>
              <TouchableOpacity onPress={() => this.viewMore()}>
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
    paddingTop: 5
  },

  subTitle: {
    fontSize: theme.txtNormal,
    color: '#B8B8B8',
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
