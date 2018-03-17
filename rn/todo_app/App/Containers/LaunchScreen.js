import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  logIn = () => {
    this.props.navigation.navigate('ListsScreen')
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.sectionText}>
            You need to log in!
        </Text>
        <TextInput style={styles.input} placeholder='Username' />
        <TextInput style={styles.input} placeholder='Password' />
        <Button title='Log In' onPress={this.logIn} />
      </View>
    )
  }
}
