import React from 'react'
import { View } from 'react-native'

import styles from './Styles/SingleListScreenStyles'

export default class SingleListScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        You are viewing a To Do List
      </View>
    )
  }
}
