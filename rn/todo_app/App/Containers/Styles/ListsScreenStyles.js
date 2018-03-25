import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  todoListSeparator: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.bloodOrange,
  },
  listsScreenTitleBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    maxHeight: 50,
    marginBottom: 20,
  },
  sectionText: {
    ...ApplicationStyles.screen.sectionText,
    marginVertical: 0,
    paddingVertical: 0,
  },
})
