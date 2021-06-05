import React from 'react';
import {TextInput} from 'react-native';

import styles from '../styleSheet/Style';

export default function TextField(props) {
  let {setValue, placeholderText} = props;

  return (
    <TextInput
      onChangeText={text => {
        setValue(text);
      }}
      style={styles.inputContainer}
      placeholder={placeholderText}
      placeholderTextColor={'gray'}
    />
  );
}
