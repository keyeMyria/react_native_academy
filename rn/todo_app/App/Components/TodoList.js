import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

import style from './Styles/TodoListStyles'
import TodoItem from './TodoItem'
import Icon from 'react-native-vector-icons/Ionicons'

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

  deleteList = () => {
    this.props.onDeleteList(this.props.list.id)
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
        onDeleteItem={this.props.onDeleteItem}
      >
          {item.content}
      </TodoItem>
    )

    return (
      <View style={style.todoListContainer}>
        <Text style={style.todoListTitle}>{title}</Text>
        <TouchableOpacity onPress={this.deleteList}>
          <Icon name={'ios-remove-circle-outline'} size={20} color='#900'/>
        </TouchableOpacity>

        <View style={style.todoListItemsContainer}>
          {todoItems}
        </View>

      </View>
    )
  }
}
