import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import theme from '../../../theme/theme';

const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;

export default class PendingAuthorizationThird extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.navigation.state.params,
      cards: [
        {
          Data: [],
          Type: 'uno'
        },
        {
          Data: [],
          Type: 'dos'
        },
        {
          Data: [],
          Type: 'tres'
        }
      ],
      activeCard: 0
    };

    this.goNext = this.goNext.bind(this);
  }

  goNext() {
    this.props.navigation.navigate('Operaciones_Pendientes');
  }

  get slides() {
    return this.state.cards.map((card, index) => {
      return (
        <View
          key={index}
          style={[
            styles.slide,
            {
              height: 422
              //borderRadius: 4,
              // borderColor: '#ECECEC',
              //borderWidth: 1
            }
          ]}
        >
          {card.Type == 'uno' ? (
            <View style={styles.slideInnerContainer}>
              <View
                style={{
                  marginLeft: -28,
                  marginRight: -26,
                  height: 250,
                  top: -32
                }}
              >
                <Image
                  source={require('../../../img/RecursosHSBC/More/Pendings/Arriba.png')}
                  resizeMode={'contain'}
                  style={{ height: 200, width: 'auto' }}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: -134,
                    marginLeft: 275
                  }}
                >
                  <Image
                    source={require('../../../img/RecursosHSBC/More/Pendings/Share.png')}
                    style={{ height: 25, width: 25 }}
                  />
                </View>
                <View style={{ width: '100%', position: 'absolute' }}>
                  <View style={{ width: '100%', alignItems: 'center' }}>
                    <View style={{ paddingTop: 15 }}>
                      {/*<Image source={require('../../../img/RecursosHSBC/Transferences/Ticket_Ok.png')} style={{ height: 40, width: 40 }} />*/}
                      <View style={{ height: 40 }} />
                    </View>

                    <View
                      style={{
                        alignItems: 'center',
                        marginTop: 12,
                        marginBottom: 4
                      }}
                    >
                      <Image
                        source={require('../../../img/RecursosHSBC/Common/logohsbc.png')}
                        style={{ height: 25, width: 100 }}
                      />
                    </View>

                    <Text
                      style={{
                        fontSize: 15,
                        textAlign: 'center',
                        fontWeight: '600'
                      }}
                    >
                      Operación realizada con éxito
                    </Text>
                    <Text style={{ fontSize: 12, textAlign: 'center' }}>
                      Fecha 21/02/2018 Hora 02:17 PM
                    </Text>
                    <Text style={{ fontSize: 12, textAlign: 'center' }}>
                      Oper. 001/250/03256
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  marginLeft: -28,
                  marginRight: -26,
                  height: 280,
                  marginTop: -109.5
                }}
              >
                <Image
                  source={require('../../../img/RecursosHSBC/Transferences/AbajoLarge.png')}
                  resizeMode={'stretch'}
                  style={{ height: 290, width: 'auto' }}
                />

                <View
                  style={{
                    marginTop: -280,
                    paddingBottom: 10,
                    marginBottom: 5,
                    paddingLeft: 45
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'black'
                    }}
                  >
                    Cuenta Débito
                  </Text>

                  <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                    CC - 390006
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'black'
                    }}
                  >
                    Concepto
                  </Text>

                  <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                    Pago de Nómina
                  </Text>

                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'black'
                    }}
                  >
                    Importe
                  </Text>

                  <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                    $ 1.000,00
                  </Text>

                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'black'
                    }}
                  >
                    Fecha Operación
                  </Text>

                  <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                    28/02/2018
                  </Text>

                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'black'
                    }}
                  >
                    Usuario que Autoriza
                  </Text>
                  <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                    Joaquin Batista
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  bottom: 35
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 15,
                  marginTop: -45
                }}
              >
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <TouchableOpacity
                    style={[styles.continueBoton, { borderRadius: 4 }]}
                    onPress={() => this.goNext()}
                  >
                    <Text style={[styles.textoBoton]}>Continuar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : null}
          {card.Type == 'dos' ? (
            <View style={styles.slideInnerContainer}>
              <View
                style={{
                  marginLeft: -28,
                  marginRight: -26,
                  height: 250,
                  top: -32
                }}
              >
                <Image
                  source={require('../../../img/RecursosHSBC/More/Pendings/Arriba.png')}
                  resizeMode={'contain'}
                  style={{ height: 200, width: 'auto' }}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: -140,
                    marginLeft: 275
                  }}
                >
                  <Image
                    source={require('../../../img/RecursosHSBC/More/Pendings/Share.png')}
                    style={{ height: 25, width: 25 }}
                  />
                </View>
                <View style={{ width: '100%', position: 'absolute' }}>
                  <View style={{ width: '100%', alignItems: 'center' }}>
                    <View style={{ paddingTop: 15 }}>
                      {/*<Image source={require('../../../img/RecursosHSBC/Transferences/Ticket_Ok.png')} style={{ height: 40, width: 40 }} />*/}
                      <View style={{ height: 40 }} />
                    </View>

                    <View
                      style={{
                        alignItems: 'center',
                        marginTop: 12,
                        marginBottom: 4
                      }}
                    >
                      <Image
                        source={require('../../../img/RecursosHSBC/Common/logohsbc.png')}
                        style={{ height: 25, width: 100 }}
                      />
                    </View>

                    <Text
                      style={{
                        fontSize: 15,
                        textAlign: 'center',
                        fontWeight: '600'
                      }}
                    >
                      Operación realizada con éxito
                    </Text>
                    <Text style={{ fontSize: 12, textAlign: 'center' }}>
                      Fecha 21/02/2018 Hora 02:17 PM
                    </Text>
                    <Text style={{ fontSize: 12, textAlign: 'center' }}>
                      Oper. 001/250/03256
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  marginLeft: -28,
                  marginRight: -26,
                  height: 280,
                  marginTop: -109.5
                }}
              >
                <Image
                  source={require('../../../img/RecursosHSBC/Transferences/AbajoLarge.png')}
                  resizeMode={'stretch'}
                  style={{ height: 290, width: 'auto' }}
                />

                <View
                  style={{
                    marginTop: -280,
                    paddingBottom: 10,
                    marginBottom: 5,
                    paddingLeft: 45
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'black'
                    }}
                  >
                    Cuenta Débito
                  </Text>

                  <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                    CC - 390006
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'black'
                    }}
                  >
                    Concepto
                  </Text>

                  <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                    Pago de Nómina
                  </Text>

                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'black'
                    }}
                  >
                    Importe
                  </Text>

                  <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                    $ 1.000,00
                  </Text>

                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'black'
                    }}
                  >
                    Fecha Operación
                  </Text>

                  <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                    28/02/2018
                  </Text>

                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'black'
                    }}
                  >
                    Usuario que Autoriza
                  </Text>
                  <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                    Joaquin Batista
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  bottom: 35
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 15,
                  marginTop: -45
                }}
              >
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <TouchableOpacity
                    style={[styles.continueBoton, { borderRadius: 4 }]}
                    onPress={() => this.goNext()}
                  >
                    <Text style={[styles.textoBoton]}>Continuar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : null}
          {card.Type == 'tres' ? (
            <View style={styles.slideInnerContainer}>
              <View
                style={{
                  marginLeft: -28,
                  marginRight: -26,
                  height: 250,
                  top: -32
                }}
              >
                <Image
                  source={require('../../../img/RecursosHSBC/More/Pendings/Arriba.png')}
                  resizeMode={'contain'}
                  style={{ height: 200, width: 'auto' }}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: -140,
                    marginLeft: 275
                  }}
                >
                  <Image
                    source={require('../../../img/RecursosHSBC/More/Pendings/Share.png')}
                    style={{ height: 25, width: 25 }}
                  />
                </View>
                <View style={{ width: '100%', position: 'absolute' }}>
                  <View style={{ width: '100%', alignItems: 'center' }}>
                    <View style={{ paddingTop: 15 }}>
                      {/*<Image source={require('../../../img/RecursosHSBC/Transferences/Ticket_Ok.png')} style={{ height: 40, width: 40 }} />*/}
                      <View style={{ height: 40 }} />
                    </View>

                    <View
                      style={{
                        alignItems: 'center',
                        marginTop: 12,
                        marginBottom: 4
                      }}
                    >
                      <Image
                        source={require('../../../img/RecursosHSBC/Common/logohsbc.png')}
                        style={{ height: 25, width: 100 }}
                      />
                    </View>

                    <Text
                      style={{
                        fontSize: 15,
                        textAlign: 'center',
                        fontWeight: '600'
                      }}
                    >
                      Operación realizada con éxito
                    </Text>
                    <Text style={{ fontSize: 12, textAlign: 'center' }}>
                      Fecha 21/02/2018 Hora 02:17 PM
                    </Text>
                    <Text style={{ fontSize: 12, textAlign: 'center' }}>
                      Oper. 001/250/03256
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  marginLeft: -28,
                  marginRight: -26,
                  height: 280,
                  marginTop: -109.5
                }}
              >
                <Image
                  source={require('../../../img/RecursosHSBC/Transferences/AbajoLarge.png')}
                  resizeMode={'stretch'}
                  style={{ height: 290, width: 'auto' }}
                />

                <View
                  style={{
                    marginTop: -280,
                    paddingBottom: 10,
                    marginBottom: 5,
                    paddingLeft: 45
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'black'
                    }}
                  >
                    Cuenta Débito
                  </Text>

                  <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                    CC - 390006
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'black'
                    }}
                  >
                    Concepto
                  </Text>

                  <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                    Pago de Nómina
                  </Text>

                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'black'
                    }}
                  >
                    Importe
                  </Text>

                  <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                    $ 1.000,00
                  </Text>

                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'black'
                    }}
                  >
                    Fecha Operación
                  </Text>

                  <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                    28/02/2018
                  </Text>

                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'black'
                    }}
                  >
                    Usuario que Autoriza
                  </Text>
                  <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                    Joaquin Batista
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  bottom: 35
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 15,
                  marginTop: -45
                }}
              >
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <TouchableOpacity
                    style={[styles.continueBoton, { borderRadius: 4 }]}
                    onPress={() => this.goNext()}
                  >
                    <Text style={[styles.textoBoton]}>Continuar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : null}
        </View>
      );
    });
  }

  updateIndex(index) {
    this.setState({
      cardSelected: this.state.cards[index],
      activeCard: index
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

  render() {
    return (
      <View>
        <ScrollView>
          <View style={{ marginTop: 10}}>
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
                marginTop: 1,
                height: 15,
                zIndex: 10
              }}
            >
              <View>{this.pagination}</View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    width: itemWidth,
    height: itemHeight,
    paddingHorizontal: horizontalMargin
  },

  slideInnerContainer: {
    width: slideWidth,
    flex: 1
  },

  container: {
    paddingLeft: theme.margin,
    paddingRight: theme.margin,
    marginTop: 10
  },

  sectionHeader: {
    fontSize: theme.txtNormal,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },

  viewMenu: {
    flex: 1,
    padding: theme.paddingList
  },

  viewInputText: {
    width: theme.widthInput,
    backgroundColor: theme.colorInputBackground,
    borderRadius: 2,
    height: 28
  },

  cancelBoton: {
    backgroundColor: theme.colorInputBackground,
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colorInputBackground,
    borderRadius: 4,
    height: 24,
    width: 115
  },

  continueBoton: {
    backgroundColor: theme.colorPrincipal,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colorPrincipal,
    borderRadius: 4,
    height: 28,
    width: 115
  },

  textoBoton: {
    top: -1,
    textAlign: 'center',
    fontSize: 14,
    color: '#FFFFFF'
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
