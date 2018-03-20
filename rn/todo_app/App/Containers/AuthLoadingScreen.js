import React from 'react'
import { ActivityIndicator, AsyncStorage } from 'react-native'

export default class AuthLoadingScreen extends React.Component {
  constructor (props) {
    super(props)
    this._initializeAuth()
  }

  _initializeAuth = async () => {
    const userToken = await AsyncStorage.getItem('jwtToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth')
  }

  render () {
    return (
      <ActivityIndicator animating={true} size="small" color="#00ff00" />
    )
  }
}
