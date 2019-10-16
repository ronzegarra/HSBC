import React, { Component, PureComponent } from 'react';

import { Text, View, StyleSheet, FlatList } from 'react-native';

import theme from '../../../theme/theme';
import PayCardsItem from './PayCardsItem';

export default class PayCardsFirst extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.state.params.data,
      lastItem: this.props.navigation.state.params.lastItem
    };

    this.renderPayCards = this.renderPayCards.bind(this);
  }

  renderPayCards({ item }) {
    this.setState({
      last: this.props.navigation.state.params.last
    });

    return (
      <PayCardsItem
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
          CUENTA DÉBITO
        </Text>
        <FlatList
          style={styles.viewMenu}
          data={this.state.data}
          renderItem={
            this.renderPayCards //keyExtractor={(item) => item.IdOperacion}
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
