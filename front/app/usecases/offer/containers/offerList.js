import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connnect } from 'react-redux';

import agent from 'infra/server/superagent';

class OfferList extends Component {
  static navigationOptions = {
    title: 'List',
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };


  navigate = () => {
    const detailNav = NavigationActions.navigate({
      routeName: 'offerdetail',
      params: { name: 'My Detail...' }
    });
    this.props.navigation.dispatch(detailNav);
  };

  async componentWillMount() {
    // TODO: bring initial list
    try {
      const list = await agent.Offer.list();
      console.log(list);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'yellowgreen',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>List</Text>
        <TouchableOpacity
          style={{
            paddingVertical: 15,
            paddingHorizontal: 40
          }}
          onPress={this.navigate}>
          <Button title={'Load Detail'} onPress={this.navigate}>Load Detail</Button>
        </TouchableOpacity>
      </View>
    );
  }
}

export default OfferList;
