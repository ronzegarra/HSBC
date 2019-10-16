import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import theme from '../../../theme/theme';

export default class PayCardsSubSubItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.viewMore = this.viewMore.bind(this);
  }

  renderImage(type) {
    switch (type) {
      case 'PM':
        return <Image source={require('../../../img/RecursosHSBC/Payments/tarjeta.png')} resizeMode={'contain'} style={{ flex: 1, width: undefined }} />;
      case 'OM':
        return <Image source={require('../../../img/RecursosHSBC/Payments/prestamo.png')} resizeMode={'contain'} style={{ flex: 1, width: undefined }} />;
    }
  }

  viewMore(item) {
    if (item.Type === 'PM')
      this.props.navigation.navigate('PagarTarjeta_Cuarta');
    if (item.Type === 'OM')
      this.props.navigation.navigate('PagarTarjeta_ControladorMonto');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={[
              this.props.item.Type === 'OM'
                ? styles.movementNoBorder
                : styles.movement
            ]}
          >
            <TouchableOpacity>
              <View
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 2
                }}
              >
                {this.renderImage(this.props.item.Type)}
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
