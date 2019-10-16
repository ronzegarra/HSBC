import React, { Component } from 'react';
import {
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
  DatePickerAndroid,
  View,
  Text,
  Picker,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';

const fuente = 'Helvetica';

import Icon from 'react-native-vector-icons/FontAwesome';

import theme from '../../theme/theme';

var { width, height } = Dimensions.get('window');

const font = 'Helvetica';

class ProductModalSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: '',
      movementType: '',
      queryType: '',
      startDate: 'Seleccionar Fecha',
      endDate: 'Seleccionar Fecha'
    };

    this.hideModal = this.hideModal.bind(this);
    this.confirmPayment = this.confirmPayment.bind(this);

    this.changeOrder = this.changeOrder.bind(this);
    this.changeMovementType = this.changeMovementType.bind(this);
    this.changeQueryType = this.changeQueryType.bind(this);
  }

  hideModal() {
    this.props.done();
  }

  confirmPayment() {
    console.warn('Next');
  }

  changeOrder(order) {
    this.setState({ order });
  }

  changeMovementType(movementType) {
    this.setState({ movementType });
  }

  changeQueryType(queryType) {
    this.setState({ queryType });
  }

  showPicker = async (stateKey, options) => {
    try {
      let { action, year, month, day } = await DatePickerAndroid.open(
        options
      );
      if (action === DatePickerAndroid.dismissedAction) {
      } else {
        if (year && month && day) {
          var date = new Date(year, month, day);
          month = month + 1;
          let monthString, dayString;
          if (month < 10) {
            monthString = '0' + month.toString();
          } else {
            monthString = month.toString();
          }
          if (day < 10) {
            dayString = '0' + day.toString();
          } else {
            dayString = day.toString();
          }

          this.setState({
            startDate: day.toString() + '/' + month + '/' + year.toString()
          });
        }

        //this.state.formItems['dateDeposit'] = this.state.fecha;

        //this.setState({ fechaFormat: year.toString().substring(2, 4) + '/' + month + '/' + day });
      }
    } catch ({ code, message }) {}
  };

  showPicker2 = async (stateKey, options) => {
    try {
      let { action, year, month, day } = await DatePickerAndroid.open(
        options
      );
      if (action === DatePickerAndroid.dismissedAction) {
      } else {
        if (year && month && day) {
          var date = new Date(year, month, day);
          month = month + 1;
          let monthString, dayString;
          if (month < 10) {
            monthString = '0' + month.toString();
          } else {
            monthString = month.toString();
          }
          if (day < 10) {
            dayString = '0' + day.toString();
          } else {
            dayString = day.toString();
          }

          this.setState({
            startDate: day.toString() + '/' + month + '/' + year.toString()
          });
         }

        //this.state.formItems['dateDeposit'] = this.state.fecha;

        //this.setState({ fechaFormat: year.toString().substring(2, 4) + '/' + month + '/' + day });
      }
    } catch ({ code, message }) {}
  };

  render() {
    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={true}
        onRequestClose={() => {
          console.warn('yaa');
        }}
      >
        <View style={styles.containerModal}>
          <View style={styles.modal}>
            <View
              style={{
                justifyContent: 'center',
                //paddingTop: 10,
                paddingBottom: 20
              }}
            >
              <View style={{ alignItems: 'center' }}>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    borderBottomColor: '#F6F6F6',
                    borderBottomWidth: 1,
                    paddingBottom: 10
                  }}
                >
                  <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: theme.colorPrincipal
                      }}
                    >
                      Buscar Movimientos
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 5
              }}
            >
              <View style={{ flexDirection: 'column', alignSelf: 'stretch' }}>
                <Text>Orden</Text>
                <View >
                  <View style={styles.picker}>
                    <Picker
                      style={{ bottom: 10 }}
                      selectedValue={this.state.order}
                      onValueChange={text => this.changeOrder(text)}
                    >
                      <Picker.Item label="Seleccionar" value="" />
                      <Picker.Item label="Ascendente" value="orden1" />
                      <Picker.Item label="Orden 2" value="orden2" />
                    </Picker>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 5
              }}
            >
              <View style={{ flexDirection: 'column', alignSelf: 'stretch' }}>
                <Text>Tipo de Movimiento</Text>
                <View >
                  <View style={styles.picker}>
                    <Picker
                      style={{ bottom: 10 }}
                      selectedValue={this.state.movementType}
                      onValueChange={text => this.changeMovementType(text)}
                    >
                      <Picker.Item label="Seleccionar" value="" />
                      <Picker.Item label="Todos" value="mov1" />
                      <Picker.Item label="No todos" value="mov2" />
                    </Picker>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 5
              }}
            >
              <View style={{ flexDirection: 'column', alignSelf: 'stretch' }}>
                <Text>Tipo de Consulta</Text>
                <View >
                  <View style={styles.picker}>
                    <Picker
                      style={{ bottom: 10 }}
                      selectedValue={this.state.queryType}
                      onValueChange={text => this.changeQueryType(text)}
                    >
                      <Picker.Item label="Seleccionar" value="" />
                      <Picker.Item label="Rango de fechas" value="date" />
                      <Picker.Item label="Otros" value="other" />
                    </Picker>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 5
              }}
            >
              <View style={{ flexDirection: 'column', alignSelf: 'stretch' }}>
                <Text>Desde</Text>
                <View style={[{ flexDirection: 'row' }]}>
                  <View
                    style={{
                      width: '20%',
                      backgroundColor: theme.colorPrincipal,
                      borderBottomLeftRadius: 2,
                      borderTopLeftRadius: 2,
                      height: 28
                    }}
                  />
                  <TouchableWithoutFeedback
                    onPress={() =>
                      this.showPicker('simple', {
                        date: this.state.simpleDate,
                        maxDate: new Date()
                      })
                    }
                  >
                    <View
                      style={{
                        width: '20%',
                        backgroundColor: theme.colorPrincipal,
                        height: 28,
                        paddingLeft: 32
                      }}
                    >
                      <Icon
                        style={{ paddingTop: 6, paddingLeft: 10 }}
                        name="calendar-o"
                        size={15}
                        color="#FFFFFF"
                      />
                    </View>
                  </TouchableWithoutFeedback>

                  <View style={{ width: '50%' }}>
                    <TouchableWithoutFeedback
                      onPress={() =>
                        this.showPicker('simple', {
                          date: this.state.simpleDate,
                          maxDate: new Date()
                        })
                      }
                    >
                      <View
                        style={{
                          height: 28,
                          backgroundColor: theme.colorPrincipal
                        }}
                      >
                        <Text
                          style={[
                            {
                              height: 35,
                              paddingTop: 4,
                              paddingLeft: 6,
                              color: '#FFFFFF'
                            }
                          ]}
                        >
                          {this.state.startDate}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                  <View
                    style={{
                      width: '10%',
                      backgroundColor: theme.colorPrincipal,
                      borderBottomRightRadius: 2,
                      borderTopRightRadius: 2
                    }}
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 5
              }}
            >
              <View style={{ flexDirection: 'column', alignSelf: 'stretch' }}>
                <Text>Hasta</Text>
                <View style={[{ flexDirection: 'row' }]}>
                  <View
                    style={{
                      width: '20%',
                      backgroundColor: theme.colorPrincipal,
                      borderBottomLeftRadius: 2,
                      borderTopLeftRadius: 2,
                      height: 28
                    }}
                  />
                  <TouchableWithoutFeedback
                    onPress={() =>
                      this.showPicker2('simple', {
                        date: this.state.simpleDate,
                        maxDate: new Date()
                      })
                    }
                  >
                    <View
                      style={{
                        width: '20%',
                        backgroundColor: theme.colorPrincipal,
                        height: 28,
                        paddingLeft: 32
                      }}
                    >
                      <Icon
                        style={{ paddingTop: 6, paddingLeft: 10 }}
                        name="calendar-o"
                        size={15}
                        color="#FFFFFF"
                      />
                    </View>
                  </TouchableWithoutFeedback>

                  <View style={{ width: '50%' }}>
                    <TouchableWithoutFeedback
                      onPress={() =>
                        this.showPicker2('simple', {
                          date: this.state.simpleDate,
                          maxDate: new Date()
                        })
                      }
                    >
                      <View
                        style={{
                          height: 28,
                          backgroundColor: theme.colorPrincipal
                        }}
                      >
                        <Text
                          style={[
                            {
                              height: 35,
                              paddingTop: 4,
                              paddingLeft: 6,
                              color: '#FFFFFF'
                            }
                          ]}
                        >
                          {this.state.endDate}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                  <View
                    style={{
                      width: '10%',
                      backgroundColor: theme.colorPrincipal,
                      borderBottomRightRadius: 2,
                      borderTopRightRadius: 2
                    }}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 5
              }}
            >
              <View style={{ flexDirection: 'column', alignSelf: 'stretch' }}>
                <Text>Importe mayor a</Text>
                <View style={[styles.viewInputText, { height: 28 }]}>
                  <TextInput
                    keyboardType={'numeric'}
                    underlineColorAndroid={'transparent'}
                    style={[styles.picker, { height: 28, paddingBottom: 4 }]}
                  >
                    {' '}
                  </TextInput>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 25
              }}
            >
              <View style={{ flexDirection: 'column', alignSelf: 'stretch' }}>
                <Text>Importe menor a</Text>
                <View style={[styles.viewInputText, { height: 28 }]}>
                  <TextInput
                    //onBlur={this.format}
                    keyboardType={'numeric'}
                    underlineColorAndroid={'transparent'}
                    style={[styles.picker, { height: 28, paddingBottom: 4 }]}
                  >
                    {' '}
                  </TextInput>
                </View>
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <TouchableOpacity
                  style={[styles.cancelBoton, { borderRadius: 4 }]}
                  onPress={this.hideModal}
                >
                  <Text style={[styles.textoBoton]}>Continuar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },

  modal: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    zIndex: 0,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  rowCard: {
    flexDirection: 'row',
    padding: 2,
    marginBottom: 5
  },

  leftSide: {
    flex: 1,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRightColor: '#cdcdcd',
    borderBottomColor: '#cdcdcd'
  },

  rightSide: {
    flex: 1,
    borderColor: 'transparent',
    borderWidth: 1,
    borderBottomColor: '#cdcdcd',
    paddingLeft: 5
  },

  title: {
    textAlign: 'left',
    color: theme.colorPrincipal,
    fontSize: 12,
    fontWeight: '100',
    marginBottom: 0
  },

  title2: {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: '100',
    marginBottom: 0
  },

  subTitle: {
    textAlign: 'left',
    color: theme.colorText,
    fontSize: 16,
    fontWeight: '100'
  },

  cancelBoton: {
    backgroundColor: theme.colorPrincipal,
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colorPrincipal,
    borderRadius: 4,
    height: 24,
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

  boton: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colorPrincipal,
    borderRadius: 4,
    height: 28,
    width: 120
  },

  textoBoton: {
    top: 2,
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: font
  },

  botonPDF: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    marginLeft: 20,
    marginRight: 20
  },

  iconItem: {
    width: 40,
    height: 40
  },

  viewInputText: {
    width: theme.widthInput,
    backgroundColor: theme.colorInputBackground,
    borderRadius: 2,
    height: 28
  },

  picker: {
    width: theme.widthInput,
    backgroundColor: theme.colorInputBackground,
    borderRadius: 2,
    height: 28
  }
});

export default ProductModalSearch;
