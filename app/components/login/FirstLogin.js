/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component , PureComponent } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

import { onSignIn } from "../../redux/auth";
import { NavigationActions } from 'react-navigation';
import theme from '../../theme/theme';

const action= NavigationActions.reset({
  index: 0,
  key: null,
  actions: [
    NavigationActions.navigate({routeName: 'Tabs'}),
  ],
});

export default class FirstLogin extends PureComponent {
  constructor(props){
    super(props)

    this.state={
      user:'',
      pass:''
    }

    this.login=this.login.bind(this)
    this.changeUser=this.changeUser.bind(this)
  

  }

  login(){
    onSignIn()

    this.props.navigation.dispatch(action)
    /*NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ 'Tabs'})
      ]
    })*/
    /*
    onSignIn().then(() => this.props.navigation.navigate("Tabs"));*/
  }

  changeUser(user){
    this.setState({user})
  }

  changePass(pass){
    this.setState({pass})
  }
 
  render() {

    return (

        <View style={{flex:2,alignItems:'center',justifyContent:'flex-end'}}>

          <View style={styles.rowLogin}>
            <Image resizeMode={'stretch'} source={require('../../img/user.png')} style={styles.imgUser}/>
            <TextInput returnKeyType={'next'}  underlineColorAndroid={'transparent'} style={styles.textInput} placeholder={'Número de Documento'} placeholderTextColor={'#FFFFFF'} onChangeText={usuario => this.changeUser(usuario)}></TextInput>
          </View>

          <View style={styles.rowLogin}>
            <Image resizeMode={'stretch'} source={require('../../img/pass.png')} style={styles.imgUser}/>
            <TextInput returnKeyType={'next'}  underlineColorAndroid={'transparent'} style={styles.textInput} placeholder={'Contraseña'} placeholderTextColor={'#FFFFFF'} onChangeText={pass => this.changePass(pass)}></TextInput>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-between',alignSelf:'stretch',paddingLeft:40,paddingRight:40,marginBottom:10}}>
            <TouchableOpacity style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
              <View style={{flexDirection:'row',marginBottom:5}}>
                <Text style={[styles.textVerySmall]}>INGRESAR CON LA HUELLA</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <View style={styles.icon}>
                  <Image source={require('../../img/huella.png')} resizeMode={'contain'} style={{flex:1,width:undefined}} />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
              <View style={{flexDirection:'row',marginBottom:5}}>
                <Text style={[styles.textVerySmall]}>INGRESAR CON OTP</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <View style={styles.icon}>
                  <Image source={require('../../img/huella.png')} resizeMode={'contain'} style={{flex:1,width:undefined}} />
                </View>
              </View>
            </TouchableOpacity>

          </View>

          <TouchableOpacity style={styles.button} onPress={this.login}>
            <Text style={[styles.textSmall,{color:'black'}]}>CONTINUAR</Text>
          </TouchableOpacity>

          
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'space-between',
    paddingLeft:20,
    paddingRight:20
  },
  line:{
    top:5,
    flex:1,
    borderWidth:1,
    borderColor:'transparent',
    borderTopColor:'#FFFFFF',
    marginLeft:10,
    marginRight:10
  },
  textVerySmall:{
    color:'#FFFFFF',
    fontSize:theme.txtVerySmall
  },

  textSmall:{
    color:'#FFFFFF',
    fontSize:theme.txtSmall
  },
  textNormal:{
    color:'#FFFFFF',
    fontSize:theme.txtNormal
  },
  icon:{
    width:40,
    height:40,
  },
  button:{
    padding:5,
    backgroundColor:'#FFFFFF',
    borderRadius:30,
    alignSelf:'stretch',
    alignItems:'center',
  },
  rowLogin:{
    borderWidth:1,
    borderColor:'#FFFFFF',
    borderRadius:40,
    paddingLeft:10,
    flexDirection:'row',
    marginBottom:5
  },

  imgUser:{
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    width:20,
    height:20
  },

  imgPass:{
    top:4,
    width:20,
    height:20
  },

  textInput:{
    flex:1,
    height:theme.inputHeight,
    color:'#FFFFFF',
    fontSize:theme.txtNormal,
    marginLeft:5,
    marginBottom:0,
    top:2

  }
});


