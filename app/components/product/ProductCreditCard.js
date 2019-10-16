import React, { PureComponent } from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions
} from 'react-native';

import theme from '../../theme/theme';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';

import ProductModal from './ProductModal';
import ProductModalSearch from './ProductModalSearch';

import format from '../../tools/format';

//const HEADER_EXPANDED_HEIGHT = 180;
//const HEADER_COLLAPSED_HEIGHT = 45;

const HEADER_EXPANDED_HEIGHT = 290;
const HEADER_COLLAPSED_HEIGHT = 100;

var { width, height } = Dimensions.get('window');

const horizontalMargin = 1;
const slideWidth = 280;

const sliderWidth = width;
const itemWidth = slideWidth + horizontalMargin * 1.5;

export default class ProductCreditCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
      data: this.props.navigation.state.params,
      cards: [
        {
          Id: '1234 5678 9054 7842',
          Nombre: 'JOAQUIN BATISTA',
          Type: 'hsbcblanca'
        },
        {
          Id: '5678 7842 1234 9054',
          Nombre: 'JOAQUIN B',
          Type: 'hsbcamarilla'
        },
        {
          Id: '5548 2242 1994 7054',
          Nombre: 'JOAQUIN BATISTA',
          Type: 'lawntennis'
        },
        {
          Id: '5548 2242 1994 7054',
          Nombre: 'JOAQUIN BATISTA',
          Type: 'hsbcpremier'
        }
      ],
      activeCard: 0,
      cardMovements: [
        {
          Referencia: 'Campeon del Siglo',
          Fecha: '28/09/1891',
          Importe: '$94,887.20'
        },
        { Referencia: 'Spotify', Fecha: '28/02/2018', Importe: '$94,887.20' },
        { Referencia: 'Uber', Fecha: '28/02/2018', Importe: '$ 94.887,20' },
        {
          Referencia: 'Pago Tarjeta',
          Fecha: '28/02/2018',
          Importe: '$94,887.20'
        },
        {
          Referencia: 'Claro - Pago de servicio',
          Fecha: '28/02/2018',
          Importe: '$94,887.20'
        },
        { Referencia: 'KFC', Fecha: '28/02/2018', Importe: '$94,887.20' },
        { Referencia: 'KFC', Fecha: '28/02/2018', Importe: '$94,887.20' },
        { Referencia: 'Spotify', Fecha: '28/02/2018', Importe: '$94,887.20' },
        { Referencia: 'Spotify', Fecha: '28/02/2018', Importe: '$94,887.20' },
        { Referencia: 'Spotify', Fecha: '28/02/2018', Importe: '$94,887.20' },
        { Referencia: 'Spotify', Fecha: '28/02/2018', Importe: '$94,887.20' },
        { Referencia: 'Spotify', Fecha: '28/02/2018', Importe: '$94,887.20' },
        { Referencia: 'Spotify', Fecha: '28/02/2018', Importe: '$94,887.20' },
        { Referencia: 'Spotify', Fecha: '28/02/2018', Importe: '$94,887.20' }
      ],
      cardDetails: {
        saldoDisponible: '$120,685,211.00',
        saldoContable: '$3,790,897.00',
        saldoCierre: '$23,314,789.00',
        cierreFecha: '17/11/2017',
        pagoMinimo: '$1,747,244,455.00'
      },
      details: false,
      movements: true,
      modal: false,
      modalTitle: '',
      modalSearch: false
    };

    this.renderMovements = this.renderMovements.bind(this);
    this.renderCardDetails = this.renderCardDetails.bind(this);

    this.showDetails = this.showDetails.bind(this);
    this.showMovements = this.showMovements.bind(this);

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.showModalSearch = this.showModalSearch.bind(this);
    this.closeModalSearch = this.closeModalSearch.bind(this);
  }

  componentWillMount() {
    this.setState({ cardSelected: this.state.cards[0] });
  }

  showDetails() {
    this.setState({ details: true });
    this.setState({ movements: false });
  }

  showMovements() {
    this.setState({ movements: true });
    this.setState({ details: false });
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

  get slides() {
    return this.state.cards.map((card, index) => {
      return (
        <View
          key={index}
          style={{
            height: 170,
            marginBottom: 15,
            marginTop: 20,
            width: 275,
            paddingLeft: 22
          }}
        >
          {card.Type == 'hsbcblanca' ? (
            <View
              style={{
                borderColor: '#C9C9C9',
                borderWidth: 1,
                borderRadius: 8
              }}
            >
              <Image
                source={require('../../img/RecursosHSBC/More/Contactless/Cards/hsbcblanca.png')}
                resizeMode={'stretch'}
                style={styles.imagenBlanca}
              />
            </View>
          ) : null}
          {card.Type == 'hsbcamarilla' ? (
            <Image
              source={require('../../img/RecursosHSBC/More/Contactless/Cards/hsbcamarilla.png')}
              resizeMode={'stretch'}
              style={styles.imagen}
            />
          ) : null}
          {card.Type == 'lawntennis' ? (
            <Image
              source={require('../../img/RecursosHSBC/More/Contactless/Cards/lawntennis.png')}
              resizeMode={'stretch'}
              style={styles.imagen}
            />
          ) : null}
          {card.Type == 'hsbcpremier' ? (
            <Image
              source={require('../../img/RecursosHSBC/More/Contactless/Cards/hsbcpremier.png')}
              resizeMode={'stretch'}
              style={styles.imagen}
            />
          ) : null}

          <View style={{ position: 'absolute', marginLeft: 35 }}>
            <View style={{ flexDirection: 'row' }}>
              {this.state.option === true ? (
                <Text
                  style={{
                    marginTop: 86,
                    fontSize: 20,
                    color: '#FFFFFF',
                    borderColor: 'red',
                    borderWidth: 2
                  }}
                >
                  {card.Id}
                </Text>
              ) : (
                <Text
                  style={{
                    marginTop: 75,
                    fontSize: 20,
                    color: '#FFFFFF',
                    paddingLeft: 10
                  }}
                >
                  {/*format.maskNumberCard(card.Id)*/}
                  {card.Id}
                </Text>
              )}
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '70%', paddingTop: 10 }}>
                <Text
                  style={{
                    marginTop: 15,
                    fontSize: 10,
                    marginBottom: 15,
                    paddingLeft: 10,
                    color: '#FFFFFF'
                  }}
                >
                  {card.Nombre}
                </Text>
              </View>
              <View style={{ width: '30%' }}>
                <Text
                  style={{
                    marginLeft: -60,
                    marginTop: 0,
                    fontSize: 12,
                    marginBottom: 20,
                    color: '#FFFFFF'
                  }}
                >
                  12/18
                </Text>
              </View>
            </View>
          </View>
        </View>
      );
    });
  }

  get pagination() {
    return (
      <Pagination
        dotsLength={this.state.cards.length}
        activeDotIndex={this.state.activeCard}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: theme.colorPrincipal,
          bottom: 30,
          marginHorizontal: 4
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  updateIndex(index) {
    this.setState({
      cardSelected: this.state.cards[index],
      activeCard: index
    });
  }

  format() {
    this.setState({
      importe: this.state.importeFormat,
      importeFormat: format.money(this.state.importeFormat)
    });
  }

  renderMovements() {
    var self = this;
    return this.state.cardMovements.map(function(movement, i) {
      return (
        <View key={i} style={styles.movement}>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
            //onPress={() => self.showModal(movement.Referencia)}
          >
            <View style={{ flexDirection: 'column', flex: 3 }}>
              <Text style={styles.titleMov} >{movement.Referencia}</Text>
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

  renderCardDetails() {
    var self = this;
    return (
      <View style={{ flexDirection: 'column', paddingTop: 15 }}>
        <View >
          <View style={{ flexDirection: 'column', flex: 3 }}>
            <Text style={styles.titleMov}>Saldo Disponible</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 2,
              justifyContent: 'flex-end'
            }}
          >
            <Text style={styles.dataProduct}>
              {this.state.cardDetails.saldoDisponible}
            </Text>
          </View>
        </View>
        <View >
          <View style={{ flexDirection: 'column', flex: 3 }}>
            <Text style={styles.titleMov}>Saldo Contable</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 2,
              justifyContent: 'flex-end'
            }}
          >
            <Text style={styles.dataProduct}>
              {this.state.cardDetails.saldoContable}
            </Text>
          </View>
        </View>
        <View >
          <View style={{ flexDirection: 'column', flex: 3 }}>
            <Text style={styles.titleMov}>Saldo de Cierre</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 2,
              justifyContent: 'flex-end'
            }}
          >
            <Text style={styles.dataProduct}>
              {this.state.cardDetails.saldoCierre}
            </Text>
          </View>
        </View>
        <View >
          <View style={{ flexDirection: 'column', flex: 3 }}>
            <Text style={styles.titleMov}>Cierre</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 2,
              justifyContent: 'flex-end'
            }}
          >
            <Text style={styles.dataProduct}>
              {this.state.cardDetails.cierreFecha}
            </Text>
          </View>
        </View>
        <View >
          <View style={{ flexDirection: 'column', flex: 3 }}>
            <Text style={styles.titleMov}>Pago Mínimo</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 2,
              justifyContent: 'flex-end'
            }}
          >
            <Text style={styles.dataProduct}>
              {this.state.cardDetails.pagoMinimo}
            </Text>
          </View>
        </View>
      </View>
    );
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

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.header, { height: headerHeight }]}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text
              style={{
                color: 'black',
                top: 0,
                textAlign: 'center',
                fontSize: 10
              }}
            >
              MasterCard Clásica
            </Text>
            <Text
              style={{
                color: 'black',
                top: 0,
                textAlign: 'center',
                fontSize: 22,
                fontWeight: 'bold'
              }}
            >
              $ 1,300,160.00
            </Text>
        
          </View>
          <Animated.View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              opacity: heroTitleOpacity
            }}
          >
            <View>
              <Carousel
                ref={carousel => {
                  this._carousel = carousel;
                }}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                onSnapToItem={index => this.updateIndex(index)}
              >
                {this.slides}
              </Carousel>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  top: -42,
                  zIndex: 10
                }}
              >
                <View>{this.pagination}</View>
              </View>
            </View>
          </Animated.View>

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
                    >
                      <View style={styles.icon}>
                        <Image
                          source={require('../../img/RecursosHSBC/Products/bloquear.png')}
                          resizeMode={'contain'}
                          style={{ flex: 1, width: undefined }}
                        />
                      </View>
                      <Text style={styles.textIcon}>Bloquear</Text>
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
                    >
                      <View style={styles.icon}>
                        <Image
                          source={require('../../img/RecursosHSBC/Products/solicitar.png')}
                          resizeMode={'contain'}
                          style={{ flex: 1, width: undefined }}
                        />
                      </View>
                      <Text style={styles.textIcon}>Solicitar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
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
                onPress={() => this.showMovements()}
              >
                <View>
                  {this.state.movements ? (
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
                    <View style={{ borderRadius: 0 }}>
                      <Text>MOVIMIENTOS</Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ width: '60%' }}
                onPress={() => this.showDetails()}
              >
                <View>
                  {this.state.details ? (
                    <View
                      style={{
                        borderBottomColor: '#e02030',
                        borderBottomWidth: 2,
                        marginLeft: 35,
                        marginRight: 75,
                        alignItems: 'center'
                      }}
                    >
                      <Text style={{ fontWeight: '600', color: 'black' }}>
                        DETALLES
                      </Text>
                    </View>
                  ) : (
                    <View
                      style={{
                        marginLeft: 35,
                        marginRight: 75,
                        alignItems: 'center'
                      }}
                    >
                      <Text style={{ borderRadius: 0 }}>DETALLES</Text>
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
                {this.state.details ? (
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
              {this.state.details ? (
                this.renderCardDetails()
              ) : (
                <View style={{ marginTop: 10 }}>{this.renderMovements()}</View>
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
    color: '#FFFFFF',
    fontSize: theme.txtSmall
  },

  ammount: {
    color: '#FFFFFF',
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
  },

  imagen: {
    height: 150,
    width: 252
  },

  imagenBlanca: {
    height: 150,
    width: 248
  }
});
