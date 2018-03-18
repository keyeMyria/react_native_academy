import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import TodoActions from '../Redux/TodoRedux'
import style from './Styles/ListsScreenStyles'
import TodoList from '../Components/TodoList'

class ListsScreen extends React.Component {
  static defaultProps = {
    lists: []
  }

  componentWillMount() {
    this.props.getAllLists()
  }

  toggleCompleted = (listId, itemId, completed) => this.props.toggleCompleted(listId, itemId, completed)

  deleteItem = (listId, itemId) => this.props.deleteItem(listId, itemId)

  render () {
    const lists = this.props.lists
    const todoLists = lists.map(
      list =>
        <TodoList
          key={list.id}
          list={list}
          onToggleCompleted={this.toggleCompleted}
          onDeleteItem={this.deleteItem}
        />
    )
    const title = (lists.length) ? 'Here are your lists!' : 'You have no todo lists! Add them by pressing +'

    return (
      // TODO convert to SectionList for scrolling/refresh/sections?
      <View style={style.mainContainer}>
        <Text style={style.sectionText}>{title}</Text>

        {todoLists}
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAllLists: () => dispatch(TodoActions.allListsRequest()),
  toggleCompleted: (listId, itemId, completed) => dispatch(TodoActions.toggleCompletedRequest(listId, itemId, completed)),
  deleteItem: (listId, itemId) => dispatch(TodoActions.deleteItemRequest(listId, itemId)),
})

const mapStateToProps = (state) => ({
  lists: state.todo.lists
})

export default connect(mapStateToProps, mapDispatchToProps)(ListsScreen)
