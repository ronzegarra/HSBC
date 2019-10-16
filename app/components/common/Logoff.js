import React from 'react';

import { Button, Text, View, Animated, Easing } from 'react-native';
import { NavigationActions } from 'react-navigation';
const resetToHome = NavigationActions.reset({
  index: 0,
  key: null,
  actions: [
    NavigationActions.navigate({routeName: 'Public'}),
  ],
});
export default class Logoff extends React.Component {
  /*static navigationOptions = {
    title: 'Home',
  };*/
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Test!</Text>
        <Button
          title="Push"
          onPress={() => this.props.navigation.dispatch(resetToHome)}
        />
      </View>
    );
  }
}