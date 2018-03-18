import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import PropTypes from 'prop-types'

import TodoItem from './TodoItem'

export default class TodoList extends React.Component {

  static propTypes = {
    list: PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.array
    })
  }

  render () {
    const { title } = this.props.list

    return (
      <View>
        <Text>{title}</Text>

        <TouchableHighlight>
          <TodoItem />
        </TouchableHighlight>
      </View>
    )
  }
}
