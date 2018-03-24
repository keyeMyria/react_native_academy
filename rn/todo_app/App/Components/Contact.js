import React from 'react'
import { Platform, Text, View } from 'react-native'
import _ from 'lodash'

import style from './Styles/ContactStyles'

export default class Contact extends React.Component {
  formatName = (contact) => {
    if (Platform.OS === 'ios') {
      return `${contact.givenName} ${contact.middleName} ${contact.familyName}`
    } else {
      return contact.givenName
    }
  }

  formatEmail = (contact) => {
    return _.get(contact, 'emailAddresses.0.email', '')
  }

  render () {
    return (
      <View style={style.contactContainer}>
        {console.tron.log(this.props.contact)}
        <Text style={style.contactText}>{this.formatName(this.props.contact)}</Text>
        <Text style={style.contactSubtext}>{this.formatEmail(this.props.contact)}</Text>
      </View>
    )
  }
}
