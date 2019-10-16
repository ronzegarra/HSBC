import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import { createTransition, SlideLeft } from 'react-native-transition';

import theme from '../../../theme/theme';

const Transition = createTransition(SlideLeft);

const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;

export default class PendingAuthorizationSecond extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.navigation.state.params,
      cards: [
        {
          Data: {
            debitAccount: 'CC - 390031',
            concept: 'Transferencia Otros Bancos',
            ammount: '$10,500.00',
            operationDate: '28/02/2018',
            user: 'Christian Jurado'
          },
          Type: 'uno',
          token: ''
        },
        {
          Data: {
            debitAccount: 'CC - 390010',
            concept: 'Transferencia Otros Bancos',
            ammount: '$10,510.00',
            operationDate: '26/02/2018',
            user: 'Christian Justo'
          },
          Type: 'dos',
          token: ''
        },
        {
          Data: {
            debitAccount: 'CC - 390006',
            concept: 'Pago de Nómina',
            ammount: '$16,500.00',
            operationDate: '28/02/2018',
            user: 'Christian Jurados',
            token: ''
          },
          Type: 'tres',
          token: ''
        }
      ],
      activeCard: 0,

      activeData: 0,
      activeDataPagination: 0,

      newToken: '',

      advertLabel: true
    };

    this.goNext = this.goNext.bind(this);
    this.goBack = this.goBack.bind(this);

    this.onBlur = this.onBlur.bind(this);

    this.changeAuthorizationCode = this.changeAuthorizationCode.bind(this);

    this.switch = this.switch.bind(this);

    this.transition = this.transition.bind(this);
  }

  goNext() {
    this.props.navigation.navigate('Operaciones_Pendientes_Tercera');
  }

  goBack() {
    //this.props.navigation.goBack();
    this.props.navigation.navigate('Operaciones_Pendientes');
  }

  transition(index) {
    return Transition.show(
      <View style={{ height: 460 }}>
        <ScrollView>
          <View>
            <View style={{ flex: 1, marginTop: 10, alignItems: 'center' }}>
              <View
                style={[
                  styles.slide,
                  {
                    height: 425,
                    borderRadius: 4,
                    borderColor: '#ECECEC',
                    borderWidth: 1
                  }
                ]}
              >
                <View style={styles.slideInnerContainer}>
                  <View
                    style={{
                      justifyContent: 'center',
                      marginTop: 10,
                      marginBottom: 15
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: 'black',
                        textAlign: 'center'
                      }}
                    >
                      Confirmación
                    </Text>

                    <Text style={{ fontSize: 11, textAlign: 'center' }}>
                      Fecha 21/02/2018 Hora 02:17 PM
                    </Text>
                  </View>
                  <View
                    style={{
                      marginTop: 10,
                      paddingBottom: 10,
                      marginBottom: 5,
                      borderBottomColor: '#F7F7F7',
                      marginLeft: 20,
                      marginRight: 20
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
                      {this.state.cards[index].Data.debitAccount}
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
                      {this.state.cards[index].Data.concept}
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
                      {this.state.cards[index].Data.ammount}
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
                      {this.state.cards[index].Data.operationDate}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '600',
                        color: 'black'
                      }}
                    >
                      Usuario de Ingreso
                    </Text>

                    <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                      {this.state.cards[index].Data.user}
                    </Text>
                    <View
                      style={{
                        marginTop: 5,
                        paddingBottom: 10,
                        marginBottom: 5,
                        borderBottomColor: '#F7F7F7',
                        borderBottomWidth: 1,
                        marginLeft: 2,
                        marginRight: 2
                      }}
                    />
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 5,
                        width: 90
                      }}
                    />

                    <View style={{ justifyContent: 'center', marginTop: 5 }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '600',
                          color: 'black',
                          textAlign: 'center'
                        }}
                      >
                        Autorización
                      </Text>

                      <Text
                        style={{
                          fontSize: 11,
                          paddingTop: 5,
                          paddingBottom: 5,
                          textAlign: 'center'
                        }}
                      >
                        Ingrese su código de seguridad
                      </Text>
                      {/*this.state.advertLabel ? null : <Text style={{ color: theme.colorPrincipal }}>*</Text>*/}
                      <View
                        style={{
                          flexDirection: 'row',
                          alignSelf: 'center'
                        }}
                      >
                        <View
                          style={[
                            styles.viewInputText,
                            { height: 28, width: 125 }
                          ]}
                        >
                          <TextInput
                            keyboardType={'numeric'}
                            underlineColorAndroid={'transparent'}
                            placeholder={''}
                            secureTextEntry={true}
                            onBlur={() => this.onBlur(this.state.activeData)}
                            maxLength={6}
                            defaultValue={this.state.newToken}
                            onChangeText={newToken =>
                              this.setState({ newToken })
                            }
                            style={[{ height: 28, paddingBottom: 4 }]}
                          />
                        </View>
                      </View>

                      <View
                        style={{
                          flexDirection: 'column',
                          alignItems: 'center',
                          marginTop: 15
                        }}
                      >
                        <View style={{ flexDirection: 'row' }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              marginTop: 5,
                              marginRight: 10,
                              marginLeft: 10
                            }}
                          >
                            <View
                              style={{
                                flexDirection: 'row',
                                marginBottom: 15
                              }}
                            >
                              <View>
                                <TouchableOpacity
                                  onPress={() => this.goBack()}
                                  style={[
                                    styles.cancelBoton,
                                    { borderRadius: 4 }
                                  ]}
                                >
                                  <Text style={[styles.textoCancelBoton]}>
                                    Cancelar
                                  </Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                          </View>

                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'flex-end',
                              marginTop: 5,
                              marginRight: 10
                            }}
                          >
                            <View
                              style={{
                                flexDirection: 'row',
                                marginBottom: 15
                              }}
                            >
                              <View>
                                <TouchableOpacity
                                  /*onPress={() =>
                                          this.updateData(this.state.activeData)
                                        }*/

                                  onPress={() =>
                                    this.switch(this.state.activeData)
                                  }
                                  style={[
                                    styles.continueBoton,
                                    { borderRadius: 4 }
                                  ]}
                                >
                                  <Text style={[styles.textoBoton]}>
                                    Confirmar
                                  </Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  onBlur(index) {
    if (index < this.state.cards.length - 1) {
      this.switch(index);
    } else {
      this.goNext();
    }
  }

  changeAuthorizationCode(newToken) {
    this.setState({ newToken });
    if (newToken.length >= 6) {
      this.setState({ advertLabel: false });
    } else {
      this.setState({ advertLabel: true });
    }
  }

  get pagination() {
    if (this.state.newToken !== '') {
      this.setState({ newToken: '' });
    }

    return (
      <Pagination
        dotsLength={this.state.cards.length}
        activeDotIndex={this.state.activeData}
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

  switch(index) {
    let newIndex = index + 1;

    if (newIndex < this.state.cards.length) {
      this.setState({ activeData: newIndex });
      this.transition(newIndex);
    } else {
      console.warn('out');
      this.goNext();
    }
  }

  render() {
    return (
      <View style={{ height: 460 }}>
        <Transition>
          <ScrollView>
            <View>
              <View style={{ flex: 1, marginTop: 10, alignItems: 'center' }}>
                <View
                  style={[
                    styles.slide,
                    {
                      height: 425,
                      borderRadius: 4,
                      borderColor: '#ECECEC',
                      borderWidth: 1
                    }
                  ]}
                >
                  <View style={styles.slideInnerContainer}>
                    <View
                      style={{
                        justifyContent: 'center',
                        marginTop: 10,
                        marginBottom: 15
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '600',
                          color: 'black',
                          textAlign: 'center'
                        }}
                      >
                        Confirmación
                      </Text>

                      <Text style={{ fontSize: 11, textAlign: 'center' }}>
                        Fecha 21/02/2018 Hora 02:17 PM
                      </Text>
                    </View>
                    <View
                      style={{
                        marginTop: 10,
                        paddingBottom: 10,
                        marginBottom: 5,
                        borderBottomColor: '#F7F7F7',
                        marginLeft: 20,
                        marginRight: 20
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
                        {
                          this.state.cards[this.state.activeData].Data
                            .debitAccount
                        }
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
                        {this.state.cards[this.state.activeData].Data.concept}
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
                        {this.state.cards[this.state.activeData].Data.ammount}
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
                        {
                          this.state.cards[this.state.activeData].Data
                            .operationDate
                        }
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '600',
                          color: 'black'
                        }}
                      >
                        Usuario de Ingreso
                      </Text>

                      <Text style={{ fontSize: 13, paddingLeft: 10 }}>
                        {this.state.cards[this.state.activeData].Data.user}
                      </Text>
                      <View
                        style={{
                          marginTop: 5,
                          paddingBottom: 10,
                          marginBottom: 5,
                          borderBottomColor: '#F7F7F7',
                          borderBottomWidth: 1,
                          marginLeft: 2,
                          marginRight: 2
                        }}
                      />
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          marginBottom: 5,
                          width: 90
                        }}
                      />

                      <View style={{ justifyContent: 'center', marginTop: 5 }}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '600',
                            color: 'black',
                            textAlign: 'center'
                          }}
                        >
                          Autorización
                        </Text>

                        <Text
                          style={{
                            fontSize: 11,
                            paddingTop: 5,
                            paddingBottom: 5,
                            textAlign: 'center'
                          }}
                        >
                          Ingrese su código de seguridad
                        </Text>
                        {/*this.state.advertLabel ? null : <Text style={{ color: theme.colorPrincipal }}>*</Text>*/}
                        <View
                          style={{
                            flexDirection: 'row',
                            alignSelf: 'center'
                          }}
                        >
                          <View
                            style={[
                              styles.viewInputText,
                              { height: 28, width: 125 }
                            ]}
                          >
                            <TextInput
                              keyboardType={'numeric'}
                              underlineColorAndroid={'transparent'}
                              placeholder={''}
                              secureTextEntry={true}
                              onBlur={() => this.onBlur(this.state.activeData)}
                              maxLength={6}
                              //defaultValue={this.state.newToken}
                              /*onChangeText={newToken =>
                                this.changeAuthorizationCode(newToken)
                              }*/
                              onChangeText={newToken =>
                                this.setState({ newToken })
                              }
                              //value={this.state.newToken}
                              defaultValue={this.state.newToken}
                              style={[{ height: 28, paddingBottom: 4 }]}
                            />
                          </View>
                        </View>

                        <View
                          style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginTop: 15
                          }}
                        >
                          <View style={{ flexDirection: 'row' }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                marginTop: 5,
                                marginRight: 10,
                                marginLeft: 10
                              }}
                            >
                              <View
                                style={{
                                  flexDirection: 'row',
                                  marginBottom: 15
                                }}
                              >
                                <View>
                                  <TouchableOpacity
                                    onPress={() => this.goBack()}
                                    style={[
                                      styles.cancelBoton,
                                      { borderRadius: 4 }
                                    ]}
                                  >
                                    <Text style={[styles.textoCancelBoton]}>
                                      Cancelar
                                    </Text>
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </View>

                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                marginTop: 5,
                                marginRight: 10
                              }}
                            >
                              <View
                                style={{
                                  flexDirection: 'row',
                                  marginBottom: 15
                                }}
                              >
                                <View>
                                  <TouchableOpacity
                                    /*onPress={() =>
                                          this.updateData(this.state.activeData)
                                        }*/

                                    onPress={() =>
                                      this.switch(this.state.activeData)
                                    }
                                    style={[
                                      styles.continueBoton,
                                      { borderRadius: 4 }
                                    ]}
                                  >
                                    <Text style={[styles.textoBoton]}>
                                      Confirmar
                                    </Text>
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/*<View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 7,
                zIndex: 10,
                height: 15,
                backgroundColor: 'blue'
              }}
            >
              <View>{this.pagination}</View>
            </View>
            */}
          </ScrollView>
        </Transition>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 7,
            zIndex: 10,
            height: 15
            //backgroundColor: 'blue',
            //top: theme.topPagination
          }}
        >
          <View>{this.pagination}</View>
        </View>
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
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colorInputBackground,
    borderRadius: 4,
    height: 28,
    width: 115
  },

  continueBoton: {
    backgroundColor: theme.colorPrincipal,
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

  textoCancelBoton: {
    top: -1,
    textAlign: 'center',
    fontSize: 14,
    color: '#9C9C9B'
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
