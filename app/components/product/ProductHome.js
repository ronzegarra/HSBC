import React, { PureComponent } from 'react';

import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';

import theme from '../../theme/theme';
import ProdCCItem from './ProdCCItem';
import ProdItem from './ProdItem';

export default class ProductHome extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 1,
          title: 'Cuentas Corrientes',
          type: 'CC',
          data: [
            {
              Id: 1,
              Desc: 'CC - 390006',
              Saldo: '$ 1,747,235.00',
              Type: 'CC'
            },
            {
              Id: 2,
              Desc: 'CC - 390006',
              Saldo: '$ 1,747,235.00',
              Type: 'CC'
            },
            {
              Id: 3,
              Desc: 'CC - 390006',
              Saldo: '$ 1,747,235.00',
              Type: 'CC'
            },
            {
              Id: 4,
              Desc: 'CC - 390006',
              Saldo: '$ 1,747,235.00',
              Type: 'CC'
            },
            {
              Id: 5,
              Desc: 'CC - 390006',
              Saldo: '$ 1,747,235.00',
              Type: 'CC'
            },
            {
              Id: 6,
              Desc: 'CC - 390006',
              Saldo: '$ 1,747,235.00',
              Type: 'CC'
            }
          ]
        },
        {
          id: 2,
          title: 'Cuentas de Ahorro',
          type: 'CA',
          data: [
            {
              Id: 1,
              Desc: 'CA - 490012',
              Saldo: '$ 3,707,245.00',
              Type: 'CA'
            }
          ]
        },
        {
          id: 3,
          title: 'Tarjetas de Crédito',
          type: 'TCREDITO',
          data: [
            {
              Id: 1,
              Desc: 'Oro Empres - PYG',
              Saldo: '$ 3,707,245.00',
              Type: 'TCREDITO'
            }
          ]
        },
        {
          id: 4,
          title: 'Tarjetas Prepagas',
          type: 'TPREPAGA',
          data: [
            {
              Id: 1,
              Desc: 'Prepg 2 - PYG',
              Saldo: '$ 1,567,235.00',
              Type: 'TPREPAGA'
            }
          ]
        },
        {
          id: 5,
          title: 'Préstamos',
          type: 'PRESTAMOS',
          data: [
            {
              Id: 1,
              Desc: 'PT - Préstamo Vivienda',
              Saldo: '$ 5,000,000.00',
              Type: 'PRESTAMOS'
            }
          ]
        },
        {
          id: 6,
          title: 'Depósito a Plazo Fijo',
          type: 'DPF',
          data: [
            {
              Id: 1,
              Desc: 'Depósito a Plazo Fijo',
              Saldo: '$ 5,000,000.00',
              Type: 'DPF'
            }
          ]
        }
      ],
      lengthCC: 0,
      lengthCA: 0,
      activate: true
    };

    this.renderProducts = this.renderProducts.bind(this);
  }

  renderProducts({ item }) {
    if (item.type === 'CC') {
      if (item.data.length < 5) {
        return (
          <View>
            <Text style={styles.sectionHeader}>{item.title}</Text>
            {item.data.map(item => {
              return (
                <View>
                  <ProdItem
                    key={item.Id + '-' + item.Type}
                    item={item}
                    navigation={this.props.navigation}
                  />
                </View>
              );
            })}
          </View>
        );
      } else {
        return (
          <View>
            <Text style={styles.sectionHeader}>{item.title}</Text>
            <ProdCCItem item={item} navigation={this.props.navigation} />
          </View>
        );
      }
    } else {
      return (
        <View>
          <Text style={styles.sectionHeader}>{item.title}</Text>
          {item.data.map(item => {
            return (
              <View>
                <ProdItem
                  key={item.Id + '-' + item.Type}
                  item={item}
                  navigation={this.props.navigation}
                />
              </View>
            );
          })}
        </View>
      );
    }
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <FlatList
              data={this.state.products} //keyExtractor={(item) => item.IdOperacion}
              renderItem={this.renderProducts}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    paddingLeft: theme.margin,
    paddingRight: theme.margin
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
  }
});
