import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  input: {
    ...ApplicationStyles.screen.input,
    width: '100%',
  }
})
