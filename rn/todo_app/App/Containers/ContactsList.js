import React from 'react'
import { Button, FlatList, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native'
import Contacts from 'react-native-contacts'

import style from './Styles/ContactsListStyles'
import Contact from '../Components/Contact'
import TodoActions from '../Redux/TodoRedux'
import { connect } from 'react-redux'


class ContactsList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: [],
      fetching: false,
    }
  }

  componentDidMount() {
    this.getContacts()

    this.setState({
      todoId: this.props.navigation.getParam('todoId'),
      listId: this.props.navigation.getParam('listId'),
    })
  }

  getContacts = () => {
    this.setState({fetching: true})

    Contacts.getAll((err, contacts) => {
      if (err === 'denied') {
        console.tron.log('Access to contacts denied!')
      } else {
        this.setState({ contacts })
      }
      this.setState({ fetching: false })
    })
  }

  updateTodoItemWithContact = (contact) => {
    const { listId, todoId } = this.state
    this.props.updateTodoItem(listId, todoId, {contact: `${contact.givenName} ${contact.familyName}`})
    this.props.navigation.goBack()
  }

  contactsSeparator = () => {
    return (
      <View style={style.contactsSeparator} />
    );
  }

  contact = (item) => {
    return (
      <TouchableOpacity onPress={() => this.updateTodoItemWithContact(item)} >
        <Contact contact={item} />
      </TouchableOpacity>
    )
  }


  render() {
    const contactsList = <FlatList
      data={this.state.contacts}
      keyExtractor={contact => contact.recordID}
      renderItem={({ item }) => this.contact(item)}
      ListEmptyComponent={<Text>You have no friends! Can't attach anyone...</Text>}
      ItemSeparatorComponent={this.contactsSeparator}
    />

    return (
      <View style={style.mainContainer}>
        <Text style={style.sectionText}>Choose a Contact to attach to the ToDo item</Text>

        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
        {this.state.fetching && <ActivityIndicator loading={this.state.fetching} />}
        {!this.state.fetching && contactsList}
      </View>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  updateTodoItem: (listId, itemId, itemData) => dispatch(TodoActions.updateItemRequest(listId, itemId, itemData))
})

export default connect(null, mapDispatchToProps)(ContactsList)
