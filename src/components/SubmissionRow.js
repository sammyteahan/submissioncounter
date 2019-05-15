import React from 'react';
import { StyleSheet } from 'react-native';

import { Block, Text, TouchableIcon, theme } from './common';

const SubmissionRow = ({ name, count, remaining, onIncrement, ...rest }) => (
  <Block flex={0} row space="between">
    <Block flex={1} row right>
      <Text h1 bold>{count}</Text>
    </Block>
    <Block flex={1} style={styles.padLeft}>
      <Block column middle>
        <Text h6 bold>{name}</Text>
        <Text style={[styles.muted, styles.caption]}>{remaining} to go</Text>
      </Block>
    </Block>
    <Block flex={1} center middle>
      <TouchableIcon
        name="plus"
        onPress={onIncrement}
        style={{ color: 'white', fontSize: 72 }}
      />
    </Block>
  </Block>
);

const styles = StyleSheet.create({
  muted: {
    color: theme.colors.muted,
  },
  caption: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  padRight: {
    paddingRight: theme.margin.normal,
  },
  padLeft: {
    paddingLeft: theme.padding.large,
  },
});

export { SubmissionRow as default };
