import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch
} from 'react-native';

import theme from '../../theme/theme';

class AlertsConfiguration extends Component {
  constructor (props) {
    super(props);
    this.state = {
      sms: true,
      extractEmail: true,
      promotionEmail: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Configuración
        </Text>
        <View style={styles.card}>
          <View style={styles.cardOption}>
            <Text style={styles.option}>
              Recibir notificaciones por SMS
            </Text>

            <View>
              <Switch
                onValueChange={value =>
                    this.setState({
                      sms: value
                    })
                }
                onTintColor={theme.colorPrincipal}
                thumbTintColor="#FFFFFF"
                tintColor="#EEEEED"
                value={this.state.sms}
                style={{ marginBottom: 0 }}
              />
            </View>
          </View>

          <View style={styles.cardOption}>
            <Text style={styles.option}>
              Envío de extracto/comprobantes por mail
            </Text>

            <View>
              <Switch
                onValueChange={value =>
                    this.setState({
                      extractEmail: value
                    })
                }
                onTintColor={theme.colorPrincipal}
                thumbTintColor="#FFFFFF"
                tintColor="#EEEEED"
                value={this.state.extractEmail}
                style={{ marginBottom: 0 }}
              />
            </View>
          </View>


          <View style={styles.cardOption}>
            <Text style={styles.option}>
              Recepción de promosiones por mail
            </Text>

            <View>
              <Switch
                onValueChange={value =>
                    this.setState({
                      promotionEmail: value
                    })
                }
                onTintColor={theme.colorPrincipal}
                thumbTintColor="#FFFFFF"
                tintColor="#EEEEED"
                value={this.state.promotionEmail}
                style={{ marginBottom: 0 }}
              />
            </View>
          </View>
        </View>
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
  title: {
    fontSize: theme.txtNormal,
    marginBottom: 5
  },
  option: {
    fontSize: theme.txtSmall,
  },
  card: {
    borderRadius: 4,
    borderColor: '#ebebeb',
    borderWidth: 2,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingTop: 15,
    flex: 0.2,
    justifyContent: 'flex-end',
  },
  cardOption: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default AlertsConfiguration;
