import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons';

import style from './Styles/TodoItemStyles'

export default class TodoItem extends React.Component {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      children: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }.isRequired)
  }

  toggleCompleted = () => {
    const { listId, item } = this.props
    this.props.onToggleCompleted(listId, item.id, !item.completed)
  }

  deleteItem = () => {
    const { listId, item } = this.props
    this.props.onDeleteItem(listId, item.id)
  }

  render () {
    const checkIconName = (this.props.item.completed) ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"
    const checkIcon = (
      <TouchableOpacity onPress={this.toggleCompleted}>
        <Icon name={checkIconName} size={40} color="#900" />
      </TouchableOpacity>
    )

    return (
      <View style={style.todoItemContainer}>
          {checkIcon}
          <Text style={style.todoItemContent}>{this.props.children}</Text>
          <TouchableOpacity onPress={this.deleteItem}>
            <Icon name={'ios-remove-circle-outline'} size={20} color='#900'/>
          </TouchableOpacity>
      </View>
    )
  }
}
