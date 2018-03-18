import React from 'react'
import { Text, TouchableOpacity, View, TextInput } from 'react-native'
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

  componentWillMount () {
    this.setState({
      addingNewItem: false
    })
  }

  deleteList = () => this.props.onDeleteList(this.props.list.id)

  showAddItemControls = () => {
    this.setState({
      addingNewItem: true
    })
  }

  hideAddItemControls = () => {
    this.setState({
      addingNewItem: false,
      newItemContent: ''
    })
  }

  confirmNewItem = () => {
    console.tron.log(this.props)
    this.props.onAddItem(
      this.props.list.id,
      {content: this.state.newItemContent, completed: false}
    )
    this.setState({
      addingNewItem: false,
      newItemContent: ''
    })
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
        onUpdateItem={this.props.onUpdateItem}
      >
          {item.content}
      </TodoItem>
    )

    const newItemControls = (
      <View>
        <TextInput
          placeholder={'What should be done?'}
          onChangeText={newItemContent => this.setState({...this.state, newItemContent})}
        />
        <TouchableOpacity onPress={this.hideAddItemControls}>
          <Icon name={'ios-close'} size={20} color='#900'/>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.confirmNewItem}>
          <Icon name={'ios-create-outline'} size={20} color='#900'/>
        </TouchableOpacity>

      </View>
    )

    return (
      <View style={style.todoListContainer}>
        <Text style={style.todoListTitle}>{title}</Text>
        <TouchableOpacity onPress={this.deleteList}>
          <Icon name={'ios-remove-circle-outline'} size={20} color='#900'/>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.showAddItemControls}>
          <Icon name={'ios-add-circle-outline'} size={20} color='#900'/>
        </TouchableOpacity>

        {this.state.addingNewItem && newItemControls}


        <View style={style.todoListItemsContainer}>
          {todoItems}
        </View>

      </View>
    )
  }
}
