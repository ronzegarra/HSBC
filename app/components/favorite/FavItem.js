
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
import Swipeable from 'react-native-swipeable';
import theme from '../../theme/theme';

import Icon from 'react-native-vector-icons/FontAwesome';

const rightContent = <Text style={{ left: 10, color: 'transparent' }}>A</Text>;

export default class FavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      star: false,
      right: new Animated.Value(0),
      height: new Animated.Value(70),
      iconColor: '#cdcdcd',
      deleted: false,
      released: false,
      alphabet: 'A'
    };

    this.release = this.release.bind(this);
  }

  release() {
    this.setState({ deleted: true });
    Animated.timing(this.state.right, {
      toValue: theme.width
    }).start();
    let self = this;
    setTimeout(function() {
      Animated.timing(self.state.height, {
        toValue: 0
      }).start(function onComplete() {
        self.props.deleteItem(self.props.item.Id);
      });
    }, 200);
  }

  render() {
    return <Animated.View style={{ flex: 1, right: this.state.right, height: this.state.height }}>
        <Swipeable rightActionActivationDistance={125} onRightActionRelease={this.release} style={{ flex: 1, paddingLeft: theme.margin - 5, paddingRight: theme.margin - 5, flexDirection: 'row', width: theme.width }} rightContent={rightContent}>
          <TouchableOpacity style={{ flex: 1, backgroundColor: '#FFFFFF', flexDirection: 'row', elevation: 2, paddingLeft: 10, paddingRight: 10, justifyContent: 'space-between', alignItems: 'center', borderRadius: 4, margin: 5 }}>
            <View style={{ width: 35, height: 28 }}>
              {this.props.item.Type === 'CC' ? (
                <Image
                  source={require('../../img/RecursosHSBC/Favorites/Cartera.png')}
                  resizeMode={'stretch'}
                  style={{ flex: 1, width: undefined }}
                />
              ) : this.props.item.Type === 'TT' ? (
                <Image
                  source={require('../../img/RecursosHSBC/Favorites/T_terceros.png')}
                  resizeMode={'stretch'}
                  style={{ height: 30, width: 30 }}
                />
              ) : this.props.item.Type === 'PR' ? (
                <Image
                  source={require('../../img/RecursosHSBC/Favorites/tarjeta.png')}
                  resizeMode={'stretch'}
                  style={{ flex: 1, width: undefined }}
                />
              ) : null}
            </View>
            <View style={{ flex: 1, paddingLeft: 10 }}>
              <Text style={styles.title}>{this.props.item.Desc}</Text>
              {this.props.item.Type !== 'TT' ? <Text
                  style={{ fontSize: theme.txtNormal }}
                >
                  {this.props.item.Saldo}{' '}
                </Text> : null}

              {this.props.item.Type === 'CC' ? <Text
                  style={{ fontSize: theme.txtVerySmall }}
                >
                  Saldo Disponible
                </Text> : this.props.item.Type === 'TT' ? <Text
                  style={{ fontSize: theme.txtVerySmall }}
                >
                  Acceso rápido
                </Text> : this.props.item.Type === 'PR' ? <Text
                  style={{ fontSize: theme.txtVerySmall }}
                >
                  1234 **** **** 5678
                </Text> : null}
            </View>
            <Text>
              <Icon name="angle-right" size={30} color="#0C0C0C" />
            </Text>
          </TouchableOpacity>
        </Swipeable>
      </Animated.View>;
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: theme.txtNormal,
    color: 'black',
    fontWeight: 'bold'
  }
});
