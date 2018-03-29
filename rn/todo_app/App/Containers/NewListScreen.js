import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { connect } from 'react-redux'

import TodoActions from '../Redux/TodoRedux'
import style from './Styles/NewListStyles'

class NewListsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  componentWillMount() {
    this.setState({
      newListTitle: '',
    })
  }

  addNewList = () => {
    this.props.addList({title: this.state.newListTitle})

    this.setState({
      newListTitle: '',
    })
    this.props.navigation.goBack()
  }

  render () {
    return(
      <View style={style.mainContainer}>
        <Text style={style.sectionText}>Add new Todo List</Text>
        <TextInput
          style={style.input}
          placeholder={'List title'}
          onChangeText={newListTitle => this.setState(...this.state, {newListTitle})}
          spellCheck={false}
          autoCapitalize={'none'}
          autoCorrect={false}
        />

        <Button title={'Cancel'} onPress={() => this.props.navigation.goBack()} />
        <Button title={'Add new list'} onPress={this.addNewList} />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addList: listData => dispatch(TodoActions.addListRequest(listData))
})

export default connect(null, mapDispatchToProps)(NewListsScreen)
