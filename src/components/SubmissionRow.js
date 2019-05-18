import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Block, Text, Icon, TouchableIcon, theme } from './common';

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
      <TouchableOpacity onPress={onIncrement}>
        <Block style={styles.submissionButton}>
          <Icon
            name="plus"
            type="FontAwesome"
            style={styles.plusIcon}
          />
        </Block>
      </TouchableOpacity>
    </Block>
  </Block>
);

const styles = StyleSheet.create({
  submissionButton: {
    height: 55,
    width: 55,
    backgroundColor: '#373F51',
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIcon: {
    fontSize: 18,
    color: theme.colors.white,
  },
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
