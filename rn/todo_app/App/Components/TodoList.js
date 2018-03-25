import React from 'react'
import { Text, TouchableOpacity, View, TextInput, Share, Platform } from 'react-native'
import PropTypes from 'prop-types'
import _ from 'lodash'

import style from './Styles/TodoListStyles'
import TodoItem from './TodoItem'
import Icon from 'react-native-vector-icons/Ionicons'

export default class TodoList extends React.Component {
  static defaultProps = {
    list: {
      items: [],
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
      addingNewItem: false,
      editingTitle: false
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

  updateTitle = () => {
    this.props.onUpdateList(this.props.list.id, {title: this.state.newTitle})
    this.setState({
      editingTitle: false,
      newTitle: ''
    })
  }

  shareList = () => {
    const iosOptions = {
      subject: 'Share this ToDo list!',
    }
    const androidOptions = {
      dialogTitle: 'Share this ToDo list!'
    }
    Share.share({message: 'message', title: 'title'}, Platform.OS === 'ios' ? iosOptions : androidOptions)
      .then((action) => {
        const chosenAction = _.get(action, 'action', '')

        if (chosenAction === Share.sharedAction) {
          console.tron.log('Successfully shared the ToDo List!')
        } else if (chosenAction === Share.dismissedAction) {
          console.tron.log('Sharing dismissed :(')
        }
      }, () => console.tron.log('Error while sharing the ToDo list!'))
  }

  /**
   * If the title is too long, truncates it with ...
   *
   * @param title
   */
  formatTitle = (title) => {
    const maxTitleLen = 30

    if (title.length > maxTitleLen) {
      return `${title.substring(0, maxTitleLen)}...`
    }
    return title
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
        onAttachImage={this.props.onAttachImage}
      >
          {item.content}
      </TodoItem>
    )

    const newItemControls = (
      <View>
        <TextInput
          placeholder={'What should be done?'}
          onChangeText={newItemContent => this.setState({newItemContent})}
          spellCheck={false}
          autoCapitalize={'none'}
          autoCorrect={false}
        />
        <TouchableOpacity onPress={this.hideAddItemControls}>
          <Icon name={'ios-close'} size={20} color='#900'/>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.confirmNewItem}>
          <Icon name={'ios-create-outline'} size={20} color='#900'/>
        </TouchableOpacity>
      </View>
    )

    // List Editing
    const listTitle = <Text style={style.todoListTitleText}>{this.formatTitle(title)}</Text>
    const listTitleEdit = <TextInput
      style={style.listTitleEdit}
      value={this.props.list.title}
      onChangeText={newTitle => this.setState({newTitle})}
      spellCheck={false}
      autoCapitalize={'none'}
      autoCorrect={false}
    />

    const editIcon = <TouchableOpacity onPress={() => this.setState({editingTitle: true})}>
      <Icon name={'ios-create-outline'} size={20} color='#900'/>
    </TouchableOpacity>

    const cancelEditIcon = <TouchableOpacity onPress={() => this.setState({editingTitle: false, newTitle: ''})}>
      <Icon name={'ios-close'} size={30} color='#900'/>
    </TouchableOpacity>

    const saveEditIcon = <TouchableOpacity onPress={this.updateTitle}>
      <Icon name={'ios-checkbox-outline'} size={20} color='#900'/>
    </TouchableOpacity>

    const shareButton = <TouchableOpacity onPress={this.shareList}>
      <Icon name={'ios-share-alt-outline'} size={20} color='#900'/>
    </TouchableOpacity>

    const addItemButton = <TouchableOpacity onPress={this.showAddItemControls}>
      <Icon name={'ios-add-circle-outline'} size={20} color='#900'/>
    </TouchableOpacity>

    const deleteItemButton = <TouchableOpacity onPress={this.deleteList}>
      <Icon name={'ios-remove-circle-outline'} size={20} color='#900'/>
    </TouchableOpacity>


    const editingView = <View style={style.editingView}>
      {cancelEditIcon}

      {saveEditIcon}
    </View>

    const isEditing = this.state.editingTitle

    return (
      <View style={style.todoListContainer}>
        <View style={style.todoListTitle}>
          {!isEditing && shareButton}

          {!isEditing && editIcon}

          {isEditing ? listTitleEdit : listTitle}

          <View>
            {isEditing && editingView}

            {!isEditing && addItemButton}

            {!isEditing && deleteItemButton}
          </View>

          {this.state.addingNewItem && newItemControls}
        </View>

        <View style={style.todoListItemsContainer}>
          {todoItems}
        </View>

      </View>
    )
  }
}
