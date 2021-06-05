import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from '../styleSheet/Style';

export default function Button(props) {
  let {name, func, style} = props;

  return (
    <TouchableOpacity onPress={func} style={[styles.btn, style]}>
      <Text style={styles.btnText}>{name}</Text>
    </TouchableOpacity>
  );
}
