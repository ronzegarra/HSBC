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
  Line,
  Rect,
  Text as TextSvg
} from 'react-native-svg';
import { AreaChart, Grid, XAxis } from 'react-native-svg-charts';
import { ProgressCircle }  from 'react-native-svg-charts'
import * as shape from 'd3-shape';
import * as scale from 'd3-scale'

import Icon from 'react-native-vector-icons/FontAwesome';

import theme from '../../theme/theme';

import ProductModal from './ProductModal';
import ProductModalSearch from './ProductModalSearch';
import dateFns from 'date-fns';
import esLocale from 'date-fns/locale/es';

const HEADER_EXPANDED_HEIGHT = 260;
const HEADER_COLLAPSED_HEIGHT = 45;

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class ProductLoan extends PureComponent {
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
          Importe: '$ 94.887,20',
          Pagado: true
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20',
          Pagado: true
        },
        { Referencia: 'Uber', Fecha: '28/02/2018', Importe: '$ 94.887,20' },
        {
          Referencia: 'Pago Tarjeta',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20',
          Pagado: true
        },
        {
          Referencia: 'Claro - Pago de servicio',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20',
          Pagado: false
        },
        {
          Referencia: 'KFC',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20',
          Pagado: false
        },
        {
          Referencia: 'KFC',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20',
          Pagado: false
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20',
          Pagado: false
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20',
          Pagado: false
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20',
          Pagado: false
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20',
          Pagado: false
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20',
          Pagado: false
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20',
          Pagado: false
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20',
          Pagado: false
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20',
          Pagado: false
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20',
          Pagado: false
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20',
          Pagado: false
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20',
          Pagado: false
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20',
          Pagado: false
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20',
          Pagado: false
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20',
          Pagado: false
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20',
          Pagado: false
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20',
          Pagado: false
        },
        {
          Referencia: 'Spotify',
          Fecha: '28/02/2018',
          Importe: '$ 94.887,20',
          Pagado: false
        }
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

  renderMovements() {
    var self = this;
    return this.state.movements.map(function(movement, i) {
      let paymentImage;
      if (movement.Pagado)
        paymentImage = require('../../img/RecursosHSBC/Products/indicadorpago.png');
      else
        paymentImage = require('../../img/RecursosHSBC/Products/indicadornopago.png');
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
              <Image
                source={ paymentImage }
                style={{ height: 24, width: 24 }}
              />
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

    const payedDues = 10;
    const dues = 15;

    const header = (
      <View style={{ padding: theme.margin, flexDirection: 'row'}} >
        <View style={{ width: '100%' }} >
          <ProgressCircle
            style={ { height: 150 } }
            progress={ payedDues/dues }
            progressColor={'rgb(224, 32, 48)'}
          >
            <TextSvg
              alignmentBaseline={ 'baseline' }
              textAnchor={ 'middle' }
              y={-25}
            >
              Total:
            </TextSvg>

            <TextSvg
              alignmentBaseline={ 'baseline' }
              textAnchor={ 'middle' }
              fontSize="18"
              fill="#747474"
              y={-5}
            >
              1,399,988.00
            </TextSvg>

            <TextSvg
              alignmentBaseline={ 'baseline' }
              textAnchor={ 'middle' }
              fontSize="9"
              y={15}
            >
              Cuotas:
            </TextSvg>

            <TextSvg
              alignmentBaseline={ 'baseline' }
              textAnchor={ 'middle' }
              fontSize="14"
              fill="#747474"
              y={30}
            >
              {`${payedDues}/${dues}`}
            </TextSvg>
          </ProgressCircle >
        </View>
      </View>
    );

    const body = (
      <View
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: 'white',
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
            width: '100%',
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
              borderRightColor: 'transparent',
            }}
          >
            <View
              style={{
                height: 38,
                left: 0,
                zIndex: 9999,
                width: '100%',
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
                      source={require('../../img/RecursosHSBC/Products/pagar.png')}
                      resizeMode={'stretch'}
                      style={{ flex: 1, width: undefined }}
                    />
                  </View>
                  <Text style={styles.textIcon}>Pagar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    )


    return (
      <View style={styles.container}>
        <Animated.View style={[styles.header, { height: headerHeight }]}>
          <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.account}>Leasing Empresarial</Text>
            <Text style={styles.ammount}>103434443433434</Text>
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
                        borderBottomColor: 'rgb(224, 32, 48)',
                        borderBottomWidth: 2
                      }}
                    >
                      <Text style={{ fontWeight: '600', color: 'black', textAlign: 'center' }}>
                        DETALLE
                      </Text>
                    </View>
                  ) : (
                    <View style={{ borderRadius: 0 }}>
                      <Text style={{ textAlign: 'center' }}>DETALLE</Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ width: this.state.productData ? '65%': '60%' }}
                onPress={() => this.showDataProduct()}
              >
                <View>
                  {this.state.productData ? (
                    <View
                      style={{
                        borderBottomColor: 'rgb(224, 32, 48)',
                        borderBottomWidth: 2,
                        marginLeft: 20,
                        marginRight: 35,
                        alignItems: 'center'
                      }}
                    >
                      <Text style={{ fontWeight: '600', color: 'black' }}>
                        DATOS DEL PRÉSTAMO
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
                        DATOS DEL PRÉSTAMO
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
