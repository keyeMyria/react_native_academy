import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import PropTypes from 'prop-types'

import style from './Styles/TodoListStyles'
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {
  static defaultProps = {
    list: {
      items: []
    }
  }

  static propTypes = {
    list: PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          content: PropTypes.string.isRequired,
          completed: PropTypes.bool.isRequired
        }.isRequired)
      )
    }.isRequired)
  }

  render () {
    const { id, title, items } = this.props.list
    const todoItems = items.map(item =>
      <TodoItem
        key={item.id}
        style={style.todoItem}
        listId={id}
        item={item}
        onToggleCompleted={this.props.onToggleCompleted}
      >
          {item.content}
      </TodoItem>
    )

    return (
      <View style={style.todoListContainer}>
        <Text style={style.todoListTitle}>{title}</Text>

        <View style={style.todoListItemsContainer}>
          {todoItems}
        </View>

      </View>
    )
  }
}
