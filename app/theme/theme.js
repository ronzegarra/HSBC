import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');
//486cad

//8cc63e Color verde 1 GNB
//84BD00 Color verde 2 GNB
//6fc72c Color verde 3 GNB

const smallDevice=height<540


const theme = {
  width: width,
  height: height,
  //colorHeader:'#d90613',
  colorHeader: '#FFFFFF',
  //colorPrincipal:'#d90613',
  colorPrincipal: '#DC1726',
  colorSubTitle: '#6F7072',
  smallDevice: smallDevice,
  margin: 10,
  txtSmall: smallDevice ? 10 : 12,
  txtVerySmall: smallDevice ? 9 : 11,
  txtNormal: smallDevice ? 12 : 14,
  txtMedium: smallDevice ? 14 : 16,
  txtBig: smallDevice ? 18 : 20,
  inputHeight: smallDevice ? 30 : 35,
  //heightLogo:smallDevice ? height*0.2 : height*0.23,
  heightLogo: smallDevice ? height * 0.02 : height * 0.1,
  //widthLogo: smallDevice ? width*0.7: width*0.8,
  widthLogo: smallDevice ? width * 0.7 : width * 0.65,

  //heightInputLogin: smallDevice ?  height*0.054 : height*0.05315,

  heightInputLogin: smallDevice ? height * 0.054 : 34,
  widthInputLogin: smallDevice ? width * 0.815 : width * 0.835,

  colorInputBackground: '#EEEEED',
  widthInput: width * 0.885
};


export default theme
