import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  View,
  Dimensions
} from 'react-native';

import Geolocation from '@react-native-community/geolocation';

import MapView, { AnimatedRegion } from 'react-native-maps';
import theme from '../../../theme/theme';
import Marker from './Marker';

var { width, height } = Dimensions.get('window');

const LATITUDE_DELTA = 0.01;
const ASPECT_RATIO = width / height;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Sucursales = [
  {
    Nombre: 'EXTENSION DE CAJA OFICINA CENTRO FINANCIERO CHEVYPLAN',
    Imagen: 'L-V 10:00 a.m. - 6:00 p.m.',
    Distancia: '0.060',
    Direccion: 'Carrera 7 # 75 - 26 Piso 2',
    Ciudad: '',
    Email: '',
    Provincia: '',
    Telefono: '6286820 Ext 2213',
    Categoria: '',
    Pais: '',
    Geolocalizacion: '-16.397587,-71.547026',
    Codigo: '1'
  },
  {
    Nombre: 'OFICINA SATELITE EMBAJADA BRITANICA  S.A',
    Imagen:
      'L-J 8:30 a.m. - 1:30 p.m. y 2:30 p.m. - 4:00 p.m.V 8:30 a.m. - 12:00 p.m.',
    Distancia: '0.220',
    Direccion: 'Carrera 9 # 76 - 49 Piso 8',
    Ciudad: '',
    Email: '',
    Provincia: '',
    Telefono: '3268312',
    Categoria: '',
    Pais: '',
    Geolocalizacion: '-16.3977391,-71.5575586',
    Codigo: '1'
  },
  {
    Nombre: 'OFICINA CASTILLO',
    Imagen: 'L-V 8:00 a.m. - 4:00 p.m.',
    Distancia: '0.337',
    Direccion: 'Carrera 7 # 72 - 74 Local 4',
    Ciudad: '',
    Email: '',
    Provincia: '',
    Telefono: '2100720',
    Categoria: '',
    Pais: '',
    Geolocalizacion: '-16.4233253,-71.54664917',
    Codigo: '1'
  }
];

export default class BranchOffices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialRender: true,
      position: { longitude: 0, latitude: 0 },

      coordinate: new AnimatedRegion({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      }),
      myubication: { latitude: 0, longitude: 0 },
      cargando: false,
      error: false,
      sucursales: [],
      sucursal: ''
    };

    this.zoomIn = this.zoomIn.bind(this);
    //this.calculate = this.calculate.bind(this);
    this.onRegionChange = this.onRegionChange.bind(this);
    //this.loadOffices = this.loadOffices.bind(this);
  }

  componentWillMount() {
    this.setState({ cargando: true });

    this.setState({ sucursales: Sucursales });

    Geolocation.getCurrentPosition(
      position => {
        console.warn('zoomIn ', LATITUDE_DELTA, LONGITUDE_DELTA);

        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          },
          myubication: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }
        });

        let data = {
          //Categoria: 0,
          Latitud: position.coords.latitude,
          Longitud: position.coords.longitude
        };
        //this.props.actions.getBranchsOfficesConfirm(data);
      },
      error => {
        Alert.alert(
          'Mensaje',
          'No hemos podido localizar su ubicación, asegurese de tener encendido el GPS',
          [{ text: 'Aceptar' }]
        );
        this.setState({ cargando: false });
      },
      { enableHighAccuracy: false, timeout: 10000 }
    );

    this.watchID = Geolocation.watchPosition(position => {
      const newRegion = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      };

      this.onRegionChange(newRegion);
    });
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  zoomIn(longlat) {
    if (longlat[0] === 0 && longlat[1] === 0) return;

    let region = {
      latitude: parseFloat(longlat[0]),
      longitude: parseFloat(longlat[1]),
      latitudeDelta: 0.5,
      longitudeDelta: 0.5 * (width / height) //<------------- Here!
    };
    this.onRegionChange(region);
    if(this._map)
      this._map.animateToRegion(region, 1000);
  
  }

  renderMarkers() {
    var self = this;

    return this.state.sucursales.map(function(sucursal, i) {
      // @ts-ignore
      let longlat = sucursal.Geolocalizacion.split(',');
      if (longlat.length == 2) {
        return (
          <Marker
            key={i}
            onPressMarker={longlat => self.zoomIn(longlat)}
            longlat={longlat}
            data={sucursal}
          />
        );
      }
    });
  }

  /*
  loadOffices(sucursal) {
    console.warn('loadOffices');
    console.warn(sucursal);

    if (sucursal == '') this.setState({ sucursal: sucursal });
    else {
      this.setState({
        sucursal: sucursal,
        cargando: true
      });
      console.warn(this.state.myubication.latitude, this.state.myubication.longitude);
      let data = {
        Latitud: this.state.myubication.latitude,
        Longitud: this.state.myubication.longitude
      };

      this.props.actions.getBranchsOfficesConfirm(data);
    }
  }
  */

  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={component => {
            this._map = component;
          }}
          style={styles.map}
          showsUserLocation={true}
          showsMyLocationButton={true}
          onRegionChange={this.onRegionChange}
          initialRegion={this.state.region}
        >
          {this.renderMarkers()}
        </MapView>

        <View
          style={{
            flex: 1,
            width: '100%',
            backgroundColor: '#FFFFFF',
            position: 'absolute',
            top: 0
          }}
        >
          <View style={{ flex: 1, width: '100%' }}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                paddingTop: theme.margin,
                paddingBottom: 5,
                justifyContent: 'space-between',
                alignSelf: 'stretch',
                borderWidth: 0.5,
                borderBottomColor: '#cdcdcd',
                borderTopColor: 'transparent',
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent'
              }}
            >
              <View
                style={[
                  styles.borderRight,
                  { height: 37, left: 0, zIndex: 9999, width: '25%' }
                ]}
              >
                <View>
                  <TouchableOpacity
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                  >
                    <View style={styles.icon}>
                      <Image
                        source={require('../../../img/RecursosHSBC/More/Filials/Express.png')}
                        resizeMode={'contain'}
                        style={{ flex: 1, width: undefined }}
                      />
                    </View>
                    <Text style={styles.textIcon}>Cerca de ti</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={[
                  styles.borderRight,
                  { height: 37, left: 0, zIndex: 9999, width: '25%' }
                ]}
              >
                <View>
                  <TouchableOpacity
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                  >
                    <View style={styles.icon}>
                      <Image
                        source={require('../../../img/RecursosHSBC/More/Filials/ATM.png')}
                        resizeMode={'contain'}
                        style={{ flex: 1, width: undefined }}
                      />
                    </View>
                    <Text style={styles.textIcon}>ATM</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={[
                  styles.borderRight,
                  { height: 37, left: 0, zIndex: 9999, width: '25%' }
                ]}
              >
                <View>
                  <TouchableOpacity
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                  >
                    <View style={styles.icon}>
                      <Image
                        source={require('../../../img/RecursosHSBC/More/Filials/Sucursal.png')}
                        resizeMode={'contain'}
                        style={{ flex: 1, width: undefined }}
                      />
                    </View>
                    <Text style={[styles.textIcon, { color: theme.colorPrincipal }]}>
                      Sucursales
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ height: 37, left: 0, zIndex: 9999, width: '25%' }}>
                <View>
                  <TouchableOpacity
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                  >
                    <View style={styles.icon}>
                      <Image
                        source={require('../../../img/RecursosHSBC/More/Filials/Lista.png')}
                        resizeMode={'contain'}
                        style={{ flex: 1, width: undefined }}
                      />
                    </View>
                    <Text style={styles.textIcon}>Mapa</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 5,
                marginTop: 5
              }}
            >
              <View
                style={{
                  backgroundColor: theme.colorInputBackground,
                  height: 28,
                  justifyContent: 'center',
                  paddingLeft: 10,
                  borderBottomLeftRadius: 2,
                  borderTopLeftRadius: 2
                }}
              >
                <Image
                  source={require('../../../img/RecursosHSBC/More/Filials/Buscar.png')}
                  resizeMode={'contain'}
                  style={{ height: 15, width: 15 }}
                />
              </View>

              <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                <View
                  style={[styles.viewInputText, { height: 28, width: 300 }]}
                >
                  <TextInput
                    keyboardType={'numeric'}
                    underlineColorAndroid={'transparent'}
                    style={[{ height: 28, paddingBottom: 4 }]}
                  >
                    {' '}
                  </TextInput>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 2,
            justifyContent: 'flex-end',
            paddingLeft: 100,
            right: 0,
            paddingRight: 15,
            paddingBottom: 10
          }}
        >
          <View>
            <TouchableOpacity
              onPress={() =>
                this.zoomIn([
                  this.state.myubication.latitude,
                  this.state.myubication.longitude
                ])
              }
            >
              <Image
                source={require('../../../img/RecursosHSBC/More/Filials/MiUbicacion.png')}
                resizeMode={'contain'}
                style={{ height: 40, width: 40 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    bottom: 0
  },

  marker: {
    width: 10,
    height: 10
  },

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    alignItems: 'center'
  },

  header: {
    backgroundColor: theme.colorHeader,
    position: 'absolute',
    width: theme.width,
    top: 0,
    left: 0,
    zIndex: 9999
  },

  title: {
    marginVertical: 16,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24
  },

  account: {
    color: '#FFFFFF',
    fontSize: theme.txtSmall
  },

  ammount: {
    color: '#FFFFFF',
    fontSize: theme.txtBig
  },

  viewInputText: {
    width: theme.widthInput,
    backgroundColor: theme.colorInputBackground,
    borderBottomRightRadius: 2,
    borderTopRightRadius: 2,
    height: 28
  },

  options: {
    paddingTop: theme.margin,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    borderWidth: 0.5,
    borderBottomColor: '#cdcdcd',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent'
  },

  columnImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },

  icon: {
    width: 25,
    height: 25
  },

  textIcon: {
    fontSize: 9,
    color: 'black'
  },

  borderRight: {
    borderWidth: 0.5,
    borderRightColor: '#cdcdcd',
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent'
  },

  textOptions: {
    color: 'black',
    fontSize: theme.txtSmall
  },

  movement: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 5,
    borderWidth: 0.5,
    borderBottomColor: '#cdcdcd',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent'
  },

  rowDataProduct: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 25,
    paddingBottom: 5,
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderBottomColor: '#cdcdcd',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent'
  },

  titleMov: {
    color: 'black',
    fontWeight: '600',
    fontSize: theme.txtNormal
  },

  dateMov: {
    fontSize: theme.txtSmall
  },

  ammountMov: {
    color: '#FD131C',
    fontSize: theme.txtNormal
  },

  dataProduct: {
    color: 'black',
    fontSize: 12
  },

  containerModal: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },

  modal: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    zIndex: 0,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },

  cancelBoton: {
    backgroundColor: theme.colorCancelBoton,
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#787878',
    borderRadius: 4,
    height: 28,
    width: 115
  },

  nextBoton: {
    backgroundColor: theme.colorNextBoton,
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0574AF',
    borderRadius: 4,
    height: 28,
    width: 115
  }
});
