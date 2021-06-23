import {StyleSheet, Dimensions} from 'react-native';
import {Color} from '../utils/Color';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogoText: {
    textAlign: 'center',
    marginHorizontal: '25%',
    color: Color.fontColor,
    fontSize: 45,
    marginVertical: '15%',
  },
  forgotText: {
    color: Color.ColorWhite,
    opacity: 0.5,
    fontSize: 20,
    margin: '5%',
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: 0,
    // backgroundColor: 'pink',
  },
  //Header styling
  headerBg: {
    width: '100%',
    height: 70,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  IconHeader: {
    color: 'white',
    fontSize: 25,
    marginHorizontal: '5%',
  },
  HeaderText: {
    color: Color.ColorWhite,
    fontSize: 26,
  },
  btnHeader: {
    borderWidth: 1,
    width: '20%',
    borderRadius: 25,
    margin: 10,
    backgroundColor: Color.buttonNext,
    // borderColor: Color.border,
    alignSelf: 'center',
    //Button shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.56,
    shadowRadius: 3.8,
    elevation: 3,
  },
  btnTextHeader: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    color: Color.ColorWhite,
  },

  //components styles
  inputContainer: {
    borderWidth: 1,
    width: '80%',
    borderRadius: 10,
    color: Color.ColorWhite,
    margin: 10,
    padding: 12,
    backgroundColor: 'rgba(20, 15, 38, 0.648579)',
    // flexDirection: 'row',
    // alignItems: 'center',
    alignSelf: 'center',
  },
  btn: {
    borderWidth: 1,
    width: '80%',
    borderRadius: 25,
    margin: 10,
    backgroundColor: Color.button,
    borderColor: Color.button,
    alignSelf: 'center',
    //Button shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.56,
    shadowRadius: 3.8,
    elevation: 3,
  },
  btnText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    color: Color.ColorWhite,
  },
  centerText: {textAlign: 'center'},
  //Vide lIbraray styles
  galleryContainer: {flex: 1, backgroundColor: 'white'},
  gallerImages: {flexDirection: 'row', flexWrap: 'wrap'},
  Imagegallery: {
    width: screenWidth * 0.22,
    height: screenWidth * 0.22,
    margin: 5,
    borderRadius: 8,
  },
  //Video Edit styles
  videoImage: {
    width: '92%',
    height:'20%',
    height: screenHeight * 0.5,
    margin: '4%',
    borderRadius: 8,
  },
  iconBox: {
    backgroundColor: Color.iconbg,
    borderRadius: 50,
    margin: 5,
  },
  iconImage: {
    width: 30,
    height: 30,
    margin: 15,
    resizeMode: 'contain',
  },
  smallImg: {width: '20%', height: 70, borderRadius: 5},
  mediumImg: {width: '40%', height: 150, borderRadius: 5},
  //Video Edit Templates styles
  plusIcon: {
    width: 10,
    height: 10,
    margin: 5,
  },
  templatesImage: {
    margin: 5,
    width: 100,
    height: 170,
  },
  bottomMargin: {
    marginBottom: 50,
  },
  scroll: {
    marginHorizontal: 20,
  },
  //video sharing
  socialIcon: {width: 70, height: 70},

  //Form client
  clientAddbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    width: '35%',
    borderRadius: 16,
    borderColor: Color.clientBorder,
    borderWidth: 1,
  },
  inputform: {
    marginVertical: 10,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: Color.inputBg,
    borderRadius: 15,
    borderColor: Color.border,
    borderWidth: 0.5,
    padding: 10,
  },
  clientContainer: {
    borderColor: Color.clientBorder,
    borderWidth: 1,
    margin: 10,
    borderRadius: 16,
  },
  //Add text screen
  inputText: {
    borderWidth: 3,
    width: '80%',
    borderRadius: 10,
    color: Color.ColorWhite,
    margin: 10,
    padding: 12,
    fontWeight: 'bold',
    fontSize: 23,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    // flexDirection: 'row',
    // alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
  },
  fontText: {
    fontSize: 20,
    color: Color.fontStyleText,
  },
  colorMain: {
    borderWidth: 1,
    borderRadius: 20,
  },
  CircleColor: {
    height: 25,
    width: 25,
    borderRadius: 20,
    margin: 5,
  },
  //login OR row
  line: {
    backgroundColor: 'gray',
    height: 2,
    width: screenWidth * 0.15,
    alignSelf: 'center',
    opacity: 0.6,
  },
  text: {
    paddingHorizontal: 5,
    fontSize: 13,
    color: Color.ColorWhite,
  },
  lineRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '5%',
  },

  //ItemNumber Screen Styling === Login Continues

  itemContainer: {
    flex: 1,
    paddingTop: '10%',
  },
  MenuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconImage: {
    marginHorizontal: '10%',
    margin: 15,
    color: 'white',
    fontSize: 25,
  },
  Menutext: {
    color: Color.ColorWhite,
    fontSize: 25,
    textTransform: 'uppercase',
  },
  //Videos

  control: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(20, 15, 38, 0.648579)',
  },
  mainBtn: {
    marginRight: 15,
  },
  duration: {
    color: '#FFF',
    marginLeft: 15,
  },
});
