/**
 * Submission counter
 *
 * @format
 * @flow
 */
import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';

import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import { Header, TouchableIcon, Text, theme } from './common';

export default class App extends React.Component {
  onHapticSelection = () => ReactNativeHapticFeedback.trigger();
  onHapticMedium = () => ReactNativeHapticFeedback.trigger('impactMedium', true);
  onNotificationWarning = () => ReactNativeHapticFeedback.trigger('notificationWarning', true);

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Header>
          <Text h1 style={styles.headerTitle}>Today</Text>
        </Header>

        <View style={styles.contentWrapper}>
          <View style={styles.rowWrapper}>
            <View style={styles.rowCount}>
              <Text h1 bold>7</Text>
            </View>
            <View style={styles.rowBody}>
              <View style={{ flexDirection: 'column' }}>
                <Text h6 bold>Hangs</Text>
                <Text style={[styles.muted, styles.caption]}>7 to go</Text>
              </View>
            </View>
            <View style={styles.rowAction}>
              <TouchableIcon
                onPress={this.onHapticSelection}
                name="plus"
                style={{ color: 'white', fontSize: 72 }}
              />
            </View>
          </View>

          <View style={styles.rowWrapper}>
            <View style={styles.rowCount}>
              <Text h1 bold>12</Text>
            </View>
            <View style={styles.rowBody}>
              <View style={{ flexDirection: 'column' }}>
                <Text h6 bold>Runs</Text>
                <Text style={[styles.muted, styles.caption]}>1 to go</Text>
              </View>
            </View>
            <View style={styles.rowAction}>
              <TouchableIcon
                onPress={this.onHapticSelection}
                name="plus"
                style={{ color: 'white', fontSize: 72 }}
              />
            </View>
          </View>

          <View style={styles.rowWrapper}>
            <View style={styles.rowCount}>
              <Text h1 bold>12</Text>
            </View>
            <View style={styles.rowBody}>
              <View style={{ flexDirection: 'column' }}>
                <Text h6 bold>Lifts</Text>
                <Text style={[styles.muted, styles.caption]}>1 to go</Text>
              </View>
            </View>
            <View style={styles.rowAction}>
              <TouchableIcon
                onPress={this.onHapticSelection}
                name="plus"
                style={{ color: 'white', fontSize: 72 }}
              />
            </View>
          </View>

          <View style={styles.rowWrapper}>
            <View style={styles.rowCount}>
              <Text h1 bold style={styles.muted}>2</Text>
            </View>
            <View style={styles.rowBody}>
              <View style={{ flexDirection: 'column' }}>
                <Text h6 bold>Mindful</Text>
                <Text style={[styles.muted, styles.caption]}>10 to go</Text>
              </View>
            </View>
            <View style={styles.rowAction}>
              <TouchableIcon
                onPress={this.onHapticMedium}
                name="plus"
                style={{ color: 'white', fontSize: 72 }}
              />
            </View>
          </View>

          <View style={styles.rowWrapper}>
            <View style={styles.rowCount}>
              <Text h1 bold>142</Text>
            </View>
            <View style={styles.rowBody}>
              <View style={{ flexDirection: 'column' }}>
                <Text h6 bold>Distance</Text>
                <Text style={[styles.muted, styles.caption]}>On track!</Text>
              </View>
            </View>
            <View style={styles.rowAction}>
              <TouchableIcon
                name="plus"
                onPress={this.onNotificationWarning}
                style={{ color: 'white', fontSize: 72 }}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.darkGray,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 28,
  },
  contentWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  rowWrapper: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowCount: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: theme.margin.normal,
  },
  rowBody: {
    flex: 1,
    paddingLeft: theme.padding.normal,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rowAction: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  muted: {
    color: theme.colors.muted,
  },
  caption: {
    fontWeight: 'bold',
    fontSize: 12,
  }
});
