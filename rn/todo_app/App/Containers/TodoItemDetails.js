import React from 'react'
import { Text, View } from 'react-native'

import style from './Styles/TodoItemDetails'

export default class TodoItemDetails extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#232b36',
    }
  }

  constructor (props) {
    super(props)

    this.state = {
      item: this.props.navigation.getParam('item', {})
    }
  }

  render () {
    return(
      <View style={[style.mainContainer, {padding: 20}]} >
        <Text style={style.sectionText}>Details of a Todo Item</Text>

        <Text style={style.itemAttr}>URL: {this.state.item.url}</Text>
        <Text style={style.itemAttr}>ID: {this.state.item.id}</Text>
        <Text style={style.itemAttr}>TODO_LIST: {this.state.item.todo_list}</Text>
        <Text style={style.itemAttr}>CONTENT: {this.state.item.content}</Text>
        <Text style={style.itemAttr}>COMPLETED: {this.state.item.completed}</Text>
        <Text style={style.itemAttr}>CONTACT: {this.state.item.contact}</Text>
        <Text style={style.itemAttr}>IMAGE: {this.state.item.image}</Text>
      </View>
    )
  }
}
