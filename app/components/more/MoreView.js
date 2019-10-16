import React, { Component, PureComponent } from 'react';

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import call from 'react-native-phone-call';

import theme from '../../theme/theme';

import MoreViewItem from './MoreViewItem';

import { NavigationActions } from 'react-navigation';

/*const resetToHome = NavigationActions.reset({
  index: 0,
  key: null,
  actions: [NavigationActions.navigate({ routeName: 'Public' })]
});
*/

export default class MoreView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [
        { Id: 1, Desc: 'Pendientes' },
        { Id: 2, Desc: 'Chequeras' },
        { Id: 3, Desc: 'Sucursales y ATMs' },
        { Id: 4, Desc: 'Contactless' },
        { Id: 5, Desc: 'Solicitar' },
        { Id: 6, Desc: 'Mis datos personales' },
        { Id: 7, Desc: 'Cambio de Perfil' },
        { Id: 8, Desc: 'Llamar al Call Center' },
        { Id: 9, Desc: 'Mensaje al Banco' }
      ]
    };
    this.renderMenus = this.renderMenus.bind(this);
    this.callPhone = this.callPhone.bind(this);

    this.logout = this.logout.bind(this);
    this.changeLoginMethod = this.changeLoginMethod.bind(this);
  }

  logout() {
    this.props.navigation.navigate('Welcome');
  }

  changeLoginMethod() {
    this.props.navigation.navigate('Metodo_Login');
  }

  callPhone() {
    let phone = '08007872';
    const args = {
      number: phone, // String value with the number to call
      prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
    };
    call(args).catch(console.error);
  }

  renderMenus(item) {
    return (
      <MoreViewItem
        item={item}
        navigation={this.props.navigation}
        callPhone={this.callPhone}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} >
          <ImageBackground
            style={styles.headerBar}
            source={require('../../img/RecursosHSBC/More/fotofondo.png')}
          >
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={styles.iconHeader}
                onPress={this.changeLoginMethod}
              >
                <Image
                  source={require('../../img/RecursosHSBC/More/opcioneslogin.png')}
                  resizeMode={'contain'}
                  style={{ flex: 1, width: undefined }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text style={{ color: '#FFFFFF' }}>Más Opciones</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <TouchableOpacity style={styles.iconHeader} onPress={this.logout}>
                <Image
                  source={require('../../img/RecursosHSBC/More/logout.png')}
                  resizeMode={'contain'}
                  style={{ flex: 1, width: undefined }}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            position: 'absolute',
            zIndex: 10,
            top: theme.smallDevice ? 50 : 60,
            alignSelf: 'center',
            alignItems: 'center'
          }}
        >
          <View
            style={{
              borderRadius: 100,
              borderWidth: 5,
              borderColor: '#D5D5D5'
            }}
          >
            <Image
              source={require('../../img/RecursosHSBC/More/FotoUsuario.png')}
              style={styles.imgUser}
            />
          </View>

          <View
            style={{
              position: 'absolute',
              zIndex: 99,
              top: 65,
              paddingLeft: 60
            }}
          >
            <Image
              source={require('../../img/RecursosHSBC/More/photoCamera.png')}
              style={{ height: 30, width: 30 }}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                fontSize: theme.txtSmall,
                fontWeight: 'bold',
                color: 'black'
              }}
            >
              Alfredo Batista
            </Text>
            <Text style={{ fontSize: theme.txtVerySmall, color: 'black' }}>
              Último acceso 27/03/2018 12:45
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column', flex: 3, paddingTop: 80 }}>
          <FlatList
            data={this.state.menus}
            style={{ paddingLeft: 10, paddingRight: 10 }}
            renderItem={this.renderMenus}
            //keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
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
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: '#DC1726'
  },

  iconHeader: {
    width: 20,
    height: 20
  }
});
