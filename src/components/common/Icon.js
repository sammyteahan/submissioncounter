import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { cond, propEq, T } from 'ramda';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

/**
 * @desc base icon component
 */
const isEvilIcon = propEq('type', 'EvilIcon');
const isFontAwesomeIcon = propEq('type', 'FontAwesome');

const Icon = (props) => cond([
  [isEvilIcon, props => <EvilIcon {...props} />],
  [isFontAwesomeIcon, props => <FontAwesomeIcon {...props} />],
  [T, props => <EvilIcon {...props} />],
])(props);

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
