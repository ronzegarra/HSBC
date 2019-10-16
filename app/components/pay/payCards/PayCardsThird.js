import React, { Component, PureComponent } from 'react';

import { Text, View, StyleSheet, FlatList } from 'react-native';

import theme from '../../../theme/theme';
import PayCardsSubSubItem from './PayCardsSubSubItem';

export default class PayCardsThird extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { data: this.props.navigation.state.params.data };

    this.renderPayOptions = this.renderPayOptions.bind(this);
  }

  renderPayOptions({ item }) {
    return (
      <PayCardsSubSubItem item={item} navigation={this.props.navigation} />
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
          OPCIONES DE PAGO
        </Text>
        <FlatList
          style={styles.viewMenu}
          data={this.state.data}
          renderItem={
            this.renderPayOptions //keyExtractor={(item) => item.IdOperacion}
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
