import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  contactContainer: {
    flex: 1,
    height: 45,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactText: {
    color: Colors.frost,
  },
  contactSubtext: {
    color: Colors.facebook,
  }
})
