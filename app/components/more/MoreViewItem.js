import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import theme from '../../theme/theme';

export default class MoreViewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.renderMenus = this.renderMenus.bind(this);
    this.chooseOption = this.chooseOption.bind(this);
  }

  chooseOption(id) {
    switch (id) {
      case 1:
        return this.props.navigation.navigate('Operaciones_Pendientes');
      case 2:
        return this.props.navigation.navigate('Chequera_Primera');
      case 3:
        return this.props.navigation.navigate('Sucursales');
      case 4:
        return this.props.navigation.navigate('Contactless');
      case 5:
        return null;
      case 6:
        return this.props.navigation.navigate('Datos_Personales');
      case 7:
        return this.props.navigation.navigate('Cambiar_Perfil');
      case 8:
        return this.props.callPhone();
      case 9:
        return this.props.navigation.navigate('Mensaje_Banco');
    }
  }

  renderMenus(item) {
    return (
      <View>
        <View>
          {item.item.Id == 6 ? (
            <Text style={{ color: theme.colorPrincipal }} >
              OPCIONES PERSONALES
            </Text>
          ) : null}
        </View>
        <TouchableOpacity
          style={[
            item.item.Id === 5 || item.item.Id === 9
              ? styles.rowMenuNoBorder
              : styles.rowMenu
          ]}
          onPress={() => this.chooseOption(item.item.Id)}
        >
          <View style={styles.icon}>
            {item.item.Id == 1 ? (
              <Image
                source={require('../../img/RecursosHSBC/More/Pendientes.png')}
                resizeMode={'contain'}
                style={{ flex: 1, width: undefined }}
              />
            ) : null}

            {item.item.Id == 2 ? (
              <Image
                source={require('../../img/RecursosHSBC/More/Cheque.png')}
                resizeMode={'contain'}
                style={{ flex: 1, width: undefined }}
              />
            ) : null}
            {item.item.Id == 3 ? (
              <Image
                source={require('../../img/RecursosHSBC/More/Sucursal.png')}
                resizeMode={'contain'}
                style={{ flex: 1, width: undefined }}
              />
            ) : null}
            {item.item.Id == 4 ? (
              <Image
                source={require('../../img/RecursosHSBC/More/contactless.png')}
                resizeMode={'contain'}
                style={{ flex: 1, width: undefined }}
              />
            ) : null}

            {item.item.Id == 5 ? (
              <Image
                source={require('../../img/RecursosHSBC/More/add.png')}
                resizeMode={'contain'}
                style={{ flex: 1, width: undefined }}
              />
            ) : null}
            {item.item.Id == 6 ? (
              <Image
                source={require('../../img/RecursosHSBC/More/DatosPersonales.png')}
                resizeMode={'contain'}
                style={{ flex: 1, width: undefined }}
              />
            ) : null}
            {item.item.Id == 7 ? (
              <Image
                source={require('../../img/RecursosHSBC/More/CambioPerfil.png')}
                resizeMode={'contain'}
                style={{ flex: 1, width: undefined }}
              />
            ) : null}
            {item.item.Id == 8 ? (
              <Image
                source={require('../../img/RecursosHSBC/More/CallCenter.png')}
                resizeMode={'contain'}
                style={{ flex: 1, width: undefined }}
              />
            ) : null}
            {item.item.Id == 9 ? (
              <Image
                source={require('../../img/RecursosHSBC/More/Mensajes.png')}
                resizeMode={'contain'}
                style={{ flex: 1, width: undefined }}
              />
            ) : null}
          </View>
          <Text style={styles.descMenu}>{item.item.Desc}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  render() {
    return this.renderMenus(this.props.item);
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },

  header: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'space-between'
  },

  headerBar: {
    flex: 1,
    flexDirection: 'row',
    padding: 10
  },

  rowMenu: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 0.5,
    borderBottomColor: '#cdcdcd',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent'
  },

  rowMenuNoBorder: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 0.5,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent'
  },

  descMenu: {
    fontSize: theme.txtNormal,
    color: 'black',
    marginLeft: 10
  },

  icon: {
    width: 20,
    height: 20
  },

  imgUser: {
    height: theme.smallDevice ? 70 : 90,
    width: theme.smallDevice ? 70 : 90,
    borderRadius: 100
  },

  iconHeader: {
    width: 20,
    height: 20
  }
});
