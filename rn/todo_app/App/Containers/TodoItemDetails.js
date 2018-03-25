import React from 'react'
import { Image, Text, View } from 'react-native'

import {getImageData} from '../Redux/TodoRedux'
import style from './Styles/TodoItemDetails'
import { connect } from 'react-redux'

class TodoItemDetails extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#232b36',
    }
  }

  constructor (props) {
    super(props)

    this.state = {
      item: this.props.navigation.getParam('item', {})
    }
  }

  render () {
    const listUri = this.state.item.todo_list
    // Parses the listID from the list URI
    // E.g. for http://127.0.0.1:8000/lists/11/ -> 11 should be yielded
    const listIdResult = /\/(\d+)\/$/.exec(listUri)
    const key = `${listIdResult[1]}:${this.state.item.id}`

    return(
      <View style={[style.mainContainer, {padding: 20}]} >
        <Text style={style.sectionText}>Details of a Todo Item</Text>

        <Text style={style.itemAttr}>URL: {this.state.item.url}</Text>
        <Text style={style.itemAttr}>ID: {this.state.item.id}</Text>
        <Text style={style.itemAttr}>TODO_LIST: {this.state.item.todo_list}</Text>
        <Text style={style.itemAttr}>CONTENT: {this.state.item.content}</Text>
        <Text style={style.itemAttr}>COMPLETED: {this.state.item.completed ? 'True' : 'False'}</Text>
        <Text style={style.itemAttr}>CONTACT: {this.state.item.contact}</Text>
        <Text style={style.itemAttr}>IMAGE: {this.state.item.image}</Text>
        {this.state.item.image && <Image
          style={{width: 250, height: 250}}
          source={{uri: this.props.imageData(key)}}
        />}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  imageData: key => getImageData(state, key),
})


export default connect(mapStateToProps)(TodoItemDetails)
