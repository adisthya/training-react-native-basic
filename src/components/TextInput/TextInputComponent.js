import React, { Component } from 'react';
import { TextInput } from 'react-native';

import styles from './TextInputComponent.styles';

export default class ButtonComponent extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { value, placeholder, onChangeText } = this.props;

    return (
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText} />
    );
  }
};