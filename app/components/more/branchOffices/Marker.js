/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//var Spinner = require('react-native-spinkit');

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  Linking,
  TouchableOpacity
} from 'react-native';
const isAndroid = Platform.OS === 'android';
const fuente = 'Helvetica';

import MapView, { Callout, Marker as MarkerMap } from 'react-native-maps';

import theme from '../../../theme/theme';
const markerImage = require('../../../img/RecursosHSBC/More/Filials/Pin/PinSucursales.png');

export default class Marker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMarker: false,
      timeOut: false
    };
    this.onPressMarker = this.onPressMarker.bind(this);
  }

  onPressMarker() {
    this.setState({ showMarker: !this.state.showMarker });
    this.props.onPressMarker(this.props.longlat);
    var self = this;
    if (!this.state.timeOut) {
      self.setState({ timeOut: true });
      setTimeout(function() {
        self.setState({ showMarker: false, timeOut: false });
      }, 10000);
    }
  }

  render() {
    return (
      <MarkerMap
        onPress={() => this.onPressMarker()}
        coordinate={{
          latitude: parseFloat(this.props.longlat[0]),
          longitude: parseFloat(this.props.longlat[1])
        }}
        image={markerImage}
      >
        <Callout
          onPress={() =>
            Linking.openURL(
              'https://www.google.com/maps/dir//' +
                this.props.data.Geolocalizacion +
                ''
            )
          }
        >
          <View
            style={{
              backgroundColor: '#FFFFFF',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5
            }}
          >
            <View
              style={{
                alignItems: 'center',
                alignSelf: 'stretch',
                padding: 5,
                borderWidth: 0.5,
                borderColor: 'transparent'
              }}
            >
              <Text style={{ fontSize: 10, fontWeight: 'bold' }}>
                {this.props.data.Nombre}
              </Text>
            </View>
            <View
              style={{
                padding: 5,
                flexDirection: 'column',
                alignItems: 'center',
                borderBottomColor: '#e2e2e2'
              }}
            >
              {this.props.data.Direccion.trim() == '' ? null : (
                <Text style={{ fontSize: 9 }}>
                  {this.props.data.Direccion.length > 60
                    ? this.props.data.Direccion.substring(0, 60) + '...'
                    : this.props.data.Direccion}
                </Text>
              )}
              {this.props.data.Telefono.trim() == '' ? null : (
                <Text style={{ fontSize: 9 }}>
                  <Image
                    source={require('../../../img/RecursosHSBC/More/Filials/old-handphone.png')}
                    resizeMode={'contain'}
                    style={styles.image}
                  />
                  <Text style={{ paddingLeft: 50 }}>
                    {' '}
                    {this.props.data.Telefono}{' '}
                  </Text>
                </Text>
              )}
              {this.props.data.Imagen.trim() == '' ? null : (
                <Text style={{ fontSize: 9 }}>
                  <Image
                    source={require('../../../img/RecursosHSBC/More/Filials/clock.png')}
                    resizeMode={'contain'}
                    style={styles.image}
                  />
                  <Text style={{ paddingLeft: 5, paddingRight: 5 }}> </Text>
                  <Text style={{ marginLeft: 20 }}>
                    {this.props.data.Imagen.length > 60
                      ? this.props.data.Imagen.substring(0, 60) + '...'
                      : this.props.data.Imagen}
                  </Text>
                </Text>
              )}
            </View>
            <View
              style={{
                alignItems: 'center',
                alignSelf: 'stretch',
                padding: 5,
                borderTopWidth: 0.5,
                borderTopColor: '#F2F2F1'
              }}
            >
              <Text style={{ fontSize: 10, color: theme.colorPrincipal }}>
                ¿Cómo llegar?
              </Text>
            </View>
          </View>
        </Callout>
      </MarkerMap>
    );
  }
}

const styles = StyleSheet.create({
  containerMarker: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 5,
    marginBottom: 400
  },

  image: {
    right: 10,
    top: 4,
    height: 17,
    width: 17
  }
});
