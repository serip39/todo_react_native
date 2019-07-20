/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {
  state = {
    newTodo: '',
  }

  onChangeText(newTodo) {
    this.setState({ newTodo })
  }

  render() {
    console.log(this.state)
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.container}>
              <TextInput
                style={styles.form}
                onChangeText={text => this.onChangeText(text)}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }

};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    backgroundColor: Colors.white,
    padding: 30
  },
  form: {
    backgroundColor: '#EEE',
    padding: 10,
  }
});
