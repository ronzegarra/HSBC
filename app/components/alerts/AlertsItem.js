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
  StyleSheet,
  ImageBackground
} from 'react-native';

const { width } = Dimensions.get('window');

import Swipeable from 'react-native-swipeable';
import theme from '../../theme/theme';

const rightContent = <Text style={{ left: 10, color: 'transparent' }}>A</Text>;

const selectedItems = [];

export default class AlertsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      star: false,
      right: new Animated.Value(0),
      height: new Animated.Value(70),
      iconColor: '#cdcdcd',
      deleted: false,
      released: false,
      alphabet: 'A',
      selectedItems: [],
      lengthSelectedItems: 0,
      selected: false
    };

    this.renderImage = this.renderImage.bind(this);

    this.chooseItem = this.chooseItem.bind(this);
  }

  renderImage(type) {
    switch (type) {
      case 'NP':
        return (
          <Image
            source={require('../../img/RecursosHSBC/Alerts/pendientes.png')}
            resizeMode={'stretch'}
            style={{ flex: 1, width: undefined }}
          />
        );
      case 'NT':
        return (
          <Image
            source={require('../../img/RecursosHSBC/Alerts/transferir-copia.png')}
            resizeMode={'stretch'}
            style={{ flex: 1, width: undefined }}
          />
        );
      case 'PP':
        return (
          <Image
            source={require('../../img/RecursosHSBC/Alerts/pagar-copia.png')}
            resizeMode={'stretch'}
            style={{ flex: 1, width: undefined }}
          />
        );
      case 'DESCUENTO':
        return (
          <Image
            source={require('../../img/RecursosHSBC/Alerts/chronometer.png')}
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

  colorCard = (cardType) => {
    switch (cardType) {
      case 'NP':
      case 'NT':
        return '#e02030';
      case 'PP':
      case 'DESCUENTO':
        return '#474747';
    }
  }

  render() {
    let bodyCard = (
      <View
        style={{
          width: '100%',
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
          flex: 1,
          paddingLeft: 30,
          paddingRight: 15,
          paddingTop: 5,
        }}
      >
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 5
        }}>
          <Text style={styles.title}>{this.props.item.Desc}</Text>
          <Text style={styles.date}>{this.props.item.Date}</Text>
        </View>
        <Text style={{ fontSize: theme.txtVerySmall, flex: 2 }}>
          {this.props.item.SubDesc}
        </Text>
      </View>
    )

    if (this.props.item.Type === 'DESCUENTO') {
      bodyCard = (
          <ImageBackground
            source={require('../../img/RecursosHSBC/Products/fondoChild.png')}
            style={styles.image}
          >
            <View
              style={{
                width: '100%',
                borderTopRightRadius: 4,
                borderBottomRightRadius: 4,
                flex: 1,
                paddingLeft: 30,
                paddingTop: 5,
              }}
            >
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 5
              }}>
              <Text style={[styles.title, {color: 'white'}]}>{this.props.item.Desc}</Text>
              <Text style={[styles.date, {color: 'white'}]}>{this.props.item.Date}</Text>
            </View>
            <Text style={{ fontSize: theme.txtVerySmall, flex: 2, color: 'white' }}>
              {this.props.item.SubDesc}
            </Text>
          </View>
          </ImageBackground>
      )
    }

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          elevation: 2,
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 4,
          margin: 5,
          height: 65,
          position: 'relative'
        }}
      >
        <View
          style={{
            width: '8%',
            height: 65,
            backgroundColor: this.colorCard(this.props.item.Type),
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4
          }}
        >
        </View>

        <View
          style={{
            width: 35,
            height: 35,
            left: '3%',
            position: 'absolute',
            zIndex: 1
          }}
        >
          {this.renderImage(this.props.item.Type)}
        </View>

        {bodyCard}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: theme.txtSmall,
    color: 'black',
    fontWeight: 'bold'
  },

  date: {
    fontSize: theme.txtVerySmall,
    color: '#a1a1a1',
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
  },

  image: {
    paddingRight: 15,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    flex: 1,
    resizeMode: 'cover',
    overflow: 'hidden',
    width: '100%'
  },
});
