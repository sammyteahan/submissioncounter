/**
 * Submission counter
 *
 * @format
 * @flow
 */
import React from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, StatusBar, ScrollView, Alert } from 'react-native';

import Config from 'react-native-config';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import SubmissionRow from './SubmissionRow';
import { Header, Icon, TouchableIcon, Text, Block, Button, theme } from './common';

export default class App extends React.Component {
  onHapticSelection = () => ReactNativeHapticFeedback.trigger();
  onHapticMedium = () => ReactNativeHapticFeedback.trigger('impactMedium', true);
  onNotificationWarning = () => ReactNativeHapticFeedback.trigger('notificationWarning', true);
  handleAlert = () => Alert.alert(`${Config.ENV}`, `${Config.API_URL}`);

  renderDate = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const today = new Date();

    return (
      <Text h1 style={styles.headerTitle}>{months[today.getMonth()]} {today.getDate()}</Text>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Header style={{ paddingBottom: theme.padding.small }}>
          {this.renderDate()}
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
            remaining={4}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={4}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={4}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={4}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={4}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={4}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={4}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={4}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={4}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={4}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={4}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={4}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={4}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={4}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={4}
            onIncrement={this.onHapticMedium}
          />
          <SubmissionRow
            name={'Block'}
            count={31}
            remaining={4}
            onIncrement={this.onHapticMedium}
          />

          <Block flex={0} row space="between">
            <Block flex={1} row right>
              <Text h1 bold style={styles.muted}>142</Text>
            </Block>
            <Block flex={1} style={styles.padLeft}>
              <Block column middle>
                <Text h6 bold>Config</Text>
              </Block>
            </Block>
            <Block flex={1} center middle>
              <TouchableOpacity onPress={this.handleAlert}>
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

          <Block marginHorizontal={theme.margin.large} marginBottom={theme.margin.normal}>
            <Button
              color={theme.colors.primary}
              onPress={() => console.log('handle press')}
            >
              <Icon
                name="plus"
                type="FontAwesome"
                style={[styles.btn, styles.plusIcon]}
              />
            </Button>
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
    color: theme.colors.white,
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
  btn: {
    textAlign: 'center',
  },
});
