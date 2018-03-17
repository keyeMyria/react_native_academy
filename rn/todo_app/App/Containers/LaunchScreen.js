import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'

import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
          <Text style={styles.sectionText}>
            You need to log in!
            <TextInput placeholder={'Username'} />
            <TextInput placeholder={'Password'} />
          </Text>
      </View>
    )
  }
}
