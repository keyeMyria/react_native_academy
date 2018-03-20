import React, { Component } from 'react'
import { ActivityIndicator, Button, Text, TextInput, View } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

import TodoActions from '../Redux/TodoRedux'
import styles from './Styles/LaunchScreenStyles'

class RegisterScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated) {
      this.props.navigation.navigate('App')
    }
  }

  register = () => {
    const {username, password, email} = this.state
    this.props.register(username, password, email)
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
          Register an account!
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

          <TextInput
            style={styles.input}
            value={this.state.email}
            placeholder='Email'
            autoCorrect={false}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            onChangeText={text => this.setState({email: text})}
          />
          {this.getInputErrors('email')}

          {this.getInputErrors('non_field_errors')}
          <Button title='Register' onPress={this.register} disabled={this.props.fetching} />
          <ActivityIndicator animating={this.props.fetching} size="small" color="#00ff00" />
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  register: (username, password, email) => dispatch(TodoActions.registerRequest(username, password, email))
})

const mapStateToProps = (state) => ({
  fetching: state.todo.fetching,
  errors: state.todo.error
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
