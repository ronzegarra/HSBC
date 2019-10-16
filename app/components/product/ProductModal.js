import React, { Component } from 'react';
import {
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
  View,
  Text,
  Dimensions
} from 'react-native';

const fuente = 'Helvetica';

import theme from '../../theme/theme';

var { width, height } = Dimensions.get('window');

const font = 'Helvetica';

class ProductModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.hideModal = this.hideModal.bind(this);
    this.confirmPayment = this.confirmPayment.bind(this);
  }

  hideModal() {
    this.props.done();
  }

  confirmPayment() {
    console.warn('Next');
  }

  render() {
    return <Modal animationType={'fade'} transparent={true} visible={true} onRequestClose={() => {
          console.warn('yaa');
        }}>
        <View style={styles.containerModal}>
          <View style={styles.modal}>
            <View style={{ justifyContent: 'center', paddingTop: 10, paddingBottom: 20 }}>
              <View style={{ alignItems: 'center' }}>
                <View style={{ width: '100%', alignItems: 'center', borderBottomColor: '#F6F6F6', borderBottomWidth: 1, paddingBottom: 10 }}>
                  <View style={styles.iconItem}>
                  <Image source={require('../../img/RecursosHSBC/Products/servicio.png')} resizeMode={'contain'} style={{ flex: 1, width: undefined }} />
                  </View>
                  <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: theme.colorPrincipal }}>
                      {this.props.title}
                    </Text>
                    <Text style={{ fontSize: 11 }}>Pago de Servicios</Text>
                    <Text style={{ fontSize: 11 }}>
                      Fecha 21/02/2018 Hora 02:17 PM
                    </Text>
                  </View>
                </View>

                <View style={{ paddingTop: 10, paddingBottom: 20 }}>
                  <View style={{ flexDirection: 'row', width: '100%', marginTop: 2 }}>
                    <View style={{ width: '50%' }}>
                      <Text style={{ paddingLeft: 60, fontWeight: '600' }}>
                        Importe
                      </Text>
                    </View>
                    <View style={{ width: '50%' }}>
                      <Text>750,710.00</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', width: '100%', marginBottom: 8 }}>
                    <View style={{ width: '50%' }}>
                      <Text style={{ paddingLeft: 60, fontSize: 12 }}>
                        Saldo
                      </Text>
                    </View>
                    <View style={{ width: '50%' }}>
                      <Text style={{ fontSize: 12 }}>125,750,710.00</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', width: '100%', marginTop: 4 }}>
                    <View style={{ width: '50%' }}>
                      <Text style={{ paddingLeft: 25, fontSize: 12, fontWeight: '600' }}>
                        Fecha Contable
                      </Text>
                    </View>
                    <View style={{ width: '50%' }}>
                      <Text style={{ fontSize: 12 }}>21/02/2018</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', width: '100%', marginTop: 4 }}>
                    <View style={{ width: '50%' }}>
                      <Text style={{ paddingLeft: 45, fontSize: 12, fontWeight: '600' }}>
                        Fecha Valor
                      </Text>
                    </View>
                    <View style={{ width: '50%' }}>
                      <Text style={{ fontSize: 12 }}>21/02/2018</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', width: '100%', marginTop: 4 }}>
                    <View style={{ width: '50%' }}>
                      <Text style={{ paddingLeft: 20, fontSize: 12, fontWeight: '600' }}>
                        Ref./Nro Cheque
                      </Text>
                    </View>
                    <View style={{ width: '50%' }}>
                      <Text style={{ fontSize: 12 }}>{}</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', width: '100%', marginTop: 4 }}>
                    <View style={{ width: '50%' }}>
                      <Text style={{ paddingLeft: 36, fontSize: 12, fontWeight: '600' }}>
                        Sucursal Mov.
                      </Text>
                    </View>
                    <View style={{ width: '50%' }}>
                      <Text style={{ fontSize: 12 }}>Casa Central</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: -4 }}>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <TouchableOpacity style={[styles.cancelBoton, { borderRadius: 4 }]} onPress={this.hideModal}>
                  <Text style={[styles.textoBoton]}>Continuar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>;
  }
}

const styles = StyleSheet.create({
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
  }
});

export default ProductModal;
