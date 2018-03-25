import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import style from './Styles/FilterContainerStyles'
import Colors from '../Themes/Colors'


export default class ListsFilter extends React.Component {
  static propTypes = {
    onFilter: PropTypes.func.isRequired,
    fetching: PropTypes.bool,
  }

  static defaultProps = {
    fetching: false,
  }

  filter = (title) => {
    this.props.onFilter(title)
  }

  render () {
    return (
      <View style={style.filterContainer}>
        <TouchableOpacity onPress={this.filter}>
          <Icon name={'ios-search-outline'} size={20} color='#900'/>
        </TouchableOpacity>

        <TextInput
          style={style.filterInput}
          placeholder={'filter lists by title...'}
          placeholderTextColor={Colors.text}
          spellCheck={false}
          autoCapitalize={'none'}
          autoCorrect={false}
          onChangeText={text => this.filter(text)}
        />
        {this.props.fetching && <ActivityIndicator loading={this.props.fetching} />}
      </View>
    )
  }
}
