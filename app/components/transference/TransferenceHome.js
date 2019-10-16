import React, { PureComponent } from 'react';

import { Text, View, StyleSheet, FlatList } from 'react-native';

import theme from '../../theme/theme';

import TransferenceItem from './TransferenceItem';

export default class TransferenceHome extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      transferences: [
        {
          title: 'Transferencia a Cuentas Propias',
          id: 1,
          type: 'TCP',
          data: [
            {
              Id: 1,
              Desc: 'CC - 390006',
              Saldo: '$ 1.747.235,00',
              Type: 'CC',
              cuentaAgendada: [
                {
                  Id: 1,
                  Desc: 'CC - 390008 +',
                  Saldo: '$ 47.235,00',
                  Type: 'CC'
                },
                {
                  Id: 2,
                  Desc: 'CC - 390008 -',
                  Saldo: '$ 47.235,00',
                  Type: 'CC'
                }
              ]
            },
            {
              Id: 2,
              Desc: 'CA - 390007',
              Saldo: '$ 3.707.245,00',
              Type: 'CC',
              cuentaAgendada: [
                {
                  Id: 1,
                  Desc: 'CC - 390010',
                  Saldo: ' $ 47.235,00',
                  Type: 'CC'
                },
                {
                  Id: 2,
                  Desc: 'CC - 390010',
                  Saldo: '$ 47.235,00',
                  Type: 'CC'
                }
              ]
            }
          ]
        },
        {
          title: 'Transferencia a Terceros',
          type: 'TT',
          id: 2,
          data: [
            {
              Id: 1,
              Desc: 'CC - 3900066',
              Saldo: ' $ 1.747.235,00',
              Type: 'CC',
              cuentaAgendada: [
                {
                  Id: 1,
                  Desc: 'CC - 390008 +',
                  Saldo: ' $ 47.235,00',
                  Type: 'CC'
                },
                {
                  Id: 2,
                  Desc: 'CC - 390008 -',
                  Saldo: ' $ 47.235,00',
                  Type: 'CC'
                }
              ]
            },
            {
              Id: 2,
              Desc: 'CA - 3900066',
              Saldo: ' $ 3.707.245,00',
              Type: 'CA',
              cuentaAgendada: [
                {
                  Id: 1,
                  Desc: 'CC - 390010',
                  Saldo: ' $ 47.235,00',
                  Type: 'CC'
                },
                {
                  Id: 2,
                  Desc: 'CC - 390010',
                  Saldo: ' $ 47.235,00',
                  Type: 'CC'
                }
              ]
            }
          ]
        },
        {
          title: 'Transferencia a Otros Bancos',
          type: 'TOB',
          id: 3,
          cuentaAgendada: [
            {
              Id: 1,
              Desc: 'CC - 390010',
              Saldo: ' $ 47.235,00',
              Type: 'CC'
            },
            {
              Id: 2,
              Desc: 'CC - 390010',
              Saldo: ' $ 47.235,00',
              Type: 'CC'
            }
          ]
        },
        {
          title: 'Transferencia Internacional',
          type: 'TI',
          id: 4,
          data: [
            {
              Id: 1,
              Desc: 'CC - 3900066',
              Saldo: ' $ 1.747.235,00',
              Type: 'CC',
              cuentaAgendada: [
                {
                  Id: 1,
                  Desc: 'CC - 390008 +',
                  Saldo: ' $ 47.235,00',
                  Type: 'CC'
                },
                {
                  Id: 2,
                  Desc: 'CC - 390008 -',
                  Saldo: ' $ 47.235,00',
                  Type: 'CC'
                }
              ]
            },
            {
              Id: 2,
              Desc: 'CA - 3900066',
              Saldo: ' $ 3.707.245,00',
              Type: 'CA',
              cuentaAgendada: [
                {
                  Id: 1,
                  Desc: 'CC - 390010',
                  Saldo: ' $ 47.235,00',
                  Type: 'CC'
                },
                {
                  Id: 2,
                  Desc: 'CC - 390010',
                  Saldo: ' $ 47.235,00',
                  Type: 'CC'
                }
              ]
            }
          ]
        }
      ]
    };

    this.renderTransferences = this.renderTransferences.bind(this);
  }

  renderTransferences({ item }) {
    return <TransferenceItem item={item} navigation={this.props.navigation} />;
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
          TIPO DE TRANSFERENCIA
        </Text>
        <FlatList
          style={styles.viewMenu}
          data={this.state.transferences}
          //keyExtractor={(item) => item.IdOperacion}
          renderItem={this.renderTransferences}
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
