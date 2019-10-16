import React, { PureComponent, Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
  Image,
  ImageBackground,
  Text
} from 'react-native';

import theme from '../../theme/theme';
import Login from './Login';
import FirstLogin from './FirstLogin';

const font = 'Helvetica';
//const heightLogo=theme.smallDevice ? theme.heightLogo : theme.heightLogo
//const widthLogo=theme.smallDevice ? theme.widthLogo : theme.widthLogo

//const Spinner = require('react-native-spinkit');

export default class MasterLogin extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: 'Login',
      data: {},
      cargando: true,
      error: false
    };

    this.done = this.done.bind(this);
  }

  done(data) {
    this.setState({ step: data.Next, data: data });
  }

  doBottom() {
    //console.warn(theme.smallDevice)
    if (theme.smallDevice) {
      return {
        bottom: 80,
        flex: 1,
        width: theme.width
      };
    } else {
      return {
        bottom: 60,
        width: theme.width,

        flex: 1
      };
    }
  }

  renderSteps() {
    switch (this.state.step) {
      case 'Login':
        return (
          <Login
            navigation={this.props.navigation}
            done={data => this.done(data)}
            error={this.state.error}
          />
        );
        break;
      case 'FirstLogin':
        return (
          <FirstLogin
            navigation={this.props.navigation}
            done={data => this.done(data)}
          />
        );
        break;
    }
  }

  render() {
    const CargandoView = null;

    return (
      <View style={styles.containerImage}>
        {this.state.step == 'Loading' ? (
          <CargandoView />
        ) : (
          <View style={styles.container}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Image
                source={require('../../img/RecursosHSBC/Login/logohsbc.png')}
                resizeMode={'stretch'}
                style={styles.logo}
              />
            </View>
            {this.renderSteps()}
            <View
              style={{
                flex: 1.2,
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingTop: 15
              }}
            >
              <TouchableOpacity
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginBottom: 30,
                  marginTop: 2
                }}
              >
                <View style={styles.line} />
                <View style={{top: -2}}>
                  <Text style={styles.textVerySmall}>
                    ¿OLVIDASTE TU CONTRASEÑA?
                  </Text>
                </View>
                <View style={styles.line} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  marginBottom: 5,
                  justifyContent: 'center'
                }}
              >
                <View style={styles.iconSmall}>
                  <Image
                    source={require('../../img/RecursosHSBC/Login/pin.png')}
                    resizeMode={'contain'}
                    style={{ flex: 1, width: undefined }}
                  />
                </View>
                <Text
                  style={[styles.textNormal, { marginLeft: 5, paddingTop: 2 }]}
                >
                  Encontrar una sucursal cerca
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }

  // {this.state.cargando  ? <CargandoView/>:null}
}

const styles = StyleSheet.create({
  containerImage: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#FFFFFF'
  },

  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 50
  },

  logo: {
    //height: theme.heightLogo,
    //width: theme.widthLogo
    height: theme.heightLogo,
    width: theme.widthLogo
  },
  buttonImage: {
    width: 25,
    height: 25,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignSelf: 'center'
  },

  line: {
    top: 5,
    flex: 1,
    borderWidth: 1,
    borderColor: 'transparent',
    borderTopColor: '#A3A3A3',
    marginLeft: 10,
    marginRight: 10
  },

  textNormal: {
    color: '#A3A3A3',
    fontSize: theme.txtNormal
  },
  icon: {
    width: 40,
    height: 40
  },
  iconSmall: {
    width: 25,
    height: 25
  },
  textVerySmall: {
    color: '#A3A3A3',
    fontSize: theme.txtVerySmall
  }
});
