import React from 'react';

import { Button, Text, View, Animated, Easing } from 'react-native';

export default class Testt extends React.Component {
  /*static navigationOptions = {
    title: 'Home',
  };*/
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Test!</Text>
        <Button
          title="Push"
          onPress={() => this.props.navigation.navigate('Test')}
        />
      </View>
    );
  }
}