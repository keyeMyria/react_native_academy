import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  todoItemContainer: {
    backgroundColor: Colors.bloodOrange,
    flex: 1,
    maxHeight: 75,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  todoItemContent: {
    marginLeft: 20
  }
})
