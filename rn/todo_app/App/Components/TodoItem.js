import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'
import ImagePicker from 'react-native-image-picker'

import TodoActions from '../Redux/TodoRedux'
import style from './Styles/TodoItemStyles'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'

class TodoItem extends React.Component {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      children: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }.isRequired),
    listId: PropTypes.number.isRequired,
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

    this.props.onUpdateItem(listId, item.id, {content: this.state.newItemContent})

    this.setState({
      editing: false,
      newItemContent: '',
    })
  }

  attach = () => {
    const options = {
      title: 'Select Image Attachment',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        console.tron.log('User cancelled image picker');
      } else if (response.error) {
        console.tron.log('ImagePicker Error: ', response.error);
      } else {
        // We store the whole image locally, for display, but send only URI for simplification
        const image = { uri: 'data:image/jpeg;base64,' + response.data };

        this.props.storeItemImage(`${this.props.listId}:${this.props.item.id}`, image)

        const {listId, item} = this.props
        this.props.onUpdateItem(listId, item.id, {image: response.uri})
      }
    });
  }

  render () {
    const checkIconName = (this.props.item.completed) ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"
    const checkIcon = (
      <TouchableOpacity onPress={this.toggleCompleted}>
        <Icon name={checkIconName} size={40} color="#900" />
      </TouchableOpacity>
    )
    const itemContent = <TouchableOpacity
      style={style.todoItemContentContainer}
      onPress={() => this.props.navigation.navigate('TodoItemDetails', {item: this.props.item})}
    >
      <Text style={[style.todoItemContent, this.props.item.completed && {textDecorationLine: 'line-through' }]} >
        {this.props.children}
      </Text>
    </TouchableOpacity>
    const itemEditContent = <TextInput
      style={style.todoEditItemContent}
      value={this.props.children}
      onChangeText={newItemContent => this.setState({newItemContent})}
    />
    const editIcon = <TouchableOpacity style={style.editIcon} onPress={() => this.setState({editing: true})}>
      <Icon name={'ios-create-outline'} size={20} color='#900'/>
    </TouchableOpacity>

    const cancelEditIcon = <TouchableOpacity style={style.editIcon} onPress={() => this.setState({editing: false, newItemContent: ''})}>
      <Icon name={'ios-close'} size={20} color='#900'/>
    </TouchableOpacity>

    const saveEditIcon = <TouchableOpacity style={style.editIcon} onPress={this.updateItem}>
      <Icon name={'ios-checkbox-outline'} size={20} color='#900'/>
    </TouchableOpacity>

    const attachContact = <TouchableOpacity
      onPress={() => this.props.navigation.navigate('ContactsList', { todoId: this.props.item.id, listId: this.props.listId })}
    >
      <Icon name={'ios-person-add-outline'} size={20} color='#900'/>
    </TouchableOpacity>

    const attachImage = <TouchableOpacity onPress={this.attach}>
      <Icon name={'ios-attach-outline'} size={20} color='#900'/>
    </TouchableOpacity>


    const isEditing = this.state.editing

    return (
      <View style={style.todoItemContainer}>
        {checkIcon}

        <View style={style.attachmentIconsContainer}>
          {!isEditing && attachContact}

          {!isEditing && attachImage}
        </View>

        {isEditing ? itemEditContent : itemContent}

        <View style={style.editingView}>
          {isEditing ? cancelEditIcon : null}
          {isEditing ? saveEditIcon : editIcon}
        </View>

        <TouchableOpacity onPress={this.deleteItem}>
          <Icon name={'ios-remove-circle-outline'} size={20} color='#900'/>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  storeItemImage: (key, image) => dispatch(TodoActions.storeItemImage(key, image)),
})

export default withNavigation(connect(null, mapDispatchToProps)(TodoItem))
