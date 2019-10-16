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

import AlertItem from './AlertsItem';

export default class AlertsHome extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      alerts: [
        {
          Id: 1,
          Type: 'NP',
          Desc: 'Notificación de Pendientes',
          SubDesc: 'Tiene 1 nuevo pago pendiente para aprobación',
          Date: '27/02/2018 16:20'
        },
        {
          Id: 2,
          Type: 'NT',
          Desc: 'Notificación de Transferencias',
          SubDesc:
            'Su transferencia programada para el 28/02/2018 se acerca. ¿Desea realizar algun cambio?',
          Date: '27/02/2018 16:20'
        },
        {
          Id: 3,
          Type: 'PP',
          Desc: 'Préstamo Personal',
          SubDesc: 'Conozca los beneficiarios que tiene como Jubilado',
          Date: '27/02/2018 16:20'
        },
        {
          Id: 4,
          Type: 'DESCUENTO',
          Desc: 'Piques! Qué descuento hay hoy',
          SubDesc: 'Todos los días, todo el año',
          Date: '27/02/2018 16:20'
        }
      ]
    };
  }

  renderAlerts = ({ item }) => {
    return <AlertItem item={item} navigation={this.props.navigation} />;
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.alerts}
          style={{ flex: 1 }}
          renderItem={this.renderAlerts}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
