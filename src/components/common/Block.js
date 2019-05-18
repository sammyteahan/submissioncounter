import React from 'react';
import { View, StyleSheet } from 'react-native';

import theme from './theme';

class Block extends React.Component {
  render() {
    const {
      flex,
      row,
      column,
      center,
      middle,
      left,
      right,
      card,
      inspect,
      color,
      space,
      style,
    } = this.props;

    const blockStyles = [
      styles.block,
      flex && { flex },
      flex === false && { flex: 0 }, // reset/disable flex
      row && styles.row,
      column && styles.column,
      center && styles.center,
      middle && styles.middle,
      left && styles.left,
      right && styles.right,
      card && styles.card,
      inspect && styles.inspect,
      color && styles[color], // use defined colors for backgroundColor
      color && !styles[color] && { backgroundColor: color }, // custom bg color
      space && { justifyContent: `space-${space}` },
    ];

    return (
      <View style={[blockStyles, style]} {...this.props} />
    );
  }
}

const styles = StyleSheet.create({
  block: { flex: 1 },
  row: { flexDirection: 'row' },
  column: { flexDirection: 'column' },
  center: { alignItems: 'center' },
  middle: { justifyContent: 'center' },
  left: { justifyContent: 'flex-start' },
  right: { justifyContent: 'flex-end' },
  inspect: { borderWidth: 1, borderColor: theme.colors.secondary },
  card: { borderRadius: theme.sizes.border },
  primary: { backgroundColor: theme.colors.primary },
  secondary: { backgroundColor: theme.colors.secondary },
  tertiary: { backgroundColor: theme.colors.tertiary },
  black: { backgroundColor: theme.colors.black },
  white: { backgroundColor: theme.colors.white },
  muted: { backgroundColor: theme.colors.muted },
  gray: { backgroundColor: theme.colors.gray },
  darkGray: { backgroundColor: theme.colors.darkGray },
});

export { Block as default };
