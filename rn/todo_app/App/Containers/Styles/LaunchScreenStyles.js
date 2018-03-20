import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  loginFormContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  inputError: {
    // Move to application styles
    color: Colors.bloodOrange
  }
})
