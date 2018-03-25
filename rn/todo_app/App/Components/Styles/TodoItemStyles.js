import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  todoItemContainer: {
    backgroundColor: Colors.ricePaper,
    flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  todoItemContentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  todoItemContent: {
    marginLeft: 20,
    flexGrow: 2,
  },
  todoEditItemContent: {
    backgroundColor: Colors.snow,
    padding: 10,
  },
  attachmentIconsContainer: {
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  editIcon: {
    paddingRight: 8,
  },
  editingView: {
    flexDirection: 'column',
    alignItems: 'center',
  }
})
