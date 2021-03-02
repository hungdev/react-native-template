import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Fonts, Colors } from 'themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingTop: '20%',
    paddingBottom: Metrics.baseMargin,
    backgroundColor: Colors.background,
    flex: 1
  },
  logo: {
    fontFamily: Fonts.type.PacificoRegular,
    color: Colors.primary,
    fontSize: 48,
    textAlign: 'center',
  },
  line: {
    height: 95,
    width: '100%',
    resizeMode: 'contain',
    position: 'absolute',
    top: 40,
    left: '0%',
  },
  txtSignIn: {
    position: 'absolute',
    top: 90,
    left: '40%',
    fontSize: 24,
    fontWeight: '700',
  },
  titleInput: {
    alignSelf: 'flex-start',
    marginLeft: '5%',
    marginBottom: Metrics.smallMargin,
    fontSize: Fonts.size.medium
  },
  forgotPassword: {
    color: Colors.darkYellow,
    marginLeft: '5%',
    marginTop: Metrics.baseMargin,
    fontSize: Fonts.size.mini,
    textDecorationLine: 'underline'
  },
  btnSignIn: {
    width: '40%',
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 3,
    marginTop: Metrics.doubleSection,
    backgroundColor: Colors.primary,
  },
  txtBtnLogin: {
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
  },

})
