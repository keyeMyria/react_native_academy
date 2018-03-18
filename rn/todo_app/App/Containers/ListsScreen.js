import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import TodoActions from '../Redux/TodoRedux'
import styles from './Styles/ListsScreenStyles'
import TodoList from '../Components/TodoList'

class ListsScreen extends React.Component {

  componentWillMount() {
    this.props.getAllLists()
  }

  render () {
    const lists = this.props.lists || []
    const todoLists = lists.map(list => <TodoList key={list.id} list={list}/>)

    return (
      <View style={styles.mainContainer}>
        <Text style={styles.sectionText}>Here are your lists!</Text>

        {todoLists}
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAllLists: () => dispatch(TodoActions.allListsRequest())
})

const mapStateToProps = (state) => ({
  lists: state.todo.lists
})

export default connect(mapStateToProps, mapDispatchToProps)(ListsScreen)
