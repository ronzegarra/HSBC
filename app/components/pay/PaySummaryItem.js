import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import theme from '../../theme/theme';

export default class PaySummaryItem extends Component {
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
            source={require('../../img/RecursosHSBC/Payments/Cartera.png')}
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

  viewMore(item) {}

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
            <TouchableOpacity>
              <View
                style={{
                  width: 30,
                  height: 30,
                  marginTop: 2
                }}
              >
                {this.renderImage(this.props.type)}
              </View>
            </TouchableOpacity>
            <View style={{ flex: 1, paddingLeft: 5 }}>
              <TouchableOpacity onPress={() => this.viewMore(this.props.item)}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.title}>{this.props.item.Title}</Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      alignItems: 'center'
                    }}
                  >
                    <Text>
                      <Icon name="times" size={15} color="#DEDEDE" />
                    </Text>
                  </View>
                </View>
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
    color: theme.colorSubTitle,
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
