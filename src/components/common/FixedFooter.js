import React from 'react';
import { LayoutAnimation, Keyboard, View, ViewPropTypes, StyleSheet } from 'react-native';

class FixedFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bottom: 0 };
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.onKeyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.onKeyboardDidHide);

  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  onKeyboardDidShow = (event) => {
    const { duration, easing } = event;
    LayoutAnimation.configureNext({
      duration,
      update: {
        duration,
        type: LayoutAnimation.Types[easing] || 'keyboard',
      },
    });

    this.setState({ bottom: event.endCoordinates.height });
  }

  onKeyboardDidHide = (event) => {
    if (!event) {
      this.setState({ bottom: 0 });
      return;
    }
    const { duration, easing } = event;
    LayoutAnimation.configureNext({
      duration,
      update: {
        duration,
        type: LayoutAnimation.Types[easing] || 'keyboard',
      },
    });

    this.setState({ bottom: 0 });
  }

  render() {
    const { style, ...rest } = this.props;

    return (
      <View style={[styles.fixedFooter, style, { bottom: this.state.bottom }]} {...rest} />
    );
  }
}

const styles = StyleSheet.create({
  // absolute positioning breaks safe area view padding :/
  fixedFooter: {
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // bottom: 0,
    // backgroundColor: 'transparent',
  }
});

export { FixedFooter as default };