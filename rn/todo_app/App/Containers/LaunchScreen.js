import React, { Component } from 'react'
import { AsyncStorage, ActivityIndicator, Button, Text, TextInput, View } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

import TodoActions from '../Redux/TodoRedux'
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated) {
      this.props.navigation.navigate('App')
    }
  }

  logIn = () => {
    const {username, password} = this.state
    this.props.login(username, password)
  }

  getInputErrors = (input) => {
    const inputErrors = _.get(this.props.errors, input, [])
    const errors = inputErrors.reduce((acc, error) => acc + error, '')

    return (
      errors ? <TextInput style={styles.inputError}>{errors}</TextInput> : null
    )
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.sectionText}>
          You need to log in!
        </Text>

        <View style={styles.loginFormContainer}>
          <TextInput
            style={styles.input}
            value={this.state.username}
            placeholder='Username'
            autoCorrect={false}
            autoFocus={true}
            autoCapitalize={'none'}
            onChangeText={text => this.setState({username: text})}
          />
          {this.getInputErrors('username')}
          <TextInput
            style={styles.input}
            value={this.state.password}
            placeholder='Password'
            autoCorrect={false}
            autoCapitalize={'none'}
            securedTextEntry={true}
            onChangeText={text => this.setState({password: text})}
          />
          {this.getInputErrors('password')}

          {this.getInputErrors('non_field_errors')}
          <Button title='Log In' onPress={this.logIn} disabled={this.props.fetching} />
          <ActivityIndicator animating={this.props.fetching} size="small" color="#00ff00" />
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(TodoActions.loginRequest(username, password))
})

const mapStateToProps = (state) => ({
  isAuthenticated: state.todo.isAuthenticated,
  fetching: state.todo.fetching,
  errors: state.todo.error
})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
