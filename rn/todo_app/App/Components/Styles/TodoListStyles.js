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
    alignItems: 'center'
  },
  todoListItemsContainer: {
    flex: 1,
    alignSelf: 'stretch'
  },
  todoListTitle: {
    ...Fonts.style.h5,
    color: Colors.frost,
    padding: Metrics.smallMargin,
    alignItems: 'center',
    textAlign: 'center'
  },
  todoItem: {

  },
  listTitleEdit: {
    backgroundColor: Colors.cloud
  }
})
