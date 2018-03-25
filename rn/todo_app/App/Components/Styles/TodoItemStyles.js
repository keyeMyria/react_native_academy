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
  todoItemContent: {
    marginLeft: 20
  },
  todoEditItemContent: {
    backgroundColor: Colors.snow,
    padding: 10,
  },
  attachmentIconsContainer: {
    // TODO align Attachment Icons
    // borderWidth: 1,
    // borderColor: 'red',
    // flex: 1,
    // alignItems: 'center',
    // flexBasis: 10,
  },
})
