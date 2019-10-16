import React, { PureComponent } from 'react';

import { Text, View, StyleSheet, FlatList } from 'react-native';

import theme from '../../theme/theme';

import PayTypeItem from './PayTypeItem';

export default class PayTypeHome extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      payments: [
        {
          title: 'Pago de Tarjetas',
          id: 1,
          type: 'PT',
          data: [
            {
              Id: 1,
              Desc: 'CC - 390006',
              Saldo: '$ 1.747.235,00',
              Type: 'CC',
              Cards: [
                {
                  Id: 1,
                  Title: 'TARJETAS DE CRÉDITO',
                  Type: 'TC',
                  Data: [
                    {
                      Id: 1,
                      Desc: 'Oro Empres',
                      Saldo: '$ 47.235,00',
                      Number: '1234 **** **** 5678',
                      PayOptions: [
                        { Id: 1, Desc: 'Pago Mínimo', Type: 'PM' },
                        { Id: 2, Desc: 'Otro Monto', Type: 'OM' }
                      ]
                    },
                    {
                      Id: 2,
                      Desc: 'Oro Empres',
                      Saldo: '$ 47.235,00',
                      Number: '1234 **** **** 5678',
                      PayOptions: [
                        { Id: 1, Desc: 'Pago Mínimo', Type: 'PM' },
                        { Id: 2, Desc: 'Otro Monto', Type: 'OM' }
                      ]
                    }
                  ]
                },
                {
                  Id: 2,
                  Title: 'TARJETAS PREPAGADAS',
                  Type: 'TP',
                  Data: [
                    {
                      Id: 1,
                      Desc: 'Prepg 2',
                      Saldo: '$ 47.235,00',
                      Number: '1234 **** **** 5678',
                      PayOptions: [
                        { Id: 1, Desc: 'Pago Mínimo', Type: 'PM' },
                        { Id: 2, Desc: 'Otro Monto', Type: 'OM' }
                      ]
                    },
                    {
                      Id: 2,
                      Desc: 'Prepg 2',
                      Saldo: '$ 47.235,00',
                      Number: '1234 **** **** 5678',
                      PayOptions: [
                        { Id: 1, Desc: 'Pago Mínimo', Type: 'PM' },
                        { Id: 2, Desc: 'Otro Monto', Type: 'OM' }
                      ]
                    }
                  ]
                },
                {
                  Id: 3,
                  Title: 'TARJETAS A TERCEROS',
                  Type: 'TP',
                  Data: [
                    {
                      Id: 1,
                      Desc: 'Prex',
                      Number: '1234 **** **** 5678',
                      PayOptions: [
                        { Id: 1, Desc: 'Pago Mínimo', Type: 'PM' },
                        { Id: 2, Desc: 'Otro Monto', Type: 'OM' }
                      ]
                    },
                    {
                      Id: 2,
                      Desc: 'Prex',
                      Number: '1234 **** **** 5678',
                      PayOptions: [
                        { Id: 1, Desc: 'Pago Mínimo', Type: 'PM' },
                        { Id: 2, Desc: 'Otro Monto', Type: 'OM' }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              Id: 2,
              Desc: 'CC - 390007',
              Saldo: '$ 3.707.245,00',
              Type: 'CC',
              Cards: [
                {
                  Id: 1,
                  Title: 'TARJETAS DE CRÉDITO',
                  Type: 'TC',
                  Data: [
                    {
                      Id: 1,
                      Desc: 'Oro Empres',
                      Saldo: '$ 47.235,00',
                      Number: '1234 **** **** 5678',
                      PayOptions: [
                        { Id: 1, Desc: 'Pago Mínimo', Type: 'PM' },
                        { Id: 2, Desc: 'Otro Monto', Type: 'OM' }
                      ]
                    },
                    {
                      Id: 2,
                      Desc: 'Oro Empres',
                      Saldo: '$ 47.235,00',
                      Number: '1234 **** **** 5678',
                      PayOptions: [
                        { Id: 1, Desc: 'Pago Mínimo', Type: 'PM' },
                        { Id: 2, Desc: 'Otro Monto', Type: 'OM' }
                      ]
                    }
                  ]
                },
                {
                  Id: 2,
                  Title: 'TARJETAS PREPAGADAS',
                  Type: 'TP',
                  Data: [
                    {
                      Id: 1,
                      Desc: 'Prepg 2',
                      Saldo: '$ 47.235,00',
                      Number: '1234 **** **** 5678',
                      PayOptions: [
                        { Id: 1, Desc: 'Pago Mínimo', Type: 'PM' },
                        { Id: 2, Desc: 'Otro Monto', Type: 'OM' }
                      ]
                    },
                    {
                      Id: 2,
                      Desc: 'Prepg 2',
                      Saldo: '$ 47.235,00',
                      Number: '1234 **** **** 5678',
                      PayOptions: [
                        { Id: 1, Desc: 'Pago Mínimo', Type: 'PM' },
                        { Id: 2, Desc: 'Otro Monto', Type: 'OM' }
                      ]
                    }
                  ]
                },
                {
                  Id: 3,
                  Title: 'TARJETAS A TERCEROS',
                  Type: 'TP',
                  Data: [
                    {
                      Id: 1,
                      Desc: 'Prex',
                      Number: '1234 **** **** 5678',
                      PayOptions: [
                        { Id: 1, Desc: 'Pago Mínimo', Type: 'PM' },
                        { Id: 2, Desc: 'Otro Monto', Type: 'OM' }
                      ]
                    },
                    {
                      Id: 2,
                      Desc: 'Prex',
                      Number: '1234 **** **** 5678',
                      PayOptions: [
                        { Id: 1, Desc: 'Pago Mínimo', Type: 'PM' },
                        { Id: 2, Desc: 'Otro Monto', Type: 'OM' }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Pago de Préstamos',
          type: 'PP',
          id: 2,
          data: [
            {
              Id: 1,
              Desc: 'CC - 3900066',
              Saldo: ' $ 1.747.235,00',
              Type: 'CC',
              Loans: [
                {
                  Id: 1,
                  Desc: 'PT - Préstamo Vivienda',
                  Saldo: '$ 47.235,00 en 5 cuotas',
                  Cuota: 'Cuota 1: $10,000',
                  PayOptions: [
                    { Id: 1, Desc: 'Pagar adeudado a la fecha', Type: 'PM' },
                    { Id: 2, Desc: 'Otro Monto', Type: 'OM' }
                  ]
                },
                {
                  Id: 2,
                  Desc: 'PT - Préstamo Vivienda',
                  Saldo: '$ 47.235,00 en 5 cuotas',
                  Cuota: 'Cuota 1: $10,000',
                  PayOptions: [
                    { Id: 1, Desc: 'Pagar adeudado a la fecha', Type: 'PM' },
                    { Id: 2, Desc: 'Otro Monto', Type: 'OM' }
                  ]
                }
              ]
            },
            {
              Id: 2,
              Desc: 'CC - 3900077',
              Saldo: ' $ 1.747.235,00',
              Type: 'CC',
              Loans: [
                {
                  Id: 1,
                  Desc: 'PT - Préstamo Vivienda',
                  Saldo: '$ 47.235,00 en 5 cuotas',
                  Cuota: 'Cuota 1: $10,000',
                  PayOptions: [
                    { Id: 1, Desc: 'Pagar adeudado a la fecha', Type: 'PM' },
                    { Id: 2, Desc: 'Otro Monto', Type: 'OM' }
                  ]
                },
                {
                  Id: 2,
                  Desc: 'PT - Préstamo Vivienda',
                  Saldo: '$ 47.235,00 en 5 cuotas',
                  Cuota: 'Cuota 1: $10,000',
                  PayOptions: [
                    { Id: 1, Desc: 'Pagar adeudado a la fecha', Type: 'PM' },
                    { Id: 2, Desc: 'Otro Monto', Type: 'OM' }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Pago de Servicios',
          type: 'PS',
          id: 3,

          publicServices: [
            {
              Id: 1,
              Desc: 'Cable Onda',
              Type: 'CC',
              debitAccounts: [
                {
                  Id: 1,
                  Desc: 'CC - 3900077',
                  Saldo: ' $ 1.747.235,00',
                  Type: 'CC'
                },
                {
                  Id: 2,
                  Desc: 'CC - 3900076',
                  Saldo: ' $ 1.747.235,00',
                  Type: 'CC'
                }
              ]
            },
            {
              Id: 2,
              Desc: 'ENSA',
              Type: 'CC',
              debitAccounts: [
                {
                  Id: 1,
                  Desc: 'CC - 3900077',
                  Saldo: ' $ 1.747.235,00',
                  Type: 'CC'
                },
                {
                  Id: 2,
                  Desc: 'CC - 3900076',
                  Saldo: ' $ 1.747.235,00',
                  Type: 'CC'
                }
              ]
            },
            {
              Id: 3,
              Desc: 'Cable & Wireless',
              Type: 'CC',
              debitAccounts: [
                {
                  Id: 1,
                  Desc: 'CC - 3900077',
                  Saldo: ' $ 1.747.235,00',
                  Type: 'CC'
                },
                {
                  Id: 2,
                  Desc: 'CC - 3900076',
                  Saldo: ' $ 1.747.235,00',
                  Type: 'CC'
                }
              ]
            },
            {
              Id: 4,
              Desc: 'IDAAN',
              Type: 'CC',
              debitAccounts: [
                {
                  Id: 1,
                  Desc: 'CC - 3900077',
                  Saldo: ' $ 1.747.235,00',
                  Type: 'CC'
                },
                {
                  Id: 2,
                  Desc: 'CC - 3900076',
                  Saldo: ' $ 1.747.235,00',
                  Type: 'CC'
                }
              ]
            },
            {
              Id: 5,
              Desc: 'GAS NATURAL FENOSA',
              Type: 'CC',
              debitAccounts: [
                {
                  Id: 1,
                  Desc: 'CC - 3900077',
                  Saldo: ' $ 1.747.235,00',
                  Type: 'CC'
                },
                {
                  Id: 2,
                  Desc: 'CC - 3900076',
                  Saldo: ' $ 1.747.235,00',
                  Type: 'CC'
                }
              ]
            }
          ],

          taxesServices: [
            {
              Id: 1,
              Desc: 'Min. de Economía y Finanzas',
              Type: 'CC',
              debitAccounts: [
                {
                  Id: 1,
                  Desc: 'CC - 3900077',
                  Saldo: ' $ 1.747.235,00',
                  Type: 'CC'
                },
                {
                  Id: 2,
                  Desc: 'CC - 3900076',
                  Saldo: ' $ 1.747.235,00',
                  Type: 'CC'
                }
              ]
            }
          ],

          otherServices: [
            {
              Id: 1,
              Desc: 'MAPFRE S.A.',
              Type: 'CC',
              debitAccounts: [
                {
                  Id: 1,
                  Desc: 'CC - 3900077',
                  Saldo: ' $ 1.747.235,00',
                  Type: 'CC'
                },
                {
                  Id: 2,
                  Desc: 'CC - 3900076',
                  Saldo: ' $ 1.747.235,00',
                  Type: 'CC'
                }
              ]
            },
            {
              Id: 2,
              Desc: 'Microsoft',
              Type: 'CC',
              debitAccounts: [
                {
                  Id: 1,
                  Desc: 'CC - 3900077',
                  Saldo: ' $ 1.747.235,00',
                  Type: 'CC'
                },
                {
                  Id: 2,
                  Desc: 'CC - 3900076',
                  Saldo: ' $ 1.747.235,00',
                  Type: 'CC'
                }
              ]
            },
            {
              Id: 3,
              Desc: 'Escuela Bilingue Saint John',
              Type: 'CC',
              debitAccounts: [
                {
                  Id: 1,
                  Desc: 'CC - 3900077',
                  Saldo: ' $ 1.747.235,00',
                  Type: 'CC'
                },
                {
                  Id: 2,
                  Desc: 'CC - 3900076',
                  Saldo: ' $ 1.747.235,00',
                  Type: 'CC'
                }
              ]
            }
          ]
        }
      ]
    };

    this.renderPayTypes = this.renderPayTypes.bind(this);
  }

  renderPayTypes({ item }) {
    return <PayTypeItem item={item} navigation={this.props.navigation} />;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            marginTop: 15,
            marginBottom: 10,
            color: theme.colorSubTitle
          }}
        >
          TIPO DE PAGO
        </Text>
        <FlatList
          style={styles.viewMenu}
          data={this.state.payments}
          renderItem={
            this.renderPayTypes //keyExtractor={(item) => item.IdOperacion}
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },

  viewMenu: {
    flex: 1,
    padding: theme.paddingList
  }
});
