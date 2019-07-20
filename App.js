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
  TouchableOpacity
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
    todos: [],
  }

  onChangeText(newTodo) {
    this.setState({ newTodo })
  }

  onPressAdd() {
    // console.log('onPressAdd')
    const { newTodo } = this.state
    this.setState({
      newTodo: '',
      todos: [newTodo, ...this.state.todos]
    })
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
                value={this.state.newTodo}
                style={styles.form}
                onChangeText={text => this.onChangeText(text)}
              />
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => this.onPressAdd()}
              >
                <Text style={styles.addButtonText}>ADD</Text>
              </TouchableOpacity>
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
  },
  addButton: {
    backgroundColor: '#333',
    padding: 14,
    borderRadius: 4,
    marginTop: 10,
  },
  addButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
