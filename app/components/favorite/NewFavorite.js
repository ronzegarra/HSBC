import React, { Component, PureComponent } from 'react';

import {
  Text,
  View,
  StyleSheet,
  SectionList,
  FlatList,
  ScrollView
} from 'react-native';

import theme from '../../theme/theme';

import NewFavoriteItem from './NewFavoriteItem';

export default class NewFavorite extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      products: {
        title: 'PRODUCTOS',
        id: 1,
        type: 'PR',
        data: [
          {
            Id: 1,
            Desc: 'CC - 390006',
            Type: 'CC'
          },
          {
            Id: 2,
            Desc: 'Préstamo 264618',
            Type: 'PRE'
          },
          {
            Id: 3,
            Desc: 'Tarjeta de Crédito Oro Empres',
            Type: 'TC'
          },
          {
            Id: 4,
            Desc: 'Tarjeta Prepaga Prepg 2',
            Type: 'TP'
          }
        ]
      },
      payments: {
        title: 'PAGAR',
        id: 1,
        type: 'PAY',
        data: [
          {
            Id: 1,
            Desc: 'Pago de Tarjetas',
            Type: 'PAY-T'
          },
          {
            Id: 2,
            Desc: 'Pago de Préstamos',
            Type: 'PAY-P'
          },
          {
            Id: 3,
            Desc: 'Pago de Servicios',
            Type: 'PAY-S'
          }
        ]
      },
      transferences: {
        title: 'TRANSFERENCIAS',
        id: 1,
        type: 'TR',
        data: [
          {
            Id: 1,
            Desc: 'Transferencias a Cuentas Propias',
            Type: 'TR-CP'
          },
          {
            Id: 2,
            Desc: 'Transferencias a Terceros',
            Type: 'TR-T'
          },
          {
            Id: 3,
            Desc: 'Transferencia a Otros Bancos',
            Type: 'TR-OB'
          }
        ]
      },
      others: {
        title: 'OTRAS FUNCIONALIDADES',
        id: 1,
        type: 'OF',
        data: [
          {
            Id: 1,
            Desc: 'Autorizaciones Pendientes',
            Type: 'AP'
          },
          {
            Id: 2,
            Desc: 'Sucursales',
            Type: 'S'
          },
          {
            Id: 3,
            Desc: 'Avisos',
            Type: 'A'
          },
          {
            Id: 4,
            Desc: 'Contactless',
            Type: 'C'
          }
        ]
      }
    };

    this.renderProducts = this.renderProducts.bind(this);
    this.renderPayments = this.renderPayments.bind(this);
    this.renderTransferences = this.renderTransferences.bind(this);
    this.renderZimple = this.renderZimple.bind(this);
    this.renderOthers = this.renderOthers.bind(this);
  }

  renderProducts({ item }) {
    let lastItem = this.state.products.data[
      this.state.products.data.length - 1
    ];

    return (
      <NewFavoriteItem
        item={item}
        lastItem={lastItem}
        navigation={this.props.navigation}
      />
    );
  }

  renderTransferences({ item }) {
    let lastItem = this.state.transferences.data[
      this.state.transferences.data.length - 1
    ];

    return (
      <NewFavoriteItem
        item={item}
        lastItem={lastItem}
        navigation={this.props.navigation}
      />
    );
  }

  renderPayments({ item }) {
    let lastItem = this.state.payments.data[
      this.state.payments.data.length - 1
    ];

    return (
      <NewFavoriteItem
        item={item}
        lastItem={lastItem}
        navigation={this.props.navigation}
      />
    );
  }

  renderZimple({ item }) {
    let lastItem = this.state.payments.data[
      this.state.payments.data.length - 1
    ];

    return (
      <NewFavoriteItem
        item={item}
        lastItem={lastItem}
        navigation={this.props.navigation}
      />
    );
  }

  renderOthers({ item }) {
    let lastItem = this.state.others.data[this.state.others.data.length - 1];

    return (
      <NewFavoriteItem
        item={item}
        lastItem={lastItem}
        navigation={this.props.navigation}
      />
    );
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <View>
              <Text
                style={{
                  marginTop: 15,
                  marginBottom: 15,
                  color: theme.colorSubTitle
                }}
              >
                PRODUCTOS
              </Text>
              <FlatList
                style={styles.viewMenu}
                data={this.state.products.data}
                //keyExtractor={(item) => item.IdOperacion}
                renderItem={this.renderProducts}
              />
            </View>
            <View style={{ marginTop: 25 }}>
              <Text
                style={{
                  marginTop: 15,
                  marginBottom: 15,
                  color: theme.colorSubTitle
                }}
              >
                PAGAR
              </Text>
              <FlatList
                style={styles.viewMenu}
                data={this.state.payments.data}
                //keyExtractor={(item) => item.IdOperacion}
                renderItem={this.renderPayments}
              />
            </View>
            <View style={{ marginTop: 25 }}>
              <Text
                style={{
                  marginTop: 15,
                  marginBottom: 15,
                  color: theme.colorSubTitle
                }}
              >
                TRANSFERENCIAS
              </Text>
              <FlatList
                style={styles.viewMenu}
                data={this.state.transferences.data}
                //keyExtractor={(item) => item.IdOperacion}
                renderItem={this.renderTransferences}
              />
            </View>
            
            <View style={{ marginTop: 25 }}>
              <Text
                style={{
                  marginTop: 15,
                  marginBottom: 15,
                  color: theme.colorSubTitle
                }}
              >
                OTRAS FUNCIONALIDADES
              </Text>
              <FlatList
                style={styles.viewMenu}
                data={this.state.others.data}
                //keyExtractor={(item) => item.IdOperacion}
                renderItem={this.renderOthers}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: theme.margin,
    paddingRight: theme.margin,
    marginBottom: 15
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
  }
});
