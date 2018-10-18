import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './CountComponent.styles';

export default class CountComponent extends Component {
  constructor(props) {
    super(props);
    // console.log('=>=>CountComponent:Constructor');
  }

  componentWillReceiveProps(nextProps) {
    // console.log('=>=>CountComponent:ComponentWillReceiveProps');
    // console.log('nextProps: ', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('=>=>CountComponent:ShouldComponentUpdate');
    // console.log('nextProps: ', nextProps);
    // console.log('nextState: ', nextState);
    const { value } = nextProps;
    // if (value > 5 || value < -5) {
    //     return false;
    // }
    return true;
  }


  render() {
    // console.log('=>=>CountComponent:Render');
    // console.log('props', this.props);
    const { value } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.value}>
          {value}
        </Text>
      </View>
    );
  }
}
