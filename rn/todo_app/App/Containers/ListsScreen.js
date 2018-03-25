import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

import TodoActions from '../Redux/TodoRedux'
import style from './Styles/ListsScreenStyles'
import TodoList from '../Components/TodoList'
import Icon from 'react-native-vector-icons/Ionicons'
import ListsFilter from '../Components/ListsFilter'

class ListsScreen extends React.Component {
  static defaultProps = {
    lists2: []
  }

  static navigationOptions = {
    header: null,
  }

  componentWillMount() {
    this.props.getAllLists()
  }

  logout = () => {
    this.props.logout()
    this.props.navigation.navigate('Auth')
  }

  todoList = (list) => <TodoList
    list={list}
    onToggleCompleted={(listId, itemId, completed) => this.props.toggleCompleted(listId, itemId, completed)}
    onDeleteItem={(listId, itemId) => this.props.deleteItem(listId, itemId)}
    onDeleteList={listId => this.props.deleteList(listId)}
    onAddItem={(listId, itemData) => this.props.addItem(listId, itemData)}
    onUpdateItem={(listId, itemId, itemData) => this.props.updateItem(listId, itemId, itemData)}
    onUpdateList={(listId, listData) => this.props.updateList(listId, listData)}
  />

  todoListSeparator = () => <View style={style.todoListSeparator} />

  render () {
    const lists = this.props.lists || []
    const title = (lists.length) ? 'Here are your lists!' : 'You have no todo lists! Add them by pressing +'

    return (
      <View style={style.mainContainer}>
        <View style={style.listsScreenTitleBar}>
          <Text style={style.sectionText}>{title}</Text>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('NewListScreen')}>
            <Icon name={'ios-add-circle-outline'} size={40} color='#900'/>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.logout}>
            <Icon name={'ios-exit-outline'} size={40} color='#900'/>
          </TouchableOpacity>
        </View>

        <ListsFilter onFilter={this.props.getListsWithTitle} fetching={this.props.fetching}/>

        <FlatList
          data={lists}
          keyExtractor={item => `${item.id}` }
          renderItem={({ item }) => this.todoList(item)}
          ItemSeparatorComponent={this.todoListSeparator}
        />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAllLists: () => dispatch(TodoActions.allListsRequest()),
  getListsWithTitle: (title) => dispatch(TodoActions.listsWithTitleRequest(title)),
  toggleCompleted: (listId, itemId, completed) => dispatch(TodoActions.toggleCompletedRequest(listId, itemId, completed)),
  updateItem: (listId, itemId, itemData) => dispatch(TodoActions.updateItemRequest(listId, itemId, itemData)),
  deleteItem: (listId, itemId) => dispatch(TodoActions.deleteItemRequest(listId, itemId)),
  deleteList: (listId) => dispatch(TodoActions.deleteListRequest(listId)),
  updateList: (listId, listData) => dispatch(TodoActions.updateListRequest(listId, listData)),
  addItem: (listId, itemData) => dispatch(TodoActions.addItemRequest(listId, itemData)),
  logout: () => dispatch(TodoActions.logoutRequest()),
})

const mapStateToProps = (state) => ({
  lists: state.todo.lists,
  fetching: state.todo.fetching,
})

export default connect(mapStateToProps, mapDispatchToProps)(ListsScreen)
