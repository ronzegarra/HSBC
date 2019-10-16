/**
 * Created by ggoma on 2016. 11. 26..
 */
import React, { Component } from 'react';
import {
  Animated,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';

const { width } = Dimensions.get('window');

import Ionicons from 'react-native-vector-icons/Ionicons';

import Icon from 'react-native-vector-icons/FontAwesome';

import Swipeable from 'react-native-swipeable';
import theme from '../../../theme/theme';

const rightContent = <Text style={{ left: 10, color: 'transparent' }}>A</Text>;

const selectedItems = [];

export default class PendingAuthorizationItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      star: false,
      right: new Animated.Value(0),
      height: new Animated.Value(70),
      iconColor: '#cdcdcd',
      deleted: false,
      released: false,
      alphabet: 'A', //selected: false,
      //selectedItems:[],

      selectedItems: [],
      lengthSelectedItems: 0,
      selected: false
    };

    this.renderImage = this.renderImage.bind(this);
    this.renderImageSelected = this.renderImageSelected.bind(this);
    this.chooseItem = this.chooseItem.bind(this);
  }

  renderImageSelected(type) {
    switch (type) {
      case 'TR':
        return (
          <Image
            source={require('../../../img/RecursosHSBC/More/Pendings/PendientesOtrosBancosBlanco.png')}
            resizeMode={'stretch'}
            style={{ flex: 1, width: undefined }}
          />
        );
      case 'PAY':
        return (
          <Image
            source={require('../../../img/RecursosHSBC/More/Pendings/PendientesPagarBlanco.png')}
            resizeMode={'stretch'}
            style={{ flex: 1, width: undefined }}
          />
        );
    }
  }

  renderImage(type) {
    switch (type) {
      case 'TR':
        return (
          <Image
            source={require('../../../img/RecursosHSBC/More/Pendings/PendientesOtrosBancosRojo.png')}
            resizeMode={'stretch'}
            style={{ flex: 1, width: undefined }}
          />
        );
      case 'PAY':
        return (
          <Image
            source={require('../../../img/RecursosHSBC/More/Pendings/PendientesPagarRojo.png')}
            resizeMode={'stretch'}
            style={{ flex: 1, width: undefined }}
          />
        );
    }
  }

  chooseItem(value) {
    let index = selectedItems.findIndex(c => c == value);

    if (index > -1) {
      selectedItems.splice(index, 1);
      this.setState({ selected: false });
    } else {
      selectedItems.push(value);
      this.setState({ selected: true });
    }
    this.props.showOptions(selectedItems.length);
  }

  render() {
    return !this.state.selected ? (
      <View>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            elevation: 2,
            paddingLeft: 10,
            paddingRight: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 4,
            margin: 5,
            paddingTop: 5,
            paddingBottom: 5
          }}
          onPress={() => this.chooseItem(this.props.item.Id)}
        >
          <View style={{ width: 33, height: 33 }}>
            {this.renderImage(this.props.item.Type)}
          </View>
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <Text style={styles.title}>{this.props.item.Desc}</Text>
            <Text style={{ fontSize: theme.txtNormal }}>
              {this.props.item.Saldo}
            </Text>
            <Text style={{ fontSize: theme.txtVerySmall }}>
              {this.props.item.SubDesc}
            </Text>
          </View>
          <View >
            <Text style={{ fontSize: 8, top: -4 }}>{this.props.item.Date}</Text>

            <Text style={{ paddingLeft: 30, top: -4 }}>
              <Icon name="angle-right" size={30} color="#0C0C0C" />
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    ) : (
      <View>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: theme.colorPrincipal,
            flexDirection: 'row',
            elevation: 2,
            paddingLeft: 10,
            paddingRight: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 4,
            margin: 5,
            paddingTop: 5,
            paddingBottom: 5
          }}
          onPress={() => this.chooseItem(this.props.item.Id)}
        >
          <View style={{ width: 30, height: 30 }}>
            {this.renderImageSelected(this.props.item.Type)}
          </View>
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <Text style={styles.titleSelected}>{this.props.item.Desc}</Text>
            <Text style={styles.saldoSelected}>{this.props.item.Saldo}</Text>
            <Text style={styles.descriptionSelected}>
              {this.props.item.SubDesc}
            </Text>
          </View>
          <View >
            <Text style={{ fontSize: 8, top: -4, color: 'white' }}>
              {this.props.item.Date}
            </Text>
            <Text style={{ paddingLeft: 30, top: -4 }}>
              <Icon name="angle-right" size={30} color="white" />
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: theme.txtNormal,
    color: 'black',
    fontWeight: 'bold'
  },

  titleSelected: {
    fontSize: theme.txtNormal,
    color: 'white',
    fontWeight: 'bold'
  },

  saldoSelected: {
    fontSize: theme.txtNormal,
    color: 'white'
  },

  descriptionSelected: {
    fontSize: theme.txtVerySmall,
    color: 'white'
  }
});
