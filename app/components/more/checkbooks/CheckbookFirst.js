import React, { PureComponent } from 'react';

import { Text, View, StyleSheet, FlatList } from 'react-native';

import theme from '../../../theme/theme';
import CheckbookItem from './CheckbookItem';

export default class CheckbookFirst extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      checkbooks: [
        { Id: 1, Desc: 'CC - 390006', Saldo: '$ 1.747.235,00', Type: 'CC' },
        { Id: 2, Desc: 'CA - 390007', Saldo: '$ 3.707.245,00', Type: 'CA' }
      ],
      lastItem: {}
    };
    this.renderCheckbooks = this.renderCheckbooks.bind(this);
  }

  renderCheckbooks({ item }) {
    let lastItem = this.state.checkbooks[this.state.checkbooks.length - 1];

    return (
      <CheckbookItem
        item={item}
        lastItem={lastItem}
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
          data={this.state.checkbooks}
          renderItem={
            this.renderCheckbooks //keyExtractor={(item) => item.IdOperacion}
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
