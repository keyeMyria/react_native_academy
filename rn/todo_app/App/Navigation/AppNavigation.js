import { StackNavigator } from 'react-navigation'

import LaunchScreen from '../Containers/LaunchScreen'
import ListsScreen from '../Containers/ListsScreen'
import NewListScreen from '../Containers/NewListScreen'
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  ListsScreen: { screen: ListsScreen },
  NewListScreen: { screen: NewListScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ListsScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
