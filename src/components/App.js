/**
 * Submission counter
 *
 * @format
 * @flow
 */
import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, TextInput, ScrollView, Alert } from 'react-native';

import Config from 'react-native-config';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import SubmissionRow from './SubmissionRow';
import { Header, TouchableIcon, Text, Block, theme } from './common';

export default class App extends React.Component {
  onHapticSelection = () => ReactNativeHapticFeedback.trigger();
  onHapticMedium = () => ReactNativeHapticFeedback.trigger('impactMedium', true);
  onNotificationWarning = () => ReactNativeHapticFeedback.trigger('notificationWarning', true);
  handleAlert = () => Alert.alert(`${Config.ENV}`, `${Config.API_URL}`);

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Header>
          <Text h1 style={styles.headerTitle}>Today</Text>
        </Header>

        <ScrollView>
          <SubmissionRow
            name={'Hangs'}
            count={7}
            remaining={21}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Runs'}
            count={12}
            remaining={1}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Lifts'}
            count={3}
            remaining={1}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Mindful'}
            count={2}
            remaining={10}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={7}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={7}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={7}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={7}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={7}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={7}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={7}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={7}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={7}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={7}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={7}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={7}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={7}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={7}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={7}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={7}
            onIncrement={this.onHapticMedium}
          />

          <Block flex={0} row space="between">
            <Block flex={1} row right>
              <Text h1 bold style={styles.muted}>142</Text>
            </Block>
            <Block flex={1} style={styles.padLeft}>
              <Block column middle>
                <Text h6 bold>Config</Text>
                <Text style={[styles.muted, styles.caption]}>endpoint vars</Text>
              </Block>
            </Block>
            <Block flex={1} center middle>
              <TouchableIcon
                name="plus"
                onPress={this.handleAlert}
                style={{ color: 'white', fontSize: 72 }}
              />
            </Block>
          </Block>
        </ScrollView>
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
  muted: {
    color: theme.colors.muted,
  },
  caption: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  padLeft: {
    paddingLeft: theme.padding.large,
  },
});
