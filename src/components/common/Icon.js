import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import EvilIcon from 'react-native-vector-icons/EvilIcons';

/**
 * @desc base icon component
 */
const Icon = props => <EvilIcon {...props} />;

const TouchableIcon = ({ onPress, name, wrapperStyle, style, ...rest }) => (
  <TouchableOpacity onPress={onPress} style={[styles.iconWrapper, wrapperStyle]}>
    <Icon name={name} style={[styles.icon, style]} {...rest} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  iconWrapper: {
    backgroundColor: 'transparent',
  },
  icon: {
    color: 'white',
    fontSize: 20,
  },
})

export { Icon as default, TouchableIcon };
