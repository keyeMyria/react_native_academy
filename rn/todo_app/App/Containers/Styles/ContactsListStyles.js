import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  contactsSeparator: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.bloodOrange,
  }
})
