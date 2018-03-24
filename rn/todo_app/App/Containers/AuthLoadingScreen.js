import React from 'react'
import { ActivityIndicator, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'

class AuthLoadingScreen extends React.Component {
  constructor (props) {
    super(props)

    this.props.navigation.navigate(this.props.jwtToken ? 'App' : 'Auth')
  }

  render () {
    return (
        <ActivityIndicator animating={true} size="small" color="#00ff00" />
    )
  }
}

const mapStateToProps = (state) => ({
  jwtToken: state.todo.jwtToken
})
export default connect(mapStateToProps)(AuthLoadingScreen)
