import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  filterContainer: {
    // backgroundColor: Colors.secondaryBackground,
    flex: 1,
    maxHeight: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  filterInput: {
    marginLeft: 10,
    paddingVertical: 10,
    color: Colors.text,
    flexGrow: 2,
  },
})
