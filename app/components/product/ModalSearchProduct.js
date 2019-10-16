import React from 'react';
import {
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Picker
} from 'react-native';

import theme from '../../theme/theme';

export default class ModalSearchProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productType: '' };
    this.changeProductType = this.changeProductType.bind(this);
  }

  changeProductType(productType) {
    this.setState({ productType });
  }

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
            <View style={{ justifyContent: 'center', paddingBottom: 20 }}>
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
                    <Text style={{ fontSize: 16, color: 'black' }}>
                      Buscar Productos
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 12
                }}
              >
                <View style={{ width: '28%', paddingTop: 5 }}>
                  <Text style={{ textAlign: 'right', paddingRight: 10 }}>
                    N° Cuenta:
                  </Text>
                </View>
                <View style={{ width: '72%' }}>
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
                  marginTop: 5
                }}
              >
                <View style={{ width: '28%', paddingTop: 5 }}>
                  <Text style={{ textAlign: 'right', paddingRight: 10 }}>
                    Alias:
                  </Text>
                </View>
                <View style={{ width: '72%' }}>
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
                  marginTop: 5
                }}
              >
                <View style={{ width: '28%', paddingTop: 5 }}>
                  <Text style={{ textAlign: 'right', paddingRight: 10 }}>
                    Tipo:
                  </Text>
                </View>
                <View style={{ width: '72%' }}>
                  <View >
                    <View style={styles.picker}>
                      <Picker
                        style={{ bottom: 10 }}
                        selectedValue={this.state.productType}
                        onValueChange={text => this.changeProductType(text)}
                      >
                        <Picker.Item label="Seleccionar" value="" />
                        <Picker.Item label="Todos" value="type1" />
                        <Picker.Item label="No todos" value="type2" />
                      </Picker>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20
                }}
              >
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <TouchableOpacity
                    style={[styles.cancelBoton, { borderRadius: 4 }]}
                    onPress={this.props.closeSearchModal}
                  >
                    <Text style={[styles.textoBoton]}>Buscar</Text>
                  </TouchableOpacity>
                </View>
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
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },

  modal: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    zIndex: 0,
    marginTop: 10,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },

  viewInputText: {
    width: '100%',
    backgroundColor: theme.colorInputBackground,
    borderRadius: 2,
    height: 28
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

  textoBoton: {
    top: 2,
    fontSize: 12,
    color: '#FFFFFF'
  },

  picker: {
    width: '100%',
    backgroundColor: theme.colorInputBackground,
    borderRadius: 2,
    height: 28
  }
});
