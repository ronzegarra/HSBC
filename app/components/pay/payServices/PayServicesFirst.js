import React, { PureComponent } from 'react';

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

import theme from '../../../theme/theme';
import PayServicesItem from './PayServicesItem';

export default class PayServicesFirst extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      dataPublicServices: this.props.navigation.state.params.dataPublicServices,
      dataTaxes: this.props.navigation.state.params.dataTaxes,
      dataOthers: this.props.navigation.state.params.dataOthers,

      optionPublic: true,
      optionTaxes: false,
      optionOthers: false,
      chooseOption: 'P'
    };

    this.chooseOptionPublic = this.chooseOptionPublic.bind(this);
    this.chooseOptionTaxes = this.chooseOptionTaxes.bind(this);
    this.chooseOptionOthers = this.chooseOptionOthers.bind(this);

    this.renderPublicServices = this.renderPublicServices.bind(this);
    this.renderTaxes = this.renderTaxes.bind(this);
    this.renderOthers = this.renderOthers.bind(this);
  }

  chooseOptionPublic() {
    this.setState({ chooseOption: 'P' });
    this.setState({ optionPublic: true });
    this.setState({ optionTaxes: false });
    this.setState({ optionOthers: false });
  }

  chooseOptionTaxes() {
    this.setState({ chooseOption: 'I' });
    this.setState({ optionPublic: false });
    this.setState({ optionTaxes: true });
    this.setState({ optionOthers: false });
  }

  chooseOptionOthers() {
    this.setState({ chooseOption: 'O' });
    this.setState({ optionPublic: false });
    this.setState({ optionTaxes: false });
    this.setState({ optionOthers: true });
  }

  renderPublicServices({ item }) {
    return <PayServicesItem item={item} navigation={this.props.navigation} />;
  }

  renderTaxes({ item }) {
    return <PayServicesItem item={item} navigation={this.props.navigation} />;
  }

  renderOthers({ item }) {
    return <PayServicesItem item={item} navigation={this.props.navigation} />;
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 30,
            marginBottom: 5,
            marginTop: 15
          }}
        >
          <View
            style={{
              backgroundColor: theme.colorInputBackground,
              height: 28,
              justifyContent: 'center',
              borderBottomLeftRadius: 2,
              borderTopLeftRadius: 2,
              width: '10%',
              marginTop: 1,
              alignItems: 'center'
            }}
          >
            <Image
              source={require('../../../img/RecursosHSBC/Payments/Buscar.png')}
              resizeMode={'contain'}
              style={{ height: 15, width: 15 }}
            />
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignSelf: 'center',
              width: '90%'
            }}
          >
            <View style={[styles.viewInputText, { height: 28 }]}>
              <TextInput
                keyboardType={'numeric'}
                underlineColorAndroid={'transparent'}
                style={[{ height: 28, paddingBottom: 4 }]}
              >
                {' '}
              </TextInput>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'column' }}>
          <View
            style={{
              flexDirection: 'row',
              height: 25,
              marginTop: 10,
              marginBottom: 15
            }}
          >
            <TouchableOpacity
              style={{
                width: '33%',
                alignItems: 'center',
                alignSelf: 'center'
              }}
              onPress={() => this.chooseOptionPublic()}
            >
              {this.state.chooseOption === 'P' ? (
                <View
                  style={[
                    this.state.optionPublic
                      ? { borderBottomColor: 'red', borderBottomWidth: 2 }
                      : {
                          borderBottomColor: 'transparent',
                          borderBottomWidth: 0
                        }
                  ]}
                >
                  <Text style={{ color: 'black' }}>PÚBLICOS</Text>
                </View>
              ) : (
                <View
                  style={[
                    this.state.optionPublic
                      ? { borderBottomColor: 'red', borderBottomWidth: 2 }
                      : {
                          borderBottomColor: 'transparent',
                          borderBottomWidth: 0
                        }
                  ]}
                >
                  <Text style={{ color: '#ADADAD' }}>PÚBLICOS</Text>
                </View>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: '33%',
                alignItems: 'center',
                alignSelf: 'center'
              }}
              onPress={() => this.chooseOptionTaxes()}
            >
              {this.state.chooseOption === 'I' ? (
                <View
                  style={[
                    this.state.optionTaxes
                      ? { borderBottomColor: 'red', borderBottomWidth: 2 }
                      : {
                          borderBottomColor: 'transparent',
                          borderBottomWidth: 0
                        }
                  ]}
                >
                  <Text style={{ color: 'black' }}>IMPUESTOS</Text>
                </View>
              ) : (
                <View
                  style={[
                    this.state.optionTaxes
                      ? { borderBottomColor: 'red', borderBottomWidth: 2 }
                      : {
                          borderBottomColor: 'transparent',
                          borderBottomWidth: 0
                        }
                  ]}
                >
                  <Text style={{ color: '#ADADAD' }}>IMPUESTOS</Text>
                </View>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: '33%',
                alignItems: 'center',
                alignSelf: 'center'
              }}
              onPress={() => this.chooseOptionOthers()}
            >
              {this.state.chooseOption === 'O' ? (
                <View
                  style={[
                    this.state.optionOthers
                      ? { borderBottomColor: 'red', borderBottomWidth: 2 }
                      : {
                          borderBottomColor: 'transparent',
                          borderBottomWidth: 0
                        }
                  ]}
                >
                  <Text style={{ color: 'black' }}>OTROS</Text>
                </View>
              ) : (
                <View
                  style={[
                    this.state.optionOthers
                      ? { borderBottomColor: 'red', borderBottomWidth: 2 }
                      : {
                          borderBottomColor: 'transparent',
                          borderBottomWidth: 0
                        }
                  ]}
                >
                  <Text style={{ color: '#ADADAD' }}>OTROS</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>

        {this.state.chooseOption === 'P' ? (
          <FlatList
            style={styles.viewMenu}
            data={this.state.dataPublicServices}
            renderItem={
              this.renderPublicServices //keyExtractor={(item) => item.IdOperacion}
            }
          />
        ) : this.state.chooseOption === 'I' ? (
          <FlatList
            style={styles.viewMenu}
            data={this.state.dataTaxes}
            renderItem={
              this.renderTaxes //keyExtractor={(item) => item.IdOperacion}
            }
          />
        ) : this.state.chooseOption === 'O' ? (
          <FlatList
            style={styles.viewMenu}
            data={this.state.dataOthers}
            renderItem={
              this.renderOthers //keyExtractor={(item) => item.IdOperacion}
            }
          />
        ) : null}
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

  viewInputText: {
    backgroundColor: theme.colorInputBackground,
    borderBottomRightRadius: 2,
    borderTopRightRadius: 2,
    height: 28
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
