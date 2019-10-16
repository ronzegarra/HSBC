import React, { Component, PureComponent } from 'react';
import Swipeable from 'react-native-swipeable';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  Image
} from 'react-native';

import theme from '../../theme/theme';
import FavItem from './FavItem';
const leftContent = <Text>Pull to activate</Text>;

const rightButtons = [
  <TouchableHighlight>
    <Text>Button 1</Text>
  </TouchableHighlight>,
  <TouchableHighlight>
    <Text>Button 2</Text>
  </TouchableHighlight>
];
export default class FavoriteHome extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      favorites: [
        {
          Id: 1,
          Desc: 'Pagar Servicio - TIGO',
          Type: 'CC',
          Saldo: 'Monto: $2000'
        },
        {
          Id: 2,
          Desc: 'Transferencia Terceros',
          Type: 'TT',
          Saldo: 'PYG 3.707.245,00'
        },
        { Id: 3, Desc: 'Prepag 2 - PYG', Type: 'PR', Saldo: 'Fecha de Cierre: 10/05/2018' }
      ]
    };

    this.renderFavorites = this.renderFavorites.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  renderFavorites(item) {
    return (
      <FavItem
        key={item.item.Id}
        item={item.item}
        deleteItem={data => this.deleteItem(data)}
        navigation={this.props.navigation}
      />
    );
  }

  deleteItem(id) {
    var array = this.state.favorites;
    for (var i = 0; i < array.length; i++) {
      if (array[i].Id == id) {
        array.splice(i, 1);
        break;
      }
    }
    console.warn('array ', JSON.stringify(array));
    this.setState({ favorites: array });
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            padding: 5
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: theme.txtSmall }}>
            Desliza hacia la izquierda para eliminar de favoritos
          </Text>
        </View>
        <FlatList
          data={this.state.favorites}
          style={{ flex: 1 }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderFavorites}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
