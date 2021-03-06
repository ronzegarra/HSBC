import React, { PureComponent } from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated
} from 'react-native';

import {
  Path,
  Defs,
  LinearGradient,
  Stop,
  Circle,
  G,
  Rect,
  Text as TextSvg
} from 'react-native-svg';
import { AreaChart, Grid, XAxis } from 'react-native-svg-charts';
import { LineChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape';
import * as scale from 'd3-scale'

import Icon from 'react-native-vector-icons/FontAwesome';

import theme from '../../theme/theme';

import ProductModal from './ProductModal';
import ProductModalSearch from './ProductModalSearch';
import dateFns from 'date-fns';
import esLocale from 'date-fns/locale/es';

//const HEADER_EXPANDED_HEIGHT = 180;
//const HEADER_COLLAPSED_HEIGHT = 45;

const HEADER_EXPANDED_HEIGHT = 230;
const HEADER_COLLAPSED_HEIGHT = 45;

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class ProductMov extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
      data: this.props.navigation.state.params,
      enableTootip: false,
      movements: [
        {
          Referencia: 'Campeon del Siglo',
          Fecha: '28/09/1891',
          Importe: '$ 94.887,20'
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20'
        },
        { Referencia: 'Uber', Fecha: '28/02/2018', Importe: '$ 94.887,20' },
        {
          Referencia: 'Pago Tarjeta',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20'
        },
        {
          Referencia: 'Claro - Pago de servicio',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20'
        },
        { Referencia: 'KFC', Fecha: '28/02/2018', Importe: '$ 94.887,20' },
        { Referencia: 'KFC', Fecha: '28/02/2018', Importe: '$ 94.887,20' },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20'
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20'
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20'
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20'
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20'
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20'
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20'
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20'
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20'
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20'
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20'
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20'
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20'
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20'
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20'
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20'
        },
        { Referencia: 'Spotify', Fecha: '28/02/2018', Importe: '$ 94.887,20' }
      ],
      productDetail: {
        Sucursal: 'Casa Central',
        NroCuenta: '300053',
        Moneda: '$',
        SIPAP: '0002000000000300053',
        Disponible: '1.747.244.455,00'
      },
      productData: false,
      movement: true,
      modal: false,
      modalTitle: '',
      modalSearch: false
    };

    this.renderMovements = this.renderMovements.bind(this);
    this.renderProductData = this.renderProductData.bind(this);
    this.showMovement = this.showMovement.bind(this);
    this.showDataProduct = this.showDataProduct.bind(this);

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.showModalSearch = this.showModalSearch.bind(this);
    this.closeModalSearch = this.closeModalSearch.bind(this);

    this.goCheckbooks = this.goCheckbooks.bind(this);
    this.goTransferences = this.goTransferences.bind(this);

  }

  showDataProduct() {
    this.setState({ productData: true });
    this.setState({ movement: false });
  }

  showMovement() {
    this.setState({ movement: true });
    this.setState({ productData: false });
  }

  showModal(title) {
    this.setState({ modal: true });
    this.setState({ modalTitle: title });
  }

  closeModal() {
    this.setState({ modal: false });
  }

  showModalSearch() {
    this.setState({ modalSearch: true });
  }

  closeModalSearch() {
    this.setState({ modalSearch: false });
  }

  goCheckbooks() {
    this.props.navigation.navigate('Chequera_Segunda');
  }

  goTransferences() {
    this.props.navigation.navigate('TransferenciasPropias_Tercera', {
      amount: 0});
  }

  renderMovements() {
    var self = this;
    return this.state.movements.map(function(movement, i) {
      return (
        <View key={i} style={styles.movement}>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row'
              //justifyContent: 'space-between'
            }}
            onPress={() => self.showModal(movement.Referencia)}
          >
            <View style={{ flexDirection: 'column', flex: 3 }}>
              <Text style={styles.titleMov}>{movement.Referencia}</Text>
              <Text style={styles.dateMov}>{movement.Fecha}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 2,
                justifyContent: 'flex-end',
                paddingTop: 10
              }}
            >
              <Text style={[styles.ammountMov, { paddingRight: 20 }]}>
                $ 94.887,20
              </Text>
              <Text>
                <Icon name="angle-right" size={20} color="#cdcdcd" />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    });
  }

  renderProductData() {
    var self = this;
    return (
      <View style={{ flexDirection: 'column', paddingTop: 15 }}>
        <View style={styles.rowDataProduct}>
          <View style={{ flexDirection: 'column', flex: 3 }}>
            <Text style={styles.titleMov}>Sucursal Cuenta</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 2,
              justifyContent: 'flex-end'
            }}
          >
            <Text style={styles.dataProduct}>
              {this.state.productDetail.Sucursal}
            </Text>
          </View>
        </View>
        <View style={styles.rowDataProduct}>
          <View style={{ flexDirection: 'column', flex: 3 }}>
            <Text style={styles.titleMov}>Nro Cuenta</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 2,
              justifyContent: 'flex-end'
            }}
          >
            <Text style={styles.dataProduct}>
              {this.state.productDetail.NroCuenta}
            </Text>
          </View>
        </View>
        <View style={styles.rowDataProduct}>
          <View style={{ flexDirection: 'column', flex: 3 }}>
            <Text style={styles.titleMov}>Moneda</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 2,
              justifyContent: 'flex-end'
            }}
          >
            <Text style={styles.dataProduct}>
              {this.state.productDetail.Moneda}
            </Text>
          </View>
        </View>
        <View style={styles.rowDataProduct}>
          <View style={{ flexDirection: 'column', flex: 3 }}>
            <Text style={styles.titleMov}>Cuenta SIPAP</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 2,
              justifyContent: 'flex-end'
            }}
          >
            <Text style={styles.dataProduct}>
              {this.state.productDetail.SIPAP}
            </Text>
          </View>
        </View>
        <View style={styles.rowDataProduct}>
          <View style={{ flexDirection: 'column', flex: 3 }}>
            <Text style={styles.titleMov}>Disponible</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 2,
              justifyContent: 'flex-end'
            }}
          >
            <Text style={styles.dataProduct}>
              {this.state.productDetail.Disponible}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  toogleTootip = () => {
    this.setState({enableTootip: !this.state.enableTootip});
  }

  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
      extrapolate: 'clamp'
    });
    const headerTitleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });
    const heroTitleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });

    const headerTitle = 'HEADER';

    // @ts-ignore
    const Gradient = ({ index }) => (
      <Defs key={index}>
        <LinearGradient id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
          <Stop offset={'0%'} stopColor={'rgb(224, 32, 48)'} stopOpacity={0.8}/>
          <Stop offset={'100%'} stopColor={'rgb(224, 224, 224)'} stopOpacity={0.2}/>
      </LinearGradient>
      </Defs>
    )

    const Line = ({ line }) => (
      <Path
        key={'line'}
        d={line}
        stroke={'rgb(224, 32, 48)'}
        fill={'none'}
        strokeWidth={2}
      />
    )

    const data2 = [
      {
        value: 50,
        date: new Date(2018, 1, 1)
      },
      {
        value: 10,
        date: new Date(2018, 2, 1)
      },
      {
        value: 30,
        date: new Date(2018, 3, 1)
      },
      {
        value: 80,
        date: new Date(2018, 4, 1)
      },
      {
        value: 60,
        date: new Date(2018, 5, 1)
      },
      {
        value: 80,
        date: new Date(2018, 6, 1)
      },
    ]


    const Tooltip = ({ x, y }) => {
      return (
        <G key={ 'tooltip' } >
          {
            data2.map(data => {
              return (
                <G >
                  <TextSvg
                    x={ x(data.date)}
                    dy={ y(data.value) - 13}
                    alignmentBaseline={ 'middle' }
                    textAnchor={ 'middle' }
                    stroke={ 'rgb(224, 32, 48)' }
                  >
                    { data.value }
                  </TextSvg>
                  <Circle
                    cy={ y(data.value) }
                    x={ x(data.date)}
                    r={ 5 }
                    stroke={ 'rgb(224, 32, 48)' }
                    strokeWidth={ 2 }
                    fill={ 'white' }
                  />
                </G>
              )
            })
          }
        </G>
      )
    }

    let header;
    let body;

    switch (this.state.data.type) {
      case 'CC':
        header = (
          <View style={{ padding: theme.margin, flexDirection: 'row' }}>
            <View style={{ width: '100%' }} >
              <TouchableOpacity onPress={this.toogleTootip}>
                <AreaChart
                  style={{ height: 100, width: '100%' }}
                  data={data2}
                  yAccessor={ ({ item }) => item.value }
                  xAccessor={ ({ item }) => item.date.getTime() }
                  contentInset={{ top: 40, bottom: 10, left: 10, right: 10 }}
                  curve={shape.curveNatural}
                  svg={{ fill: 'url(#gradient)' }}
                >
                  {
                    // @ts-ignore
                    <Gradient  />
                  }

                  {
                    // @ts-ignore
                    <Line />
                  }
                  {
                    this.state.enableTootip && (
                      // @ts-ignore
                      <Tooltip/>
                    )
                  }
                </AreaChart>

                <XAxis
                  data={ data2 }
                  svg={{
                    fill: 'black',
                    fontSize: 8,
                    fontWeight: 'bold',
                    originY: 30,
                    y: 5,
                  }}
                  xAccessor={ ({ item }) => item.date }
                  style={{ marginHorizontal: -15, height: 20 }}
                  contentInset={{ left: 30, right: 30 }}
                  formatLabel={ (value) => capitalizeFirstLetter(dateFns.format(value, 'MMMM', {locale: esLocale})) }
                />
              </TouchableOpacity>
            </View>
          </View>
        );
        body = (
          <View
            style={{
              flex: 1,
              width: '100%',
              backgroundColor: '#FFFFFF',
              position: 'absolute',
              bottom: 0
            }}
          >
            <View
              style={{
                flex: 1,

                paddingLeft: theme.margin,
                paddingRight: theme.margin,
                bottom: 0,
                width: '100%'
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  paddingTop: 5,
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
                    {
                      height: 38,
                      left: 0,
                      zIndex: 9999,
                      width: '33%'
                    }
                  ]}
                >
                  <View>
                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <View style={styles.icon}>
                        <Image
                          source={require('../../img/RecursosHSBC/Products/pagar.png')}
                          resizeMode={'stretch'}
                          style={{ flex: 1, width: undefined }}
                        />
                      </View>
                      <Text style={styles.textIcon}>Pagar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={[
                    styles.borderRight,
                    {
                      height: 35,
                      left: 0,
                      zIndex: 9999,
                      width: '33%'
                    }
                  ]}
                >
                  <View>
                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                      onPress = {()=>this.goCheckbooks()}
                    >
                      <View style={styles.icon}>
                        <Image
                          source={require('../../img/RecursosHSBC/Products/chequera.png')}
                          resizeMode={'contain'}
                          style={{ flex: 1, width: undefined }}
                        />
                      </View>
                      <Text style={styles.textIcon}>Chequera</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    height: 35,
                    left: 0,
                    zIndex: 9999,
                    width: '33%'
                  }}
                >
                  <View>
                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                      onPress={()=>this.goTransferences()}
                    >
                      <View style={styles.icon}>
                        <Image
                          source={require('../../img/RecursosHSBC/TabBar/Transferir.png')}
                          resizeMode={'contain'}
                          style={{ flex: 1, width: undefined }}
                        />
                      </View>
                      <Text style={styles.textIcon}>Transferir</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )
        break;

      case 'CA':
        header = (
          <View style={{ padding: theme.margin, flexDirection: 'row' }}>
            <View style={{ width: '100%' }} >
              <TouchableOpacity onPress={this.toogleTootip}>
                <AreaChart
                  style={{ height: 100, width: '100%' }}
                  data={data2}
                  yAccessor={ ({ item }) => item.value }
                  xAccessor={ ({ item }) => item.date.getTime() }
                  contentInset={{ top: 40, bottom: 10, left: 10, right: 10 }}
                  curve={shape.curveNatural}
                  svg={{ fill: 'url(#gradient)' }}
                >
                  {
                    // @ts-ignore
                    <Gradient  />
                  }
                  {
                    // @ts-ignore
                    <Line />
                  }
                  {
                    this.state.enableTootip && (
                      // @ts-ignore
                      <Tooltip/>
                    )
                  }
                </AreaChart>

                <XAxis
                  data={ data2 }
                  svg={{
                    fill: 'black',
                    fontSize: 8,
                    fontWeight: 'bold',
                    originY: 30,
                    y: 5,
                  }}
                  xAccessor={ ({ item }) => item.date.getTime() }
                  style={{ marginHorizontal: -15, height: 20 }}
                  contentInset={{ left: 30, right: 30 }}
                  formatLabel={ (value) => capitalizeFirstLetter(dateFns.format(value, 'MMMM', {locale: esLocale})) }
                />
              </TouchableOpacity>
            </View>
          </View>
        );
        body = (
          <View
            style={{
              flex: 1,
              width: '100%',
              backgroundColor: '#FFFFFF',
              position: 'absolute',
              bottom: 0
            }}
          >
            <View
              style={{
                flex: 1,

                paddingLeft: theme.margin,
                paddingRight: theme.margin,
                bottom: 0,
                width: '100%'
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  paddingTop: 5,
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
                    {
                      height: 38,
                      left: 0,
                      zIndex: 9999,
                      width: '50%'
                    }
                  ]}
                >
                  <View>
                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <View style={styles.icon}>
                        <Image
                          source={require('../../img/RecursosHSBC/Products/pagar.png')}
                          resizeMode={'stretch'}
                          style={{ flex: 1, width: undefined }}
                        />
                      </View>
                      <Text style={styles.textIcon}>Pagar</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    height: 35,
                    left: 0,
                    zIndex: 9999,
                    width: '50%'
                  }}
                >
                  <View>
                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <View style={styles.icon}>
                        <Image
                          source={require('../../img/RecursosHSBC/TabBar/Transferir.png')}
                          resizeMode={'contain'}
                          style={{ flex: 1, width: undefined }}
                        />
                      </View>
                      <Text style={styles.textIcon}>Transferir</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )
        break;
      default:
        header = (
          <View style={{ padding: theme.margin }}>
            <View style={{ width: 120, height: 120 }}>
              <Image
                source={require('../../img/RecursosHSBC/Products/safebox.png')}
                resizeMode={'contain'}
                style={{ flex: 1, width: undefined }}
              />
            </View>
          </View>
        );
        body = (
          <View
            style={{
              flex: 1,
              width: '100%',
              backgroundColor: '#FFFFFF',
              position: 'absolute',
              bottom: 0
            }}
          >
            <View
              style={{
                flex: 1,

                paddingLeft: theme.margin,
                paddingRight: theme.margin,
                bottom: 0,
                width: '100%'
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  paddingTop: 5,
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
                    {
                      height: 38,
                      left: 0,
                      zIndex: 9999,
                      width: '50%'
                    }
                  ]}
                >
                  <View>
                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <View style={styles.icon}>
                        <Image
                          source={require('../../img/RecursosHSBC/Products/payCoin.png')}
                          resizeMode={'contain'}
                          style={{ flex: 1, width: undefined }}
                        />
                      </View>
                      <Text style={styles.textIcon}>Pagar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    height: 35,
                    left: 0,
                    zIndex: 9999,
                    width: '50%'
                  }}
                >
                  <View>
                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <View style={styles.icon}>
                        <Image
                          source={require('../../img/RecursosHSBC/Products/Transferir.png')}
                          resizeMode={'contain'}
                          style={{ flex: 1, width: undefined }}
                        />
                      </View>
                      <Text style={styles.textIcon}>Transferir</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )
        break;
    }


    return (
      <View style={styles.container}>
        <Animated.View style={[styles.header, { height: headerHeight }]}>
          <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.account}>CC-USD - 300053</Text>
            <Text style={styles.ammount}>$ 43.054.995,00</Text>
          </View>
          <Animated.View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              opacity: heroTitleOpacity
            }}
          >
            { header }
          </Animated.View>

          { body }
        </Animated.View>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: this.state.scrollY
                }
              }
            }
          ])}
          scrollEventThrottle={16}
        >
          <View
            style={{
              flex: 1,
              paddingLeft: theme.margin,
              paddingRight: theme.margin
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 10,
                paddingBottom: 5,
                width: '100%'
              }}
            >
              <TouchableOpacity
                style={{ width: '30%' }}
                onPress={() => this.showMovement()}
              >
                <View>
                  {this.state.movement ? (
                    <View
                      style={{
                        borderBottomColor: '#e02030',
                        borderBottomWidth: 2
                      }}
                    >
                      <Text style={{ fontWeight: '600', color: 'black', textAlign: 'center' }}>
                        MOVIMIENTOS
                      </Text>
                    </View>
                  ) : (
                    <View style={{
                      borderRadius: 0
                    }}>
                      <Text>MOVIMIENTOS</Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ width: '60%' }}
                onPress={() => this.showDataProduct()}
              >
                <View>
                  {this.state.productData ? (
                    <View
                      style={{
                        borderBottomColor: '#e02030',
                        borderBottomWidth: 2,
                        marginLeft: 20,
                        marginRight: 35,
                        alignItems: 'center'
                      }}
                    >
                      <Text style={{ fontWeight: '600', color: 'black' }}>
                        DATOS DEL PRODUCTO
                      </Text>
                    </View>
                  ) : (
                    <View
                      style={{
                        marginLeft: 20,
                        marginRight: 35,
                        alignItems: 'center'
                      }}
                    >
                      <Text style={{ borderRadius: 0 }}>
                        DATOS DEL PRODUCTO
                      </Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '10%'
                }}
                onPress={() => this.showModalSearch()}
              >
                {this.state.movement ? (
                  <View style={{ marginLeft: 10 }}>
                    <Image
                      source={require('../../img/RecursosHSBC/Products/buscarcuota.png')}
                      resizeMode={'stretch'}
                      style={{ height: 24, width: 24 }}
                    />
                  </View>
                ) : (
                  <View style={{ marginLeft: 10 }} />
                )}
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1 }}>
              {this.state.movement ? (
                <View style={{ marginTop: 10 }}>{this.renderMovements()}</View>
              ) : (
                this.renderProductData()
              )}
            </View>
          </View>
          {this.state.modal ? (
            <ProductModal
              done={this.closeModal}
              title={this.state.modalTitle}
            />
          ) : null}
          {this.state.modalSearch ? (
            <ProductModalSearch done={this.closeModalSearch} />
          ) : null}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea'
  },

  scrollContainer: {
    paddingTop: HEADER_EXPANDED_HEIGHT,
    backgroundColor: '#FFFFFF'
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
    color: 'black',
    fontSize: theme.txtSmall
  },

  ammount: {
    color: 'black',
    fontSize: theme.txtBig
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
    paddingTop: 1,
    width: 20,
    height: 20
  },

  textIcon: {
    fontSize: theme.txtSmall,
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
