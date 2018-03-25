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
    height: 100,
  },
  todoListItemsContainer: {
    flex: 1,
    alignSelf: 'stretch'
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
