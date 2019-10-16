import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import theme from '../../theme/theme';
import ProdItem from './ProdItem';

export default class ProdCCItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activateCC: false
    };

    this.activateCCProduct = this.activateCCProduct.bind(this);
    this.viewMore = this.viewMore.bind(this);
  }

  activateCCProduct(value) {
    value === true
      ? this.setState({ activateCC: false })
      : this.setState({ activateCC: true });
  }

  viewMore() {
    return (
      <View>
        {this.props.item.data.map(item => {
          return (
            <View>
              <ProdItem
                key={item.Id + '-' + item.Type}
                item={item}
                navigation={this.props.navigation}
              />
            </View>
          );
        })}
      </View>
    );
  }

  render() {
    return (
      <View>
        <View style={{ padding: 2 }}>
          <TouchableOpacity
            onPress={() => this.activateCCProduct(this.state.activateCC)}
            style={{
              backgroundColor: '#e02030',
              flex: 1,
              flexDirection: 'row',
              elevation: 2,
              padding: 10,
              paddingTop: 5,
              paddingBottom: 5,
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 4,
              marginBottom: 10,
              height: 65
            }}
          >
            <View style={{ width: 30, height: 30, position: 'relative', top: 5 }}>
              <Image
                source={require('../../img/RecursosHSBC/Products/whitewallet.png')}
                resizeMode={'cover'}
                style={{ height: 23, width: undefined }}
              />
            </View>
            <View style={{ flex: 1, paddingLeft: 10 }}>
              <Text style={styles.title}>{''}</Text>
              <Text style={{ fontSize: theme.txtNormal, color: '#FFFFFF' }}>
                $65,065.00
              </Text>
              <Text style={{ fontSize: theme.txtVerySmall, color: '#FFFFFF' }}>
                Total Consolidado en Dólares
              </Text>
            </View>

            <View style={{ width: 25, height: 25, marginRight: 20 }}>
              <Image
                source={require('../../img/RecursosHSBC/Products/circuloblanco.png')}
                resizeMode={'cover'}
                style={{ flex: 1, width: undefined }}
              />
              <View style={{ position: 'absolute' }}>
                <Text
                  style={{
                    color: '#e02030',
                    paddingLeft: 8,
                    paddingTop: 3
                  }}
                >
                  {this.props.item.data.length}
                </Text>
              </View>
            </View>

            {this.state.activateCC ? (
              <Text>
                <Icon name="angle-down" size={30} color="#FFFFFF" />
              </Text>
            ) : (
              <Text>
                <Icon name="angle-right" size={30} color="#FFFFFF" />
              </Text>
            )}
          </TouchableOpacity>
        </View>
        {this.state.activateCC ? this.viewMore() : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: theme.txtNormal,
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});
