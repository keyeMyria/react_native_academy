import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
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

  componentWillMount() {
    this.setState({
      editing: false,
      newItemContent: ''
    })
  }

  toggleCompleted = () => {
    const { listId, item } = this.props
    this.props.onToggleCompleted(listId, item.id, !item.completed)
  }

  deleteItem = () => {
    const { listId, item } = this.props
    this.props.onDeleteItem(listId, item.id)
  }

  updateItem = () => {
    const { listId, item } = this.props

    // TODO THIS CAUSES FREEZING WHEN SUBMITTING THE CHANGE. FIX THIS
    // this.props.onUpdateItem(listId, item.id, {content: this.state.newItemContent})
    this.props.onUpdateItem(listId, item.id, {content: 'FIXED TEST TEXT'})

    this.setState({
      editing: false,
      newItemContent: '',
    })
  }

  render () {
    const checkIconName = (this.props.item.completed) ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"
    const checkIcon = (
      <TouchableOpacity onPress={this.toggleCompleted}>
        <Icon name={checkIconName} size={40} color="#900" />
      </TouchableOpacity>
    )
    const itemContent = <Text style={style.todoItemContent}>{this.props.children}</Text>
    const itemEditContent = <TextInput
      style={style.todoEditItemContent}
      value={this.props.children}
      onChange={newItemContent => this.setState({newItemContent})}
    />
    const editIcon = <TouchableOpacity onPress={() => this.setState({editing: true})}>
      <Icon name={'ios-create-outline'} size={20} color='#900'/>
    </TouchableOpacity>

    const cancelEditIcon = <TouchableOpacity onPress={() => this.setState({editing: false, newItemContent: ''})}>
      <Icon name={'ios-close'} size={20} color='#900'/>
    </TouchableOpacity>

    const saveEditIcon = <TouchableOpacity onPress={this.updateItem}>
      <Icon name={'ios-checkbox-outline'} size={20} color='#900'/>
    </TouchableOpacity>

    const isEditing = this.state.editing

    return (
      <View style={style.todoItemContainer}>
        {checkIcon}

        {isEditing ? itemEditContent : itemContent}

        {isEditing ? cancelEditIcon : null}
        {isEditing ? saveEditIcon : editIcon}

        <TouchableOpacity onPress={this.deleteItem}>
          <Icon name={'ios-remove-circle-outline'} size={20} color='#900'/>
        </TouchableOpacity>
      </View>
    )
  }
}
