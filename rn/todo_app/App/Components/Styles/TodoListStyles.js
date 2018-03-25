import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import Fonts from '../../Themes/Fonts'
import Colors from '../../Themes/Colors'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  todoListContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  todoListItemsContainer: {
    flex: 1,
    width: '100%',
  },
  todoListTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: Metrics.smallMargin,
    backgroundColor: Colors.bloodOrange,
  },
  todoListTitleText: {
    ...Fonts.style.h5,
    color: Colors.frost,
  },
  todoItem: {
    // flex: 1,
  },
  listTitleEdit: {
    backgroundColor: Colors.frost,
    padding: 8,
  },
  editingView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 50
  }
})
