import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons';

import style from './Styles/TodoItemStyles'

export default class TodoItem extends React.Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }

  render () {
    const checkIconName = (this.props.completed) ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"
    const checkIcon = <Icon name={checkIconName} size={40} color="#900" />

    return (
      <View style={style.todoItemContainer}>
          {checkIcon} <Text style={style.todoItemContent}>{this.props.children}</Text>
      </View>
    )
  }
}
