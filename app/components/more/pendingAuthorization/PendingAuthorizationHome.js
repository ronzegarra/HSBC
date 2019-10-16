import React, { Component, PureComponent } from 'react';
import Swipeable from 'react-native-swipeable';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  Image
} from 'react-native';

import theme from '../../../theme/theme';
import PendingAuthorizationItem from './PendingAuthorizationItem';

export default class PendingAuthorizationHome extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      pendings: [
        {
          Id: 1,
          Type: 'TR',
          Desc: 'Transferencia Otros Bancos',
          Saldo: '$ 1,747,235.00',
          SubDesc: 'BBVA - Andrés Paredes',
          Date: '5 de Marzo'
        },
        {
          Id: 2,
          Type: 'PAY',
          Desc: 'Pago de Tarjeta',
          Saldo: '$ 707,245.00',
          SubDesc: 'MasterCard Clásica USD 0536',
          Date: '5 de Marzo'
        },
        {
          Id: 3,
          Type: 'PAY',
          Desc: 'Pago de Servicios',
          Saldo: '$ 16,235.00',
          SubDesc: 'Telefónica Claro',
          Date: '5 de Marzo'
        },
        {
          Id: 4,
          Type: 'TR',
          Desc: 'Transferencia Cuentas Terceros',
          Saldo: '$ 3,707,245.00',
          SubDesc: 'Carolina Delgado',
          Date: '5 de Marzo'
        }
      ],
      refuseOption: false
    };

    this.renderPendings = this.renderPendings.bind(this);
    this.showOptions = this.showOptions.bind(this);
    this.goNext = this.goNext.bind(this);
    this.goRefuse = this.goRefuse.bind(this);
  }

  renderPendings({ item }) {
    return (
      <PendingAuthorizationItem
        items={this.state.pendings}
        item={item}
        refuseOption={this.state.refuseOption}
        navigation={this.props.navigation}
        showOptions={this.showOptions}
      />
    );
  }

  showOptions(lengthSelected) {
    lengthSelected > 0
      ? this.setState({ options: true })
      : this.setState({ options: false });
  }

  goNext() {
    this.props.navigation.navigate('Operaciones_Pendientes_Segunda');
  }

  goRefuse() {
    //this.setState({ options: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            padding: 5
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: theme.txtSmall }}>
            Mantén presionado para seleccionar varias a la vez
          </Text>
        </View>
        <FlatList
          data={this.state.pendings}
          style={{ flex: 1 }}
          renderItem={this.renderPendings}
        />

        {this.state.options ? (
          <View
            style={{
              flexDirection: 'row',
              height: 60,
              bottom: 50,
              width: '100%'
            }}
          >
            <View
              style={{
                height: 56,
                width: '20%',
                justifyContent: 'center',
                borderTopRightRadius: 4,
                borderBottomRightRadius: 4,
                borderColor: '#EEEEEE',
                borderWidth: 1,
                borderLeftWidth: 0
              }}
            >
              <TouchableOpacity onPress={() => this.goRefuse()}>
                <View style={{ alignItems: 'center' }}>
                  <Image
                    source={require('../../../img/RecursosHSBC/More/Pendings/Rechazar.png')}
                    resizeMode={'stretch'}
                    style={{ height: 30, width: 30 }}
                  />
                  <Text style={{ color: '#FF0000', fontSize: 12 }}>
                    Rechazar
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{ height: 56, width: '60%' }} />
            <View
              style={{
                height: 56,
                width: '20%',
                justifyContent: 'center',
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4,
                borderColor: '#EEEEEE',
                borderWidth: 1,
                borderRightWidth: 0
              }}
            >
              <TouchableOpacity onPress={() => this.goNext()}>
                <View style={{ alignItems: 'center' }}>
                  <Image
                    source={require('../../../img/RecursosHSBC/More/Pendings/Autorizar.png')}
                    resizeMode={'stretch'}
                    style={{ height: 30, width: 30 }}
                  />
                  <Text style={{ color: '#57BC1B', fontSize: 12 }}>
                    Autorizar
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
