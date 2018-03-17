import React from 'react'
import { Text, View } from 'react-native'

import style from './Styles/TodoItemStyles'

export default class TodoItem extends React.Component {
  render () {
    return (
      <View style={style.todoItemContainer}>
        <Text>Todo Item 1</Text>
      </View>
    )
  }
}
