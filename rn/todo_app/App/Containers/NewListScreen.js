import React from 'react'
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

import TodoActions from '../Redux/TodoRedux'
import style from './Styles/NewListStyles'
import Icon from 'react-native-vector-icons/Ionicons'

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
        <Text style={style.sectionText}>New List will be here</Text>
        <TextInput placeholder={'List title'} onChangeText={(newListTitle) => this.setState(...this.state, {newListTitle})} />

        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Icon name={'ios-close'} size={40} color='#900'/>
        </TouchableOpacity>
        <Button title={'Add new list'} onPress={this.addNewList} />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addList: (listData) => dispatch(TodoActions.addListRequest(listData))
})

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(NewListsScreen)
