import React from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import RNFetchBlob from 'react-native-fetch-blob'
import style from './Styles/TodoItemDetails'

export default class TodoItemDetails extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#232b36',
    }
  }

  constructor (props) {
    super(props)

    this.state = {
      item: this.props.navigation.getParam('item', {}),
      readingImage: false,
    }
  }

  componentDidMount() {
    const listUri = this.state.item.todo_list
    // Parses the listID from the list URI
    // E.g. for http://127.0.0.1:8000/lists/11/ -> 11 should be yielded
    const listIdResult = /\/(\d+)\/$/.exec(listUri)
    const key = `${listIdResult[1]}:${this.state.item.id}`
    let data = ''
    const path = RNFetchBlob.fs.dirs.CacheDir + `/${key}`;

    // Image Data is already a base64 data blob, no need to further encode it.
    RNFetchBlob.fs.readStream(path, 'utf8', 4095).then((ifstream) => {
      this.setState({
        readingImage: true,
      })
      ifstream.open()
      ifstream.onData((chunk) => {
        data += chunk
      })
      ifstream.onError((err) => {
        console.tron.log('Error while reading image data', err)
        this.setState({
          readingImage: false,
        })
      })
      ifstream.onEnd(() => {
        console.tron.log('Success, read: ', data)
        this.setState({
          readingImage: false,
          data,
        })
      })
    })
  }

  render () {
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

        <ActivityIndicator size="small" color="#00ff00" animating={this.state.readingImage}/>

        {this.state.data && <Image
          style={{width: 250, height: 250}}
          source={{uri: this.state.data}}
        />}
      </View>
    )
  }
}
