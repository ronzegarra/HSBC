import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import theme from '../../theme/theme';

export default class NewFavoriteItem extends Component {
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
            source={require('../../img/RecursosHSBC/Favorites/Cartera.png')}
            resizeMode={'cover'}
            style={{ marginTop: 4, height: 23, width: undefined }}
          />
        );
      case 'PRE':
        return (
          <Image
            source={require('../../img/RecursosHSBC/Favorites/prestamo.png')}
            resizeMode={'cover'}
            style={{ flex: 1, width: undefined }}
          />
        );
      case 'TC':
      case 'TP':
        return (
          <Image
            source={require('../../img/RecursosHSBC/Favorites/tarjeta.png')}
            resizeMode={'cover'}
            style={{ marginTop: 4, height: 23, width: undefined }}
          />
        );
      case 'PAY-T':
        return (
          <Image
            source={require('../../img/RecursosHSBC/Favorites/pagotarjeta.png')}
            resizeMode={'stretch'}
            style={{ paddingTop: 2, height: 28, width: undefined }}
          />
        );
      case 'PAY-P':
        return (
          <Image
            source={require('../../img/RecursosHSBC/Favorites/prestamo.png')}
            resizeMode={'stretch'}
            style={{ flex: 1, width: undefined }}
          />
        );
      case 'PAY-S':
        return (
          <Image
            source={require('../../img/RecursosHSBC/Favorites/servicio.png')}
            resizeMode={'stretch'}
            style={{ flex: 1, width: undefined }}
          />
        );
      case 'TR-CP':
        return (
          <Image
            source={require('../../img/RecursosHSBC/Favorites/t_propias.png')}
            resizeMode={'stretch'}
            style={{ marginTop: 4, height: 25, width: undefined }}
          />
        );
      case 'TR-T':
        return (
          <Image
            source={require('../../img/RecursosHSBC/Favorites/T_terceros.png')}
            resizeMode={'stretch'}
            style={{ flex: 1, width: undefined }}
          />
        );
      case 'TR-OB':
        return (
          <Image
            source={require('../../img/RecursosHSBC/Favorites/Sucursal.png')}
            resizeMode={'stretch'}
            style={{ marginTop: 4, height: 25, width: undefined }}
          />
        );

      case 'AP':
        return (
          <Image
            source={require('../../img/RecursosHSBC/Favorites/Pendientes.png')}
            resizeMode={'stretch'}
            style={{ flex: 1, width: undefined }}
          />
        );
      case 'S':
        return (
          <Image
            source={require('../../img/RecursosHSBC/Favorites/Sucursal.png')}
            resizeMode={'stretch'}
            style={{ marginTop: 4, height: 25, width: undefined }}
          />
        );
      case 'A':
        return (
          <Image
            source={require('../../img/RecursosHSBC/Favorites/Mensajes.png')}
            resizeMode={'stretch'}
            style={{ marginTop: 4, height: 25, width: undefined }}
          />
        );
      case 'C':
        return (
          <Image
            source={require('../../img/RecursosHSBC/Favorites/contactless.png')}
            resizeMode={'stretch'}
            style={{ flex: 1, width: undefined }}
          />
        );
    }
  }

  viewMore(item) {
    console.warn('++++++');
    //console.warn(item.cuentaAgendada);
    /*
    if (item.Type === 'CC')
      this.props.navigation.navigate('TransferenciasPropias_Segunda', {
        data: item.cuentaAgendada,
        lastItem: item.cuentaAgendada[item.cuentaAgendada.length - 1]
      });

    if (item.Type === 'CA')
      this.props.navigation.navigate('TransferenciasPropias_Segunda', {
        type: item.cuentaAgendada,
        lastItem: item.cuentaAgendada[item.cuentaAgendada.length - 1]
      });
    */
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
            <TouchableOpacity>
              <View style={{ width: 30, height: 30 }}>
                {this.renderImage(this.props.item.Type)}
              </View>
            </TouchableOpacity>
            <View style={{ flex: 1, paddingLeft: 5 }}>
              <TouchableOpacity>
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
    paddingTop: 5,
    paddingBottom: 5,
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
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent'
  }
});
