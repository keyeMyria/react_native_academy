import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

import TodoActions from '../Redux/TodoRedux'
import style from './Styles/ListsScreenStyles'
import TodoList from '../Components/TodoList'
import Icon from 'react-native-vector-icons/Ionicons'

class ListsScreen extends React.Component {
  static defaultProps = {
    lists: []
  }

  componentWillMount() {
    this.props.getAllLists()
  }

  logout = () => {
    this.props.logout()
    this.props.navigation.navigate('Auth')
  }

  render () {
    const lists = this.props.lists || []
    const todoLists = lists.map(
      list =>
        <TodoList
          key={list.id}
          list={list}
          onToggleCompleted={(listId, itemId, completed) => this.props.toggleCompleted(listId, itemId, completed)}
          onDeleteItem={(listId, itemId) => this.props.deleteItem(listId, itemId)}
          onDeleteList={listId => this.props.deleteList(listId)}
          onAddItem={(listId, itemData) => this.props.addItem(listId, itemData)}
          onUpdateItem={(listId, itemId, itemData) => this.props.updateItem(listId, itemId, itemData)}
          onUpdateList={(listId, listData) => this.props.updateList(listId, listData)}
        />
    )
    const title = (lists.length) ? 'Here are your lists!' : 'You have no todo lists! Add them by pressing +'
    return (
      // TODO convert to SectionList for scrolling/refresh/sections?
      <View style={style.mainContainer}>
        <TouchableOpacity onPress={this.logout}>
          <Icon name={'ios-exit-outline'} size={40} color='#900'/> <Text>Logout</Text>
        </TouchableOpacity>
        <Text style={style.sectionText}>{title}</Text>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewListScreen')}>
          <Icon name={'ios-add-circle-outline'} size={40} color='#900'/>
        </TouchableOpacity>

        {todoLists}
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAllLists: () => dispatch(TodoActions.allListsRequest()),
  toggleCompleted: (listId, itemId, completed) => dispatch(TodoActions.toggleCompletedRequest(listId, itemId, completed)),
  updateItem: (listId, itemId, itemData) => dispatch(TodoActions.updateItemRequest(listId, itemId, itemData)),
  deleteItem: (listId, itemId) => dispatch(TodoActions.deleteItemRequest(listId, itemId)),
  deleteList: (listId) => dispatch(TodoActions.deleteListRequest(listId)),
  updateList: (listId, listData) => dispatch(TodoActions.updateListRequest(listId, listData)),
  addItem: (listId, itemData) => dispatch(TodoActions.addItemRequest(listId, itemData)),
  logout: () => dispatch(TodoActions.logoutRequest()),
})

const mapStateToProps = (state) => ({
  lists: state.todo.lists
})

export default connect(mapStateToProps, mapDispatchToProps)(ListsScreen)
