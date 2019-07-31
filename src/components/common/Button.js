import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import theme from './theme';

class Button extends React.Component {
  render() {
    const {
      style,
      opacity,
      color,
      shadow,
      children,
    } = this.props;

    const buttonStyles = [
      styles.button,
      shadow && styles.shadow,
      color && styles[color],
      color && !styles[color] && { backgroundColor: color },
    ];

    return (
      <TouchableOpacity
        {...this.props}
        style={[buttonStyles, style]}
        activeOpacity={opacity || 0.8}
      >
        {children}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    borderRadius: theme.sizes.buttonRadius,
    height: theme.sizes.buttonHeight,
    marginVertical: theme.margin.normal,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: theme.sizes.normal,
  },
  primary: { backgroundColor: theme.colors.primary },
  secondary: { backgroundColor: theme.colors.secondary },
  tertiary: { backgroundColor: theme.colors.tertiary },
  black: { backgroundColor: theme.colors.black },
  white: { backgroundColor: theme.colors.white },
  muted: { backgroundColor: theme.colors.muted },
  gray: { backgroundColor: theme.colors.gray },
  darkGray: { backgroundColor: theme.colors.darkGray },
});

export { Button as default };
