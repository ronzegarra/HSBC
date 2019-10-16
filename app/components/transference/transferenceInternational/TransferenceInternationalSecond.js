import React, { PureComponent } from 'react';

import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import theme from '../../../theme/theme';
import TransferenceInternationalSubItem from './TransferenceInternationalSubItem';

export default class TransferenceInternationalSecond extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.state.params.data,
      lastItem: this.props.navigation.state.params.lastItem
    };
    this.renderTransferencesThirdSecond = this.renderTransferencesThirdSecond.bind(
      this
    );
    this.addNewCreditAccount = this.addNewCreditAccount.bind(this);
  }

  renderTransferencesThirdSecond({ item }) {
    return (
      <TransferenceInternationalSubItem
        item={item}
        lastItem={this.state.lastItem}
        navigation={this.props.navigation}
      />
    );
  }

  addNewCreditAccount() {
    this.props.navigation.navigate(
      'TransferenciasInternacionales_NuevaCuentaCredito'
    );
  }

  render() {
    return <View style={styles.container}>
        <Text style={{ marginTop: 15, marginBottom: 15, color: theme.colorSubTitle }}>
          CUENTA CRÉDITO
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.addNewCreditAccount()}>
            <Image source={require('../../../img/RecursosHSBC/Transferences/add.png')} resizeMode={'cover'} style={{ height: 30, width: 30 }} />
            <Text style={{ color: 'black', paddingLeft: 12, paddingTop: 5, fontWeight: 'bold' }}>
              Agregar una Cuenta Crédito
            </Text>
          </TouchableOpacity>
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
