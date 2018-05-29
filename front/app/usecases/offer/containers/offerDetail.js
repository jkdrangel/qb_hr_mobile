import React, { Component } from 'react';
import { View, Text } from 'react-native';

class OfferDetail extends Component {
    static navigationOptions = {
      title: 'Detail',
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    };


    render() {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: 'yellowgreen',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text>{this.props.navigation.state.params.name}</Text>
        </View>
      );
    }
}

export default OfferDetail;
