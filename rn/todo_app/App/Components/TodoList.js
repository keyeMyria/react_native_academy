import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {
  render () {
    return (
      <View>
        <Text>This is a todo List</Text>

        <TouchableHighlight>
          <TodoItem />
        </TouchableHighlight>
      </View>
    )
  }
}
