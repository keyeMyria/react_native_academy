import React from 'react'
import { Text, View } from 'react-native'

import styles from './Styles/ListsScreenStyles'
import TodoList from '../Components/TodoList'

export default class ListsScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.sectionText}>Here are your lists!</Text>

        <TodoList />
      </View>
    )
  }
}
