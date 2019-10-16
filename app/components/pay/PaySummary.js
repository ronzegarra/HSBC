import React, { PureComponent } from 'react';

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';

import theme from '../../theme/theme';

import PaySummaryItem from './PaySummaryItem';

export default class PaySummary extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      paymentsSummary: [
        {
          Id: 1,
          Desc: 'PAGOS DE TARJETA',
          Type: 'PT',
          Data: [
            { Id: 1, Title: 'Pago de Tarjeta Prepag 2' },
            { Id: 2, Title: 'Pago de Tarjeta Oro Empres' }
          ]
        },
        {
          Id: 2,
          Desc: 'PAGOS DE PRÉSTAMOS',
          Type: 'PP',
          Data: [{ Id: 1, Title: 'Pago PT - Prestamo Vivienda' }]
        },
        {
          Id: 3,
          Desc: 'PAGOS DE SERVICIOS',
          Type: 'PS',
          Data: [
            { Id: 1, Title: 'Pago de Servicio - Cable Onda' },
            { Id: 2, Title: 'Pago de Servicio - IDAAN' }
          ]
        }
      ]
    };

    this.renderPaySummary = this.renderPaySummary.bind(this);
    this.goNext = this.goNext.bind(this);
  }

  goNext() {
    this.props.navigation.navigate('Pagar_Tipo');
  }

  renderPaySummary({ item }) {
    let lastItem = item.Data[item.Data.length - 1];

    return (
      <View>
        <Text style={styles.sectionHeader}>{item.Desc}</Text>

        {item.Data.map(subItem => {
          return (
            <View>
              <PaySummaryItem
                key={item.Id}
                item={subItem}
                type={item.Type}
                lastItem={lastItem}
                navigation={this.props.navigation}
              />
            </View>
          );
        })}
      </View>
    );
  }

  render() {
    return <View style={styles.container}>
        <View style={{ flex: 1, padding: theme.margin }}>
          <View style={{ paddingBottom: 7, paddingTop: 7 }}>
            <Text style={styles.title}>NUEVO PAGO</Text>
          </View>

          <View style={styles.subContainer}>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.goNext()}>
              <View style={{ width: 20, height: 20 }}>
                <Image source={require('../../img/RecursosHSBC/Payments/add.png')} resizeMode={'contain'} style={{ flex: 1, width: undefined }} />
              </View>
              <Text style={styles.action}>Realizar un nuevo pago</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingBottom: 10 }}>
            <Text
              style={[
                styles.title,
                { color: '#A3A3A3', fontWeight: 'bold' }
              ]}
            >
              Pagos guardados
            </Text>
          </View>

          <FlatList style={styles.viewMenu} data={this.state.paymentsSummary} renderItem={this.renderPaySummary //keyExtractor={(item) => item.IdOperacion}
            } />
        </View>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: theme.margin,
    paddingRight: theme.margin
  },

  subContainer: {
    flexDirection: 'row',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    paddingTop: theme.margin,
    paddingBottom: theme.margin
  },

  sectionHeader: {
    fontSize: theme.txtNormal,
    color: theme.colorSubTitle,
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

  title: {
    fontSize: theme.txtSmall,
    color: theme.colorSubTitle
  },

  action: {
    fontSize: theme.txtNormal,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10
  }
});
