import React, { PureComponent } from 'react';

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';

import theme from '../../../theme/theme';
import TransferenceOtherBanksItem from './TransferenceOtherBanksItem';

export default class TransferenceOtherBanksFirst extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.state.params.data,
      lastItem: this.props.navigation.state.params.lastItem
    };
    this.renderTransferencesOtherBanksFirst = this.renderTransferencesOtherBanksFirst.bind(
      this
    );
    this.addNewCreditAccount = this.addNewCreditAccount.bind(this);
  }

  addNewCreditAccount() {
    this.props.navigation.navigate(
      'TransferenciasOtrosBancos_NuevaCuentaCredito'
    );
  }

  renderTransferencesOtherBanksFirst({ item }) {
    return (
      <TransferenceOtherBanksItem
        item={item}
        lastItem={this.state.lastItem}
        navigation={this.props.navigation}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            marginTop: 15,
            marginBottom: 15,
            color: theme.colorSubTitle
          }}
        >
          CUENTA CRÉDITO
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ flexDirection: 'row' }}
            onPress={() => this.addNewCreditAccount()}
          >
            <Image
              source={require('../../../img/RecursosHSBC/Transferences/add.png')}
              resizeMode={'cover'}
              style={{ height: 30, width: 30 }}
            />
            <Text style={{ color: 'black', paddingLeft: 12, paddingTop: 5, fontWeight: 'bold' }}>
              Agregar una Cuenta Crédito
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            marginTop: 15,
            marginBottom: 15,
            color: theme.colorSubTitle
          }}
        >
          CUENTAS AGENDADAS
        </Text>

        <FlatList
          style={styles.viewMenu}
          data={this.state.data}
          //keyExtractor={(item) => item.IdOperacion}
          renderItem={this.renderTransferencesOtherBanksFirst}
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
