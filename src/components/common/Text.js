import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

import theme from './theme';

class Text extends React.Component {
  render() {
    const { h1, h2, h3, h4, h5, h6, bold } = this.props;

    const textStyles = [
      styles.text,
      bold && styles.bold,
      h1 && styles.h1,
      h2 && styles.h2,
      h3 && styles.h3,
      h4 && styles.h4,
      h5 && styles.h5,
      h6 && styles.h6,
    ];

    return (
      <RNText
        {...this.props}
        style={[textStyles, this.props.style]}
      />
    );
  }
}

const styles = StyleSheet.create({
  text:  { color: theme.colors.white },
  h1: theme.fonts.h1,
  h2: theme.fonts.h2,
  h3: theme.fonts.h3,
  h4: theme.fonts.h4,
  h5: theme.fonts.h5,
  h6: theme.fonts.h6,
  bold: { fontWeight: 'bold' },
});

export { Text as default };