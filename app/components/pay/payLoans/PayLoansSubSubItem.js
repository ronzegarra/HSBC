import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import theme from '../../../theme/theme';

export default class PayLoansSubSubItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.viewMore = this.viewMore.bind(this);
  }

  renderImage() {
    return (
      <Image
        source={require('../../../img/RecursosHSBC/Payments/prestamo.png')}
        resizeMode={'stretch'}
        style={{ flex: 1, width: undefined }}
      />
    );
  }

  viewMore(item) {
    if (item.Type === 'PM')
      this.props.navigation.navigate('PagarPrestamo_Cuarta');
    if (item.Type === 'OM')
      this.props.navigation.navigate('PagarPrestamo_ControladorMonto');
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
            <TouchableOpacity onPress={() => this.viewMore(this.props.item)}>
              <View
                style={{
                  width: 30,
                  height: 35
                }}
              >
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
    paddingTop: 5
  },

  subTitle: {
    fontSize: theme.txtNormal,
    color: '#B8B8B8',
    paddingLeft: 10,
    paddingTop: 5
  },

  subSubTitle: {
    fontSize: 10,
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
