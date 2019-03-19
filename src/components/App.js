/**
 * Submission counter
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { Platform, StyleSheet, View, TouchableOpacity, SafeAreaView } from 'react-native';

import { Header, TouchableIcon, Text } from './common';

type Props = {};

export default class App extends React.Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
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
                <Text>Hangs</Text>
                <Text>7 to go</Text>
              </View>
            </View>

            <View style={styles.rowAction}>
              <TouchableIcon
                name="plus"
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
    backgroundColor: '#232837',
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
    borderWidth: 2,
    borderColor: '#80E723', // light green
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  rowCount: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
  },
  rowBody: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
  },
  rowAction: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
  },
});
