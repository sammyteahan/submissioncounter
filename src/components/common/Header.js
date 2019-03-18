import React from 'react';
import { View, StyleSheet } from 'react-native';

const Header = ({ style, ...rest }) => (
  <View style={[styles.headerWrapper, style]} {...rest} />
);

const styles = StyleSheet.create({
  headerWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { Header as default };
