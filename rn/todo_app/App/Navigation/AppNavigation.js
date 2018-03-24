import { StackNavigator, SwitchNavigator } from 'react-navigation'

import AuthLoadingScreen from '../Containers/AuthLoadingScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import ListsScreen from '../Containers/ListsScreen'
import NewListScreen from '../Containers/NewListScreen'
import ContactsList from '../Containers/ContactsList'
import styles from './Styles/NavigationStyles'

const AuthStack = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  RegisterScreen: { screen: RegisterScreen }
})
const AppStack = StackNavigator({
  ListsScreen: { screen: ListsScreen },
  NewListScreen: { screen: NewListScreen },
  ContactsList: { screen: ContactsList },
})

// Manifest of possible screens
const PrimaryNav = SwitchNavigator({
  AuthLoadingScreen: { screen: AuthLoadingScreen },
  Auth: AuthStack,
  App: AppStack,
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'AuthLoadingScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
